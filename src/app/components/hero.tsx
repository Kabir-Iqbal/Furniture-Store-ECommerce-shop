import { Poppins } from "next/font/google"
import Image from "next/image"
import { client } from "@/sanity/lib/client";
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

async function Hero() {


  const data = await client.fetch(`*[_type == "product"]{
      heading,
      price,
      "slug": slug.current,
      "image": image.asset-> url
  }`)


  return (
    // <div className={`max-w-[1440px] mx-auto w-[100%] ${poppins.className} `} >
    //   {/* landing Page */}
    //   <div className={` h-[900px]  w-[100%] mx-auto bg-[#FBEBB5] ${poppins.className} `} >
    //     <div className='flex flex-col py-8 md:flex-row pt-5 sm:gap-5 w-[90%] lg:w-[85%] mx-auto h-full   ' >

    //       <div className=' order-2 md:order-1 flex-nowrap text-[64px]  my-auto flex gap-0 sm:gap-5 flex-col font-semibold ' >
    //         <p className=' text-[28px] sm:leading-[40px]  md:text-[30px] md:leading-[50px] lg:text-[64px] lg:leading-[96px] ' >Rocket single seater</p>

    //         <div className="w-[121px] " >
    //           <button className="text-start text-[24px] leading-[36px] font-semibold " >Shop Now  </button>
    //           <hr className=" border-gray-800 mt-2" />
    //         </div>
    //       </div>

    //       <div className=" order-1 md:order-2 h-full pt-2 sm:py-12 flex-nowrap px-2 md:px-0  mx-auto  sm:[550px]  md:w-[600px]  lg:w-[833px] justify-end items-center flex " >
    //         <Image className=" scale-x-[-1] rotate-3  sm:justify-end flex  w-full h-[400px] sm:h-[500px]  md:h-[600px] lg:h-[650px] "
    //           src={"/images/chair.png"} alt={"chair"} width={500} height={700} />
    //       </div>
    //     </div>
    //   </div>
 <div className="max-w-[1440px] mx-auto w-full">
  <div className="bg-[#FBEBB5] py-8 md:py-16 lg:py-24">
    <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row gap-8 md:gap-16">
      <div className="order-1 md:order-2 md:w-1/2 lg:w-3/5">
        <Image
          src="/images/chair.png"
          alt="chair"
          className="w-full h-auto transform scale-x-[-1] rotate-3"
          width={500}
          height={700}
        />
      </div>
      <div className="order-2 md:order-1 my-auto md:w-1/2 lg:w-2/5 flex flex-col items-start space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold">Rocket single seater</h1>
        <div className="w-full max-w-xs">
           <button className="text-2xl font-semibold border-b border-gray-800 pb-2 mt-5">Shop Now</button>
      </div>
    </div>
    </div>
  </div>



      {/* second section */}
      <div className={` h-[970px] md:h-[672px] bg-[#FAF4F4]  ${poppins.className} `} >
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 justify-center md:justify-between pt-10 py-8 md:py-10 gap-5 md:gap-14 " >

          <div className=" w-full h-full items-center  flex-col flex justify-center px-3 " >
            <div>
              <Image className=" h-[300px] w-[400px] sm:w-full  md:h-[400px] "
                src="/images/stool.png" alt="The Stool" height={400} width={400} />
              <p className="text-[36px] leading-[54px] font-semibold mx-3  " >Side table</p>
              <div className="w-[182px] font-poppins my-5 mx-3 " >
                <button className="text-[24px] leading-[34px] text-center " >View more </button>
                <hr className=" mt-1 border-gray-700 w-[80%]  " />
              </div>
            </div>
          </div>


          <div className="w-full h-full items-center px-3 flex-col flex justify-center  " >
            <div>
              <Image className=" h-[300px] md:h-[400px] w-[400px]  "
                src="/images/sofa.png" alt="The Sofa" height={400} width={400} />
              <p className="text-[36px] leading-[54px] font-semibold mx-3  " >Side table</p>
              <div className="w-[182px] font-poppins my-5 mx-3 " >
                <button className="text-[24px] leading-[34px] text-center  " >View more </button>
                <hr className=" mt-1 border-gray-700 w-[80%]  " />
              </div>
            </div>
          </div>


        </div>
      </div>



      {/* third section */}

      <div className="w-[95%] mx-auto h-fit lg:h-[770px] py-12 " >
        <p className={`text-center my-2 text-[2xl] md:text-3xl font-semibold ${poppins.className} `} >Top Picks For You</p>
        <p className="text-[16px] text-center text-[#9F9F9F] px-3 sm:px-5 " >Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>


        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 lg:gap-2 my-14 lg:my-20 ${poppins.className} `} >
          {data.slice(0, 4).map((products: Product, index: number) => (
            <Link key={index} href={`/dynamicRoute/${products.slug}`} >
              <div className="flex flex-col gap-4  h-[300px] sm:w-[287px] sm:h-[397px]  sm:px-4 md:px-2 " >
                <div className=" w-full h-[287px] " >
                  <Image className=" h-full w-full "
                    src={products.image} alt={products.heading} width={255} height={200} />
                </div>
                <h2 className=" text-[14px] sm:text-[16px] leading-[24px] md:px-2 " > {products.heading} </h2>
                <p className="font-semibold text-[18px] md:text-[24px] leading-[34px] px-2 " > {` Rs.${products.price}`} </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="w-[115px] mx-auto border-b-black border-[1px] " >
          <button className={`text-[20px] leading-[30px] font-semibold py-1  ${poppins.className} `}  > View More </button>
        </div>

      </div>


      {/* 4th section */}
      <div className=" h-fit md:h-[679px] justify-between md:justify-start py-20 md:py-0 bg-[#FFF9E5] flex flex-col sm:flex-row items-center gap-4 lg:gap-10 " >
        <div>
          <Image className=" w-[800px] h-full "
            src="/images/ashgrandsofa 1.png" alt="" width={800} height={600} />
        </div>

        <div className="w-[331px] flex flex-col gap-2 lg:gap-4 sm:px-5 lg:px-0 " >
          <p className={`${poppins.className} text-[16px] text-center `} >New Arrivals</p>
          <p className=" text-[44px] sm:text-[25px] md:text-[30px] lg:text-[48px] font-semibold text-center" >Asgaard sofa</p>

          <div className=" w-[180px] h-[50px] sm:w-[150px] sm:h-[45px] md:w-[180px] md:h-[50px] lg:w-[255px] lg:h-[64px] flex justify-center mx-auto border-black border-[1px] " >
            <button>Order Now </button>
          </div>
        </div>
      </div>
      {/* Blog Section */}
      <div className="bg-white w-[90%] mx-auto h-fit lg:h-auto pt-9 pb-16 overflow-hidden">
        <p className={`text-center  text-[36px] leading-[46px] ${poppins.className} font-semibold mt-2 text-gray-800`}>
          Our Blogs
        </p>
        <p className="text-[16px] leading-[24px] text-gray-500 text-center mt-2">
          Find a bright idea to suit your taste with our great selection
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mt-12">
          {/* Blog Card 1 */}
          <div className={`text-center ${poppins.className} bg-gray-100 p-5 rounded-lg shadow-md`}>
            <Image className="w-full rounded-md h-[280px] object-cover" src="/images/keyboard.jpeg" alt="Keyboard Blog" width={393} height={280} />
            <p className="text-[20px] font-semibold mt-4 text-gray-800">Going all-in with millennial design</p>
            <div className="w-[130px] h-[46px] mx-auto mt-2">
              <button className="text-[18px] font-semibold text-blue-600 hover:text-blue-700 transition-all">Read More</button>
              <hr className="w-[80%] mx-auto border-gray-400 mt-1" />
            </div>
            <p className="text-gray-500 mt-1">5 min • 12th Oct 2022</p>
          </div>

          {/* Blog Card 2 */}
          <div className={`text-center ${poppins.className} bg-gray-100 p-5 rounded-lg shadow-md`}>
            <Image className="w-full rounded-md h-[280px] object-cover" src="/images/bloglaptop.jpeg" alt="Laptop Blog" width={393} height={280} />
            <p className="text-[20px] font-semibold mt-4 text-gray-800">Exploring the future of tech</p>
            <div className="w-[130px] h-[46px] mx-auto mt-2">
              <button className="text-[18px] font-semibold text-blue-600 hover:text-blue-700 transition-all">Read More</button>
              <hr className="w-[80%] mx-auto border-gray-400 mt-1" />
            </div>
            <p className="text-gray-500 mt-1">5 min • 12th Oct 2022</p>
          </div>

          {/* Blog Card 3 */}
          <div className={`text-center ${poppins.className} bg-gray-100 p-5 rounded-lg shadow-md`}>
            <Image className="w-full rounded-md h-[280px] object-cover" src="/images/blog2lap2.jpeg" alt="Our Blog" width={393} height={280} />
            <p className="text-[20px] font-semibold mt-4 text-gray-800">Innovations in modern UI/UX</p>
            <div className="w-[130px] h-[46px] mx-auto mt-2">
              <button className="text-[18px] font-semibold text-blue-600 hover:text-blue-700 transition-all">Read More</button>
              <hr className="w-[80%] mx-auto border-gray-400 mt-1" />
            </div>
            <p className="text-gray-500 mt-1">5 min • 12th Oct 2022</p>
          </div>
        </div>

        {/* View All Button */}
        <div className="w-[160px] mx-auto text-center mt-14">
          <button className={`text-[18px] text-center font-semibold text-blue-600 hover:text-blue-700 transition-all ${poppins.className}`}>
            View All Posts
          </button>
          <hr className=" w-[90%] mx-auto border-gray-400 mt-1" />
        </div>
      </div>


      {/* background image-section */}
      <div className="relative w-full h-[450px]" >
        <div className=" absolute inset-0 w-full h-[450px] bg-custom opacity-50 " > </div>
        <div className={` md:w-[454px] h-[202] mx-auto relative py-24 ${poppins.className} `} >
          <h2 className="font-semibold text-[33px] leading-[50px] md:text-[40px] md:leading-[70px] lg:text-[60px] lg:leading-[90px] text-center">Our Instagram</h2>
          <p className="text-center text-[16px] leading-[24px] md:text-[18px] md:leading-[28px] lg:text-[20px] lg:leading-[30px] " >Follow our store on Instagram</p>
          <div className="text-center mt-4 ">
            <button className=" text[16px] leading-[24px] md:text-[18px] md:leading-[28px] lg:text[20px] lg:leading-[30px] " >Follow Us </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero
