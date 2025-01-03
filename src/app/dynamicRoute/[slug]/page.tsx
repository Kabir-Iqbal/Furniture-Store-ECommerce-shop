"use client"
import Header from "@/app/components/header";
import { client } from "@/sanity/lib/client";
import product from "@/sanity/schemaTypes/product";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { IoStarSharp } from "react-icons/io5";
import { FaStarHalf } from "react-icons/fa";
import Footer from "@/app/components/footer";
import Link from "next/link";




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

interface Params {
    params: {
        slug: string
    }
}

async function Page(params: Params) {

    const { slug } = params.params;

    console.log(slug)

    const data2 = await client.fetch(`*[_type == "product"]{
        heading,
        price,
        "slug": slug.current,
        "image": image.asset-> url
    }`)


    const data = await client.fetch(`*[_type == "product" && slug.current == $slug]{
          heading,
          price,
          "slug": slug.current,
          "image": image.asset-> url
      }`, { slug })

    return (
        <div className="w-[100%] max-w-[1440px] mx-auto " >
            {/* Header */}
            <Header bgColor="white" />

            {/* Body */}
            <div className={` w-[90%] mx-auto ${poppins.className} `} >

                <div>
                    {data.map((products: Product , index : number ) => (
                        <div key={index} className="flex gap-10 my-12 " >
                            {/* right side */}
                            <div className="bg-[#FFF9E5] w-[481px] h-[500px] flex-1  " >
                                <Image className=" w-full h-[381px]"
                                    src={products.image} alt={products.heading} height={380} width={480} />
                            </div>


                            {/* left side */}
                            <div className="flex-1" >
                                <h1 className="text-[42px] leading-[63px] " >{products.heading} </h1>
                                <p className="text-[#9F9F9F] text-[24px] leading-[36px] " > {`Rs ${products.price} `} </p>

                                <div className="flex gap-5 h-[30px] items-center my-5 " >
                                    <div className="flex gap-2 text-yellow-300" >
                                        <IoStarSharp />
                                        <IoStarSharp />
                                        <IoStarSharp />
                                        <IoStarSharp />
                                        <FaStarHalf />
                                    </div>
                                    <div className="w-[1px] bg-black h-[30px] "></div>
                                    <p className="text-[13px] leading-[19.5px] text-[#9F9F9F] " >5 Customer Review</p>
                                </div>

                                <div className="grid gap-3" >
                                    <p className="text-[13px] leading-[19.5px] " >Setting the bar as one of the loudest speakers in its class, the Kilburn is a
                                        compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange
                                        and extended highs for a sound.</p>

                                    <p className="text-[#9F9F9F] text-[14px] leading-[21px] mt-2 " >Size</p>
                                    <div className="flex gap-5 " >
                                        <button className="w-[30px] h-[30px] text-center items-center rounded-md bg-[#FBEBB5]" >L</button>
                                        <button className="w-[30px] h-[30px] text-center items-center rounded-md " >XL</button>
                                        <button className="w-[30px] h-[30px] text-center items-center rounded-md " >Xs</button>
                                    </div>

                                    <p className="text-[14px] leading-[21px] text-[#9F9F9F] mt-4" >Color</p>
                                    <div className="flex gap-5 cursor-pointer " >
                                        <div className="w-[30px] h-[30px] rounded-full bg-[#816DFA] " ></div>
                                        <div className="w-[30px] h-[30px] rounded-full bg-black " ></div>
                                        <div className="w-[30px] h-[30px] rounded-full bg-[#CDBA7B] " ></div>
                                    </div>

                                    <div className="flex gap-5 my-8 " >
                                        <div className="flex border-[#9F9F9F] border-[1px] items-center justify-between px-3 w-[123px] h-[64px] rounded-lg ">
                                            <button> - </button>
                                            <p>1</p>
                                            <button> + </button>
                                        </div>

                                        <div className="w-[215px] h-[64px] items-center text-center rounded-2xl border-[1px] border-black " >
                                            <button className="w-full h-full " > Add To Cart  </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>

                <hr className="text-[#FFFFFF] w-full my-2 mb-8 " />

                <div className="flex gap-10 my-10 justify-center" >
                    <p className="text-[24px] leading-[36px] font-semibold " >Description</p>
                    <p className=" text-[24px] leading-[36px] text-[#9F9F9F] " >Additional Information</p>
                    <p className=" text-[24px] leading-[36px] text-[#9F9F9F] " >Reviews [5]</p>
                </div>

                <div className="text-[16px] leading-[24px] text-[#9F9F9F] grid gap-8 my-5 px-20 " >
                    <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable
                        look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>

                    <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering.
                        Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted
                        hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is
                        both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your
                        personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
                </div>

                <div className="flex gap-10 my-12 " >
                    <div className="flex-1 h-[348px] flex items-center bg-[#FFF9E5] " >
                        <Image className="w-full  h-[250px] "
                            src="/images/mayursofa.png" alt="Mayur Sofa" height={200} width={300} />
                    </div>

                    <div className="flex-1 h-[348px] flex items-center bg-[#FFF9E5] " >
                        <Image className="w-full h-[250px] "
                            src="/images/cloudsofa.png" alt="Mayur Sofa" height={200} width={300} />
                    </div>
                </div>


                <hr className="border-[1px] border-gray-300 my-3 " />
               
               {/* Getting data from sanity  */}

                <div>
                    <h1 className="text-[36px] leading-[54px] font-semibold  text-center mt-14 " >Related Products</h1>
                    <div className={`grid grid-cols-4 gap-5   my-14 ${poppins.className} `} >
                        {data2.slice(0, 4).map((products: Product, index: number) => (
                            <Link key={index} href={`/dynamicRoute/${products.slug}`} >
                            <div className="flex flex-col gap-1 w-[287px] h-[397px]  " >
                                <div className=" w-full h-[287px] " >
                                    <Image className=" h-full w-full "
                                        src={products.image} alt={products.heading} width={255} height={200} />
                                </div>
                                <h2 className="text-[16px] leading-[24px] px-2 " > {products.heading} </h2>
                                <p className="font-semibold text-[24px] leading-[34px] px-2 " > {` Rs.${products.price}`} </p>
                            </div>
                         </Link>   
                        ))}
                    </div>

                    <div className="w-[115px] mx-auto border-b-black border-[1px] mb-20 " >
                        <button className={`text-[20px] leading-[30px] font-semibold py-1  ${poppins.className} `}  > View More </button>
                    </div>

                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Page
