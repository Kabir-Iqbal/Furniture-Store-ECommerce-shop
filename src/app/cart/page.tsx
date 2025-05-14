"use client";
import Header from "../components/header";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import { useCart } from "../contextapi/Cartcontext"; // Cart context import کریں
import CustomPolicy from "../components/custompolicy";
import Footer from "../components/footer";
import { useState } from "react";
import product from "@/sanity/schemaTypes/product";
import { RiDeleteBin6Line } from "react-icons/ri";




const Cart = () => {

    const { state, dispatch } = useCart(); // cart items اور dispatch function کو context سے حاصل کریں


    // اگر cart empty ہو تو message دکھائیں
    // if (state.cart.length === 0) {
    //     return <h1>Your cart is empty.</h1>;
    // }



    //    collect Last subtotal amount
    const totalamount = state.cart.reduce((sum, item) => {
        const Subtotal = Number(item.price.replace(/,/g, "")) * Number(item.quantity);
        return sum + Subtotal;

    }, 0)

    return (
        <div>
            {/* Header */}
            <Header bgColor="white" />


            {/* Dashboard */}

            <div className="w-full h-[316px] items-center relative mb-8 " >

                <div className="h-full w-full absolute inset-0 shop-bg-custom opacity-50 "> </div>
                <div className="relative w-[125px] h-full mx-auto flex flex-col justify-center  " >
                    <Image className="mx-auto "
                        src={"/images/logo.png"} alt="" width={77} height={77} />
                    <h1 className=" text-[38px] leading-[168px] lg:text-[48px] lg:leading-[72px] font-semibold text-center " >Cart</h1>

                    <div className="flex text-[16px] leading-[24px] gap-1 items-center mx-auto " >
                        <p className="font-semibold" >Home</p>
                        <MdOutlineKeyboardArrowRight />
                        <p>Cart</p>
                    </div>
                </div>

            </div>


            <div className=" flex gap-2 justify-between px-8 my-8 " >
                {/* Cart items ko render karen */}
                <div className="w-[70%] " >

                    {/* Headings (Displayed Once) */}
                    <div className="flex px-10 bg-[#FFF9E5]  py-4 font-semibold">
                        <div className="w-2/5 text-center">Product</div>
                        <div className="w-1/5 text-center">Price</div>
                        <div className="w-1/5 text-center">Quantity</div>
                        <div className="w-1/5 text-center">Subtotal</div>
                    </div>

                    {state.cart.map((item, index: number) => (
                        <div key={index} className="flex gap-8 my-4">
                            <div className="w-[100%] flex  " >

                                <div className="w-2/5 " >
                                    <ul className="flex gap-1 items-center  bg-none bg-transparent" >
                                        <li>
                                            <div className="w-[106px] h-[106px] object-cover " >
                                                <Image className="w-full h-full "
                                                    src={item.image} alt={item.heading} width={106} height={106} />
                                            </div>
                                        </li>
                                        <li> {item.heading} </li>
                                    </ul>
                                </div>

                                <div className="w-1/5 text-center my-auto " >
                                    {"Rs " + item.price}
                                </div>

                                <div className="w-1/5  text-center my-auto">
                                    {item.quantity}
                                </div>

                                <div className=" w-1/5 flex gap-7 text-center  my-auto ">
                                    {"Rs " + (Number(item.price.replace(/,/g, ""))) * Number(item.quantity)}

                                    {/* Remove button to remove item from cart */}
                                    <div className=" text-xl" >
                                        <button className=" text-red-900   "
                                            onClick={() =>
                                                dispatch({
                                                    type: "REMOVE_FROM_CART",
                                                    payload: item.slug,
                                                })
                                            }
                                        >
                                            <RiDeleteBin6Line />
                                        </button>
                                    </div>
                                </div>

                            </div>



                        </div>
                    ))}
                </div>

                {/*  sub Total */}
                <div className="h-[200px] w-[30%] bg-[#FFF9E5] flex flex-col gap-5 text-center justify-center items-center " >
                    <h2 > Cart Totals </h2>
                    <ul className="flex gap-4" >
                        <li className="font-semibold" > Subtotal</li>
                        <li className="text-[#9F9F9F] ">{`Rs. ${totalamount}`}</li>
                    </ul>

                    <ul className="flex gap-4 ">
                        <li className="font-semibold" >Total</li>
                        <li className="text-[#B88E2F] " >{`Rs. ${totalamount}`} </li>
                    </ul>

                    <button className="boredr-black border-[2px] px-5 py-2 rounded-lg hover:border-gray-800  " >Check Out</button>
                </div>


            </div>

            {/* Custom privacy policy */}
            <CustomPolicy />

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Cart;
