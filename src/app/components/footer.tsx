import Link from "next/link"

function Footer() {
    return (
        <div>
            <div className=" max-w-[1440px] mx-auto w-[100] h-fit md:h-[555px] bg-[#FFFFFF] " >
                <div className=" w-[90%] mx-auto   " >
                    <div className="gap-20 pt-16 md:py-24  flex flex-col md:flex-row justify-between " >

                        <div className="flex flex-col w-full h-full sm:flex-row justify-between gap-8  sm:gap-10 lg:gap-20 " >
                            <div className="text-[#9F9F9F]  justify-center  flex flex-col "  >
                                <div>400 University Drive Suite 200 Coral , </div>
                                <div>Gables </div>
                                <div>FL 33134 USA</div>
                            </div>

                            <div>
                                <p className="text-[#9F9F9F] "  >Links</p>
                                <ul className="flex flex-col gap-3 sm:gap-8 mt-5 sm:mt-10" >
                                    <Link href={"/"} >   <li>Home</li> </Link>
                                    <Link href={"/shop"}>  <li>Shop</li> </Link>
                                    <Link href={"/about"}> <li>About</li> </Link>
                                    <Link href={"/contact"}><li>Contact</li> </Link>
                                </ul>
                            </div>

                            <div>
                                <p className="text-[#9F9F9F] " >Help</p>
                                <ul className="flex flex-col gap-3 sm:gap-8 mt-5 sm:mt-10">
                                    <li>Payment Options</li>
                                    <li>Returns</li>
                                    <li>Privacy Policies</li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <p className="text-[#9F9F9F] "  >  Newsletter </p>
                            <div className="flex gap-7 md:gap-2 h-[24px] my-3 ">
                                <input className=" h-full w-[50%]  border-b-[1px] border-black "
                                    type="email" placeholder="Enter your Email address" name="email" />

                                <button className=" border-b-[1px] border-black h-full  " type="button" > SUBSCRIBE  </button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <hr className="text-[#D9D9D9] border-[1px]  mb-5 " />
                        <p className=" text:[15px] lg:text-[16px] leading-[24px] " >2022 Meubel House. All rights reverved</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
