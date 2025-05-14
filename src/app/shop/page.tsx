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
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";


const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"]
})


interface Product {
    heading: string;
    price: string;
    slug: string;
    image: string;
}


function Page() {

    const [store, setStore] = useState<Product[]> ([])

    //     const data = await client.fetch(`*[_type == "product"]{
    //     heading,
    //     price,
    //     "slug": slug.current,
    //     "image": image.asset-> url
    // }`)


    useEffect(() => {
        const fetchData = async () => {
            try {

                const data = await client.fetch(`*[_type == "product"]{
                    heading,
                    price,
                    "slug": slug.current,
                    "image": image.asset-> url
                }`)

                

                setStore(data)

            } catch (error) {
                throw new Error("Product Not find")
            }

        }
        fetchData()
    }, [])

    if (!store) {
        <p> Loading... </p>
    }


    return (
        <div className={`max-w-[1440px] mx-auto w-[100%] ${poppins.className} `} >
            <Header bgColor="bg-white" />

            <div className="w-full h-[316px] items-center relative mb-8 " >

                <div className="h-full w-full absolute inset-0 shop-bg-custom opacity-50 "> </div>
                <div className="relative w-[125px] h-full mx-auto flex flex-col justify-center  " >
                    <Image className="mx-auto "
                        src={"/images/logo.png"} alt="" width={77} height={77} />
                    <h1 className=" text-[38px] leading-[68px] lg:text-[48px] lg:leading-[72px] font-semibold text-center " >Shop</h1>

                    <div className="flex text-[16px] leading-[24px] gap-1 items-center mx-auto " >
                        <p className="font-semibold" >Home</p>
                        <MdOutlineKeyboardArrowRight />
                        <p>Shop</p>
                    </div>
                </div>

            </div>

            {/* second section */}
            <div className="bg-[#FAF4F4] h-[100px]  " >
                <div className=" w-[93%] lg:w-[90%] mx-auto h-full flex justify-between " >

                    <div className="items-center h-full flex gap-2 sm:gap-3 md:gap-4 lg:gap-8 " >
                        <div className="flex items-center gap-2 " >
                            <HiBars3CenterLeft className="text-xl" />
                            <p className="text-[12px] leading-[24px] sm:text[16px] sm:leading-[26px] md:text-[18px] md:leading-[28px] lg:text-[20px] lg:leading-[30px] " >Filter</p>
                        </div>
                        <RiApps2Fill className="text-xl" />
                        <p>|</p>
                        <p className=" hidden sm:block sm:static text-[12px] leading-[24px] sm:text[16px] sm:leading-[26px] md:text-[18px] md:leading-[28px] lg:text-[20px] lg:leading-[30px] " >Showing 1–16 of 32 results</p>
                    </div>


                    <div className="flex items-center h-full sm:gap-3 md:gap-4 lg:gap-8 " >
                        <div className="flex gap-2 items-center my-auto" >
                            <p className=" text-[12px] leading-[24px] sm:text[16px] sm:leading-[26px] md:text-[18px] md:leading-[28px] lg:text-[20px] lg:leading-[30px]" >Show</p>
                            <div className=" h-[25px] w-[25px] sm:h-[35px] sm:w-[35px] md:h-[45px] md:w-[45px] lg:h-[55px] lg:w-[55px] bg-white flex justify-center items-center " >
                                <p className=" text-[12px] leading-[24px] sm:text[16px] sm:leading-[26px] md:text-[18px] md:leading-[28px] lg:text-[20px] lg:leading-[30px]">16</p>
                            </div>
                        </div>

                        <div className="flex gap-3 items-center my-auto">
                            <p className="text-[12px] leading-[24px] sm:text[16px] sm:leading-[26px] md:text-[18px] md:leading-[28px] lg:text-[20px] lg:leading-[30px]">Short by</p>
                            <div className=" h-[30px] w-[40px] sm:h-[40px] sm:w-[70px] md:h-[45px] md:w-[130px] lg:h-[55px] lg:w-[188px] bg-white flex justify-center items-center " >
                                <p className="text-[12px] leading-[24px] sm:text[16px] sm:leading-[26px] md:text-[18px] md:leading-[28px] lg:text-[20px] lg:leading-[30px]">default</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



            {/* third Section  >> Products Section */}

            <div className="w-[90%] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-5 my-14 lg:my-20 " >
                {store.length === 0 ? (
                <div className="w-full  grid place-items-center my-20 ">
                    <ClipLoader color="#4A90E2" size={30} />
                </div>
                ) :(
                 store.map((products: Product, index: number) => (
                    <Link key={index} href={`/dynamicRoute/${products.slug}`} >
                        <div className="flex flex-col gap-3  h-[300px] sm:w-[287px] sm:h-[397px]  sm:px-4 md:px-2  " >
                            <div className="  w-full h-[287px] " >
                                <Image className=" h-full w-full "
                                    src={products.image} alt={products.heading} width={255} height={200} />
                            </div>
                            <h2 className="text-[14px] sm:text-[16px] leading-[24px] md:px-2 " > {products.heading} </h2>
                            <p className="font-semibold text-[18px] md:text-[24px] leading-[34px] px-2" > {` Rs.${products.price}`} </p>
                        </div>
                    </Link>
                ))
                )}

            </div>






            {/* 4th Section */}

            <CustomPolicy />


            {/* Footer */}
            <Footer />

        </div>
    )
}

export default Page
