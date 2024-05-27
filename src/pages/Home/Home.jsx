import { Image,Button } from "@nextui-org/react"
import { FaCartShopping,FaArrowRight  } from "react-icons/fa6";


function Home() {
  return (
  <section>
    <div className="max-w-[1024px] m-auto min-h-96">
      <div className="grid lg:grid-cols-2 min-h-screen md:grid-cols-2 grid-cols-1">
        <div className="w-full my-auto p-6 flex flex-col gap-2 items-start justify-center">
        <h1 className="font-bold tekoFont text-4xl text-[#162d72]">Style and Comfort</h1>
        <h1 className="font-bold tekoFont text-8xl text-gray-800">Every Step</h1>
        <h1 className="text-base text-gray-500">Discover our stylish, comfortable shoes designed for every occasion. Step confidently with our premium footwear, crafted for durability and elegance. Elevate your every stride.</h1>
        <div className="flex items-center justify-center gap-4 mt-4">
        <Button endContent={<FaArrowRight size={22}/>} size="lg" color="primary">All Product</Button>
        <Button startContent={<FaCartShopping size={22}/>} size="lg" color="primary" variant="bordered">Buy now</Button>
        </div>
        </div>
        <div className="w-full items-center flex justify-center m-auto">
        <Image
          alt="SHOP ALL"
          src="https://i.ibb.co/sjHKqWH/Sport-Shoes.png"
          width={400}
        />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Home
