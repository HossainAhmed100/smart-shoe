import { Link } from "react-router-dom";
import {ShoeLogo} from "../../../assets/ShoeLogo";
import { Avatar, AvatarGroup,Button } from "@nextui-org/react"
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebook, FaInstagram, FaYoutube  } from "react-icons/fa";

function Footer() {
  const getYear = () => {
    return new Date().getFullYear();
}
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 min-[1130px]:grid-cols-12 gap-8 lg:gap-0 pb-14 border-b-2 border-gray-200">
        <div className="min-[1130px]:col-span-5 col-span-1 w-full min-[1130px]:max-w-full mx-auto">
          <div className="flex flex-col max-sm:items-center gap-8 w-full ">
            <Link to="/" className="flex items-center justify-start">
              <ShoeLogo />
              <p className="font-bold text-inherit">Smart Shoe</p>
            </Link>
           <div className="flex flex-col min-[470px]:flex-row items-center gap-3 w-full">
            <div className="relative  text-gray-500 focus-within:text-gray-900 max-sm:w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                <HiOutlineMail size={24} color="gray"/> 
              </div>
              <input type="text" id="default-search"
                className="block w-full max-sm:min-w-full sm:max-w-xs pr-4 pl-12 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                placeholder="mail@pagedone.com"/>
            </div>
            <Button radius="sm" size="lg" color="primary">Subscribe</Button>
           </div>
            <div className="flex items-start">
            <AvatarGroup
              isBordered
              max={3}
              total={1000}
              renderCount={(count) => (
                <p className="text-small text-foreground font-medium ms-2">+{count} others</p>
              )}
            >
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
            </AvatarGroup>
            </div>
          </div>
        </div>
        <div className="min-[1130px]:col-span-7 max-[1130px]:pt-10 lg:pl-14 col-span-1 w-full min-[1130px]:max-w-full mx-auto flex flex-col sm:flex-row justify-between gap-6 ">
          <div className="">
            <h6 className="text-lg font-medium text-gray-900 mb-7 max-sm:text-center">Shortcut</h6>
            <ul className="flex flex-col gap-6">
              <li><Link to="/manShoes">Kids Shoes</Link></li>
              <li><Link to="/manShoes">Man Shoes</Link></li>
              <li><Link to="/manShoes">Women Shoes</Link></li>
            </ul>
          </div>
          <div className="">
            <h6 className="text-lg font-medium text-gray-900 mb-7 max-sm:text-center">Contact</h6>
            <ul className="flex flex-col gap-6">
              <li>
                <p className="text-base max-sm:text-center text-gray-600">+91 945 658 3256</p>
              </li>
              <li>
                <p className="text-base max-sm:text-center text-gray-600">support@pagedone.com</p>
              </li>
              
            </ul>
          </div>
          <div className="">
            <h6 className="text-lg font-medium text-gray-900 mb-7 max-sm:text-center">Office</h6>
            <ul className="flex flex-col gap-6">
              <li><p href="javascript:;"
                  className="text-base font-normal max-sm:text-center text-gray-600 whitespace-nowrap ">Monday - Friday</p>
              </li>
              <li><p href="javascript:;"
                  className="text-base font-normal max-sm:text-center text-gray-600 whitespace-nowrap">9AM - 7PM</p></li>
             
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-5 md:flex-row items-center first-letter:items-center justify-between py-7">
        <p className="font-normal text-sm text-gray-400">©<a href="https://pagedone.io/">Hossain Ahmed </a>{getYear()}, All rights reserved.</p>
        <ul className="flex items-center gap-9">
          <li><a href="javascript:;"
              className="text-gray-500 text-sm font-normal transition-all duration-300 hover:text-indigo-600 focus-within:text-indigo-600 focus-within:outline-0">Terms</a>
          </li>
          <li><a href="javascript:;"
              className="text-gray-500 text-sm font-normal transition-all duration-300 hover:text-indigo-600 focus-within:text-indigo-600 focus-within:outline-0">Privacy</a>
          </li>
          <li><a href="javascript:;"
              className="text-gray-500 text-sm font-normal transition-all duration-300 hover:text-indigo-600 focus-within:text-indigo-600 focus-within:outline-0">Cookies</a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button
            className="w-9 h-9 flex items-center relative border border-gray-300 overflow-hidden justify-center rounded-full bg-white shadow-sm shadow-gray-200 group transition-all duration-300 focus-within:outline-0">
            <FaFacebook />
          </button>
          <button
            className="w-9 h-9 flex items-center relative border border-gray-300 overflow-hidden justify-center rounded-full bg-white shadow-sm shadow-gray-200 group transition-all duration-300 focus-within:outline-0">
            <FaInstagram />
          </button>
          <button
            className="w-9 h-9 flex items-center relative border border-gray-300 overflow-hidden justify-center rounded-full bg-white shadow-sm shadow-gray-200 group transition-all duration-300 focus-within:outline-0">
            <FaYoutube />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Footer
