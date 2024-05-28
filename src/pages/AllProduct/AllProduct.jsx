import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic"
import ProductCard from "../../components/ProductCard";
import { Spinner } from "@nextui-org/react";


function AllProduct() {
  const axiosPublic = useAxiosPublic();
  const {data: shoes = [], isLoading} = useQuery({
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
  return (
    <section>
      <div className="max-w-[1024px] m-auto min-h-screen py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
          {shoes.map((shoe) => <ProductCard key={shoe.id} shoe={shoe}/>)}
        </div>
      </div>
    </section>
  )
}

export default AllProduct
