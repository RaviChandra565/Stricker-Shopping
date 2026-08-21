import React from "react";
import { useCart } from "./Strore/cart-context.jsx";
import Price from "./Price";


export default function CartTable() {
 const { cart, removeFromCart, clearCart } = useCart();


 const subtotal = cart.reduce(
   (sum, item) => sum + item.price * item.quantity,
   0,
 );


 return (
   <div className="overflow-x-auto rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 shadow-sm">
     <table className="min-w-full text-left text-sm text-gray-700 dark:text-lighter">
       <thead className="bg-gray-100 dark:bg-gray-700 text-primary dark:text-light uppercase text-xs tracking-wide">
         <tr>
           <th className="px-4 py-3">Product</th>
           <th className="px-4 py-3">Quantity</th>
           <th className="px-4 py-3">Price</th>
           <th className="px-4 py-3">Action</th>
         </tr>
       </thead>
       <tbody>
         {cart.map((item) => (
           <tr
             key={item.productId}
             className="border-t border-gray-200 dark:border-gray-600"
           >
             <td className="px-4 py-3">
               <div className="flex items-center gap-3">
                 <img
                   src={item.imageUrl}
                   alt={item.name}
                   className="w-14 h-14 object-cover rounded-md"
                 />
                 <span className="font-semibold">{item.name}</span>
               </div>
             </td>
             <td className="px-4 py-3">{item.quantity}</td>
             <td className="px-4 py-3">
               <Price currency="$" price={item.price} />
             </td>
             <td className="px-4 py-3">
               <button
                 type="button"
                 onClick={() => removeFromCart(item.productId)}
                 className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
               >
                 Remove
               </button>
             </td>
           </tr>
         ))}
       </tbody>
     </table>


     <div className="flex flex-col sm:flex-row justify-between items-center gap-3 px-4 py-4 border-t border-gray-200 dark:border-gray-600">
       <button
         type="button"
         onClick={clearCart}
         className="px-4 py-2 bg-primary dark:bg-light text-white dark:text-black rounded-md font-semibold hover:bg-dark dark:hover:bg-lighter transition"
       >
         Clear Cart
       </button>


       <div className="text-lg font-semibold text-primary dark:text-light">
         Total: <Price currency="$" price={subtotal} />
       </div>
     </div>
   </div>
 );
}
