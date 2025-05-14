//  "use client";

// // import { useAppDispatch } from "@/app/lib/feature/hooks";
// // import { add } from "@/app/lib/feature/cart/cartSlice";
// // import React from "react";


// // interface Addtocartprops{
// //     productname : string
// // }

// // const AddtoCart = (productname :{ productname : Addtocartprops}) => {

// //     const dispatch = useAppDispatch();

// //     const handleAddToCart = () => {
// //         dispatch(add({ slug: productname }));
// //     };

// //     return (
// //         <button onClick={handleAddToCart} className="w-full h-full">
// //             Add To Cart
// //         </button>
// //     );
// // };

// // export default AddtoCart;


// import React from "react";
// import { useAppDispatch } from "@/app/lib/feature/hooks";
// import { add } from "@/app/lib/feature/cart/cartSlice";

// interface AddtoCartProps {
//     productname: string;
// }

// const AddtoCart: React.FC<AddtoCartProps> = ({ productname }) => {
//     const dispatch = useAppDispatch();

//     const handleAddToCart = () => {
//         dispatch(add({ slug: productname }));
//     };

//     return (
//         <button onClick={handleAddToCart} className="w-full h-full">
//             Add To Cart
//         </button>
//     );
// };

// export default AddtoCart;
