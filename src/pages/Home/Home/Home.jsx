import { Image,Button } from "@nextui-org/react"
import { FaCartShopping,FaArrowRight  } from "react-icons/fa6";
import { CgArrowTopRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import SponsorPage from "./SponsorPage";

function Home() {
  return (
  <div>
    <section>
      <div className="max-w-[1024px] m-auto min-h-96">
        <div className="grid lg:grid-cols-2 min-h-screen md:grid-cols-2 grid-cols-1">
          <div className="w-full my-auto p-6 flex flex-col gap-2 items-start justify-center">
          <h1 className="font-bold tekoFont text-4xl text-gray-800">Style and Comfort</h1>
          <h1 className="font-bold tekoFont text-8xl text-gray-800">Every Step</h1>
          <h1 className="text-base text-gray-500">Discover our stylish, comfortable shoes designed for every occasion. Step confidently with our premium footwear, crafted for durability and elegance. Elevate your every stride.</h1>
          <div className="flex items-center justify-center gap-4 mt-4">
          <Button radius="sm" endContent={<FaArrowRight size={18}/>} size="lg" 
          className="bg-gradient-to-tr from-gray-800 to-gray-900 text-white shadow-lg">All Product</Button>
          <Button radius="sm" startContent={<FaCartShopping size={18}/>} size="lg" color="default" variant="bordered">Buy now</Button>
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
    <section>
      <SponsorPage />
    </section>
    <section>
      <PhotoGallery />
    </section>
  </div>
  )
}

const PhotoGallery = () => {
  return (
    <div className="min-h-screen py-6 sm:py-8 lg:py-12">
    <div className="m-auto max-w-[1024px] px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
            <div className="flex items-center gap-12">
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">Gallery</h2>
              <p className="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block">
              Discover our stylish, comfortable shoes designed for every occasion. Step confidently with our premium footwear.
              </p>
            </div>
            <Button color="default" size="lg" radius="sm" variant="bordered">
              <Link to={"/allProduct"}>More</Link>
            </Button>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          <Link to="/allProduct"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
            <img 
            src="https://i.ibb.co/wJBNQwK/Rectangle-20.png" 
            loading="lazy" 
            alt="Photo by Minh Pham" 
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
            </div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Metcon 6
            </span>
          </Link>
          <Link to="/allProduct"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
            <img 
            src="https://i.ibb.co/JFX1T6B/Rectangle-19.png" 
            loading="lazy" 
            alt="Photo by Magicle" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
            </div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Air Jordan 1
            </span>
          </Link>
          <Link href="/allProduct"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
            <img 
            src="https://i.ibb.co/mFTmZ21/Rectangle-21.png" 
            loading="lazy" 
            alt="Photo by Martin Sanchez" 
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
            </div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Classic Leather
            </span>
          </Link>
          <Link to="/allProduct"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
            <img 
            src="https://i.ibb.co/mJhJt46/Rectangle-22.png" 
            loading="lazy" 
            alt="Photo by Lorenzo Herrera" 
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
            </div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Retro
            </span>
          </Link>
        </div>
    </div>
</div>
  )
}

export default Home
