"use client"
import Header from '../components/header'
import Image from 'next/image'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import CustomPolicy from '../components/custompolicy';
import Footer from '../components/footer';


function Page() {
  return (
    <div className='max-w-[1440px] mx-auto w-[100%] ' >
      {/* Header */}
      <Header bgColor='white' />
      {/* bg section-1 */}
      <div className="w-full h-[316px] items-center relative mb-8 " >
        <div className="h-full w-full absolute inset-0 shop-bg-custom opacity-50 "> </div>
        <div className="relative w-[196px] h-full mx-auto flex flex-col justify-center  " >
          <Image className="mx-auto "
            src={"/images/logo.png"} alt="" width={77} height={77} />
          <h1 className="text-[48px] leading-[72px] font-semibold text-center " >Contact</h1>

          <div className="flex text-[16px] leading-[24px] gap-1 items-center mx-auto " >
            <p className="font-semibold" >Home</p>
            <MdOutlineKeyboardArrowRight />
            <p>Contact</p>
          </div>
        </div>
      </div>

      <div className='bg-[#FFFFFF] w-[90%] mx-auto py-8 ' >
        <div className='w-[644px] mx-auto ' >
          <h1 className='text-center text-[36px] leading-[54px] font-semibold ' >Get In Touch With Us</h1>
          <p className='text-center text-[16px] leading-[24px] text-[#9F9F9F] ' >For More Information About Our Product & Services. Please Feel Free To Drop Us An Email.
            Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>


        {     /*Location  */}
        <div className='flex h-[923px] py-28 ' >
          <div className='h-[393px]  w-full flex-1' >
            <div className='w-[537px] mx-auto h-full grid gap-10  justify-center ' >

              <div className='flex gap-3 '  >
                <IoLocationSharp className='text-xl' />
                <div className='w-[212px] ' >
                  <h1 className='' >Address</h1>
                  <p>236 5th SE Avenue, New York NY10000, United States</p>
                </div>

              </div>

              <div className='flex gap-3 ' >
                <FaPhoneAlt className='text-xl' />
                <div className='w-[212px]' >
                  <h1>Phone</h1>
                  <p>Mobile: +(84) 546-6789 </p>
                  <p>Hotline: +(84) 456-6789</p>
                </div>
              </div>


              <div className='flex gap-3' >
                <IoTime className='text-xl' />
                <div className='w-[212px]'>
                  <h1>Working Time</h1>
                  <p>Monday-Friday: 9:00 - 22:00 </p>
                  <p>Saturday-Sunday: 9:00 - 21:00</p>
                </div>
              </div>

            </div>
          </div>


          <div className='flex-1 ' >
                  <div className=' w-[527px] mx-auto h-[734px] my-auto ' >
                       <form  className='grid gap-4'  action="">
                              <label  htmlFor="name">
                              <p className='my-1' >  Your Name  </p>
                                <input type="text" name='name' id='name'  placeholder='Your Name..' 
                                className='rounded-xl w-full px-2 h-[75px]  border-[#9F9F9F] border-[2px] text-[#9F9F9F] text-[16px] leading-[24px] ' />
                              </label>

                              <label className='my-4' htmlFor="email">
                              <p className='my-1'> Email Address  </p>
                                <input type="email" name='email' id='email'  placeholder='abc@gmail.com' 
                                className='rounded-xl w-full px-2 h-[75px]  border-[#9F9F9F] border-[2px] text-[#9F9F9F] text-[16px] leading-[24px] ' />
                              </label>

                              <label className='my-4' htmlFor="subject">
                              <p className='my-1'>Subject  </p>
                                <input type="text"  name='subject' id='subject'  placeholder='This is an optional' 
                                className='rounded-xl w-full px-2 h-[75px]  border-[#9F9F9F] border-[2px] text-[#9F9F9F] text-[16px] leading-[24px] ' />
                              </label>

                              <label className='my-4' htmlFor="message">
                              <p className='my-1'>Message  </p>
                                <textarea  name='message' id='message'  placeholder='Hi! i’d like to ask about' 
                                className=' rounded-xl w-full h-[120px]  px-2 border-[#9F9F9F] border-[2px] text-[#9F9F9F] text-[16px] leading-[24px] ' />
                              </label>

                              <div className='w-[237px] h-[48px] flex justify-center items-center border-black border-[1px] rounded-2xl cursor-pointer ' >
                                <button>Submit</button>
                              </div>
                       </form>
                  </div>
           </div>

        </div>


        {/* Custom Privacy & Policy*/}
        <CustomPolicy />

        {/* Footer */}

        <Footer />
        
      </div>
    </div>
  )
}

export default Page
