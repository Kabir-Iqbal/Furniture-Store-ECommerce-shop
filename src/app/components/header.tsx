"use client"
import { CiSearch } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { RiContactsFill } from "react-icons/ri";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const poppins = Poppins({
   subsets: ["latin"],
   weight: ["400", "600", "700"]
 })
 

function Header({bgColor} : {bgColor: string } ) {

   const [isOpen, setisOpne] = useState(false)

   const Toggle =()=> {
      setisOpne(!isOpen)
   }


   return (
      <div className={`max-w-[1440px] h-full mx-auto w-[100%] ${poppins.className} `} >
         <div className={` ${bgColor} flex sm:justify-start  h-full lg:justify-end items-center cursor-pointer shadow-md`} >
            <div className='flex justify-between relative h-full px-8 md:px-14 lg:px-0 lg:gap-10 w-[100%] lg:w-[60%] ' >
               
               <div className=" flex gap-5 sm:hidden text-2xl z-50 h-[100px] ml-3 " >
                  {!isOpen? 
                     <button onClick={Toggle} ><FaBarsStaggered /></button>
                     :
                     <button onClick={Toggle} ><IoMdClose /> </button>
                  }
               </div>
               <ul className={`flex gap-10 sm:gap-8 md:gap-12 sm:flex-row sm:h-[100px] h-[100vh] absolute flex-col top-[-20000px] py-24 sm:py-0 sm:top-0 z-40 w-[60%] left-0 bg-white sm:bg-transparent text-black sm:static items-center text-[16px] leading-6 ${isOpen? 'top-[70px] ' : " "  }  `} >
                     <Link href={"/"} >   <li>Home</li> </Link>
                     <Link href={"/shop"}>  <li>Shop</li> </Link>
                     <Link href={"/about"}> <li>About</li> </Link>
                     <Link href={"/contact"}><li>Contact</li> </Link>
               </ul>
               <ul className="flex gap-5 sm:gap-7 md:gap-8 text-2xl items-center lg:mx-10 h-[100px] " >
                  <li><RiContactsFill /></li>
                  <li><CiSearch /></li>
                  <li><IoMdHeartEmpty /></li>
                  <li><IoCartOutline /></li>
               </ul>
            </div>
         </div>
      </div>
   )
}

export default Header
