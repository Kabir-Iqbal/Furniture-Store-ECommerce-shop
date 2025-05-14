import { Poppins } from "next/font/google"


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"]
})


function CustomPolicy() {
    return (
        <div>
            <div className={`lg:bg-[#FAF4F4] w-full  h-fit lg:h-[300px] ${poppins.className} `} >
                <div className=" w-[90%] mx-auto py-5 lg:py-0 grid grid-cols-1  sm:px-10 md:px-0 md:grid-cols-2 lg:grid-cols-3  h-full items-center gap-10 lg:gap-20 " >
                    <div className="px-3 py-10 lg:py-0 bg-[#FAF4F4] lg:bg-transparent " >
                        <h1 className="text-[27px] leading-[37px] md:text[29px] lg::text-[32px] lg:leading-[48px] font-bold" >Free Delivery</h1>
                        <p className=" text[16px] leading-[26px] md:text-[18px] md:leading-[27px] lg:text-[20px] lg:leading-[30px] text-[#9F9F9F]" >For all oders over $50, consectetur adipim scing elit.</p>
                    </div>

                    <div className="px-3 py-10 lg:py-0 bg-[#FAF4F4] lg:bg-transparent ">
                        <h1 className=" text-[27px] leading-[37px] md:text[29px] lg::text-[32px] lg:leading-[48px] font-bold" >90 Days Return</h1>
                        <p className=" text[16px] leading-[26px] md:text-[18px] md:leading-[27px] lg:text-[20px] lg:leading-[30px] text-[#9F9F9F] " >If goods have problems, consectetur adipim scing elit.</p>
                    </div>

                    <div className="px-3 py-10 lg:py-0 bg-[#FAF4F4] lg:bg-transparent ">
                        <h1 className="text-[27px] leading-[37px] md:text[29px] lg::text-[32px] lg:leading-[48px] font-bold" >Secure Payment</h1>
                        <p className=" text[16px] leading-[26px] md:text-[18px] md:leading-[27px] lg:text-[20px] lg:leading-[30px] text-[#9F9F9F]" >100% secure payment, consectetur adipim scing elit.</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default CustomPolicy
