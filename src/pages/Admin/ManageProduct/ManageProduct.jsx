import { useQuery } from "@tanstack/react-query";
import { Spinner } from "@nextui-org/react";
import AdminProductCard from "../../../components/AdminProductCard";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";


function ManageProduct() {
  const axiosPublic = useAxiosPublic();
  const {data: shoes = [], isLoading, refetch} = useQuery({
    queryKey: ["shoes"],
    queryFn: async () => {
      const res = await axiosPublic.get("/shoes");
      return res.data
    }
  })
  if(isLoading){
    return <div className="flex item-center justify-center w-full min-h-screen">
    <Spinner size="lg" />
    </div>;
  }
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosPublic.delete(`/shoes/${item?.id}`);
        console.log("🚀 ~ handleDelete ~ res:", res.data)
        if(res.data.price){
          refetch()
          Swal.fire({
            icon: "success",
            title: "Item Deleted Successully!.",
            showConfirmButton: false,
            timer: 1500
          });
        }
      }
    });
  }
  return (
    <section>
      <div className="max-w-[1024px] m-auto min-h-screen py-6 px-4">
      <div className="p-4 z-0 mb-6 flex relative justify-between gap-4 bg-content1 overflow-auto rounded-large shadow-small w-full items-center">
        <h1 className="text-xl font-medium">Total Product: {shoes.length > 0 ? shoes.length : 0}</h1>
      </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
          {shoes.map((shoe) => <AdminProductCard key={shoe.id} handleDelete={handleDelete} shoe={shoe}/>)}
        </div>
      </div>
    </section>
  )
}

export default ManageProduct
