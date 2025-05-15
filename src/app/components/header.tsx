"use client"
import Link from "next/link";
import { Poppins } from "next/font/google";
import { use, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { RiAccountCircleLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "../contextapi/Cartcontext";

//  Clerk Auth
import { SignInButton, SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs'
import { User } from "@clerk/nextjs/server";

const poppins = Poppins({
   subsets: ["latin"],
   weight: ["400", "600", "700"]
})


function Header({ bgColor }: { bgColor: string }) {

   const [isOpen, setisOpne] = useState(false)

   const Toggle = () => {
      setisOpne(!isOpen)
   }


   const { state, dispatch } = useCart()


   // get User Information
   const {isLoaded , isSignedIn , user} = useUser()
   



   return (
      <div className={`max-w-[1440px] h-full  mx-auto w-[100%]  ${poppins.className} `} >
         <div className={` ${bgColor} flex sm:justify-start  h-full lg:justify-end items-center cursor-pointer shadow-md`} >
            <div className='flex justify-between relative h-full px-8 md:px-14 lg:px-0 lg:gap-10 w-[100%] lg:w-[60%] ' >

               <div className=" flex gap-5 sm:hidden text-2xl z-50 h-[100px] ml-3 " >
                  {!isOpen ?
                     <button onClick={Toggle} ><FaBarsStaggered /></button>
                     :
                     <button onClick={Toggle} ><IoMdClose /> </button>
                  }
               </div>
               <ul className={`flex gap-10 sm:gap-8 md:gap-12 sm:flex-row sm:h-[100px] h-[100vh] absolute flex-col top-[-20000px] py-24 sm:py-0 sm:top-0 z-40 w-[60%] left-0 bg-white sm:bg-transparent text-black sm:static items-center text-[16px] leading-6 ${isOpen ? 'top-[70px] ' : " "}  `} >
                  <Link href={"/"} >   <li>Home</li> </Link>
                  <Link href={"/shop"}>  <li>Shop</li> </Link>
                  <Link href={"/about"}> <li>About</li> </Link>
                  <Link href={"/contact"}><li>Contact</li> </Link>
               </ul>

               <ul className="flex gap-3 sm:gap-7 md:gap-8 text-2xl items-center lg:mx-10 h-[100px]  " >  
                  <li><CiSearch /></li>
                  <li><IoMdHeartEmpty /></li>

                  <li>
                     <div className="flex order-3 gap-1 md:gap-3 text-3xl z-50   md:flex static cursor-pointer  " >
                        <div className="relative  "  >
                           <Link href="/cart" >   <IoCartOutline /> </Link>
                           <span className=" absolute bg-[#2A254B] text-white -top-3 -right-2 h-5 w-5 flex items-center justify-center rounded-full text-[14px]   " >
                              {state.cart.length}
                           </span>
                        </div>
                     </div>
                  </li>

                  <li className="text-[16px] leading-[25px]  text-center  py-1 w-[50px] md:w-20 font-semibold hover:text-gray-600 " > 
                     <SignedOut>
                     <SignInButton> Sign In  </SignInButton>
                  </SignedOut>

                  <SignedIn>
                     <UserButton/>
                  </SignedIn>
                  <h1> {user?.firstName} </h1>

                  </li>

               </ul>
            </div>
         </div>
      </div>
   )
}

export default Header
