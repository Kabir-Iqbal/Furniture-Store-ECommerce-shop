"use client"
import Header from "../components/header"
import Image from "next/image"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { RiApps2Fill } from "react-icons/ri";
import Footer from "../components/footer";
import { client } from "@/sanity/lib/client";
import product from "@/sanity/schemaTypes/product";
import CustomPolicy from "../components/custompolicy";
import { Poppins } from "next/font/google"
import Link from "next/link";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"]
})


interface Product {
    heading : string;
    price : string;
    slug : string;
    image : string;
}

 async function  Page() {

    const data  =  await client.fetch(`*[_type == "product"]{
    heading,
    price,
    "slug": slug.current,
    "image": image.asset-> url
}`)





    return (
        <div className={`max-w-[1440px] mx-auto w-[100%] ${poppins.className} `} >
            <Header bgColor="bg-white" />
            <div className="w-full h-[316px] items-center relative mb-8 " >
                <div className="h-full w-full absolute inset-0 shop-bg-custom opacity-50 "> </div>
                <div className="relative w-[125px] h-full mx-auto flex flex-col justify-center  " >
                    <Image className="mx-auto "
                        src={"/images/logo.png"} alt="" width={77} height={77} />
                    <h1 className="text-[48px] leading-[72px] font-semibold text-center " >Shop</h1>

                    <div className="flex text-[16px] leading-[24px] gap-1 items-center mx-auto " >
                        <p className="font-semibold" >Home</p>
                        <MdOutlineKeyboardArrowRight />
                        <p>Shop</p>
                    </div>
                </div>

            </div>

            {/* second section */}
            <div className="bg-[#FAF4F4] h-[100px]  " >
                <div className="w-[90%] mx-auto h-full flex justify-between " >
                    <div className="items-center h-full flex gap-8 " >
                        <div className="flex items-center gap-2 " >
                            <HiBars3CenterLeft className="text-xl" />
                            <p className="text-[20px] leading-[30px] " >Filter</p>
                        </div>
                        <RiApps2Fill className="text-xl" />
                        <p>|</p>
                        <p className="text-[20px] leading-[30px] " >Showing 1–16 of 32 results</p>
                    </div>


                    <div className="flex items-center h-full gap-8 " >
                        <div className="flex gap-2 items-center my-auto" >
                            <p className="text-[20px] leading-[30px] " >Show</p>
                            <div className="h-[55px] w-[55px] bg-white flex justify-center items-center " >
                                <p className="text-[20px] leading-[30px]">16</p>
                            </div>
                        </div>

                        <div className="flex gap-3 items-center my-auto">
                            <p className="text-[20px] leading-[30px]">Short by</p>
                            <div className="h-[55px] w-[188px] bg-white flex justify-center items-center " >
                                <p className="text-[20px] leading-[30px]">default</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* third Section  >> Products Section */}
            
            <div className="grid grid-cols-4 gap-5 w-[90%] mx-auto my-20 " >    
               {data.map((products: Product , index : number )=>(
                <Link key={index} href={`/dynamicRoute/${products.slug}`} >
                <div  className="flex flex-col gap-1 w-[287px] h-[397px]  " >
                    <div className=" w-full h-[287px] " >
                        <Image className=" h-full w-full "
                         src={products.image} alt={products.heading} width={255} height={200} />
                    </div>    
                        <h2 className="text-[16px] leading-[24px] px-2 " > {products.heading} </h2>
                        <p className="font-semibold text-[24px] leading-[34px] px-2 " > {` Rs.${products.price}`} </p>  
                </div>
                </Link>
                ) )  } 
               
            </div>
            





            {/* 4th Section */}

          <CustomPolicy />


            {/* Footer */} 
            <Footer />

        </div>
    )
}

export default Page
