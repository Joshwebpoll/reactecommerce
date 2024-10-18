// import { useState } from "react";
// import { useGlobalContext } from "../context/ecomContext";

// const CartQuantity = ({ IncreaseCart, decreaseCart, data }) => {
//   const { quantity } = useGlobalContext();
//   return (
//     <div className="relative flex items-center max-w-[8rem] mt-4">
//       <button
//         onClick={() => decreaseCart(data.id)}
//         type="button"
//         id="decrement-button"
//         data-input-counter-decrement="quantity-input"
//         className="bg-[#2B38D1] dark:bg-gray-700 dark:hover:bg-[#1A30AF] dark:border-gray-600 hover:bg-[#1A30AF] border border-gray-300 rounded p-3  focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
//       >
//         <svg
//           className="w-3 h-3 text-white dark:text-white font-bold"
//           aria-hidden="true"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 18 2"
//         >
//           <path
//             stroke="currentColor"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             stroke-width="2"
//             d="M1 1h16"
//           />
//         </svg>
//       </button>
//       <p className="px-3">{quantity}</p>
//       <button
//         // onClick={() => decreaseCart}
//         onClick={() => IncreaseCart(data.id)}
//         type="button"
//         id="increment-button"
//         className="bg-[#2B38D1] dark:bg-gray-700 dark:hover:bg-[#1A30AF] dark:border-gray-600 hover:bg-[#1A30AF] border border-gray-300 rounded p-3  focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
//       >
//         <svg
//           className="w-3 h-3 text-white dark:text-white font-bold"
//           aria-hidden="true"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 18 18"
//         >
//           <path
//             stroke="currentColor"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             stroke-width="2"
//             d="M9 1v16M1 9h16"
//           />
//         </svg>
//       </button>
//     </div>
//   );
// };

// export default CartQuantity;
