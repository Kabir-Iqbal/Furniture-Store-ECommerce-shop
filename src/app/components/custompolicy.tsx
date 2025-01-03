import { Poppins } from "next/font/google"


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"]
})


function CustomPolicy() {
    return (
        <div>
            <div className={`bg-[#FAF4F4] w-full h-[300px] ${poppins.className} `} >
                <div className=" w-[90%] mx-auto grid grid-cols-3  h-full items-center gap-20 " >
                    <div>
                        <h1 className="text-[32px] leading-[48px] font-bold" >Free Delivery</h1>
                        <p className="text-[20px] leading-[30px] text-[#9F9F9F] " >For all oders over $50, consectetur adipim scing elit.</p>
                    </div>

                    <div>
                        <h1 className="text-[32px] leading-[48px] font-bold" >90 Days Return</h1>
                        <p className="text-[20px] leading-[30px] text-[#9F9F9F] " >If goods have problems, consectetur adipim scing elit.</p>
                    </div>

                    <div>
                        <h1 className="text-[32px] leading-[48px] font-bold" >Secure Payment</h1>
                        <p className="text-[20px] leading-[30px] text-[#9F9F9F] " >100% secure payment, consectetur adipim scing elit.</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default CustomPolicy
