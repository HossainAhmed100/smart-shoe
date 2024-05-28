import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic"
import ProductCard from "../../components/ProductCard";
import { Divider, Spinner } from "@nextui-org/react";


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
      <div className="max-w-[1024px] m-auto min-h-screen py-10 px-4">
        <div className="flex items-center justify-center w-full">
        <div className="flex py-10 items-center space-x-4">
          <Divider className="w-8 bg-black h-0.5" />
          <span className="text-2xl font-bold">Best Selling</span>
          <Divider className="w-8 bg-black h-0.5" />
        </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
          {shoes.map((shoe) => <ProductCard key={shoe.id} shoe={shoe}/>)}
        </div>
      </div>
    </section>
  )
}

export default AllProduct
