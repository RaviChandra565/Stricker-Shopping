import {
 createContext,
 useContext,
 useEffect,
 useMemo,
 useReducer,
} from "react";


export const CartContext = createContext(null);


export const useCart = () => {
 const context = useContext(CartContext);


 if (!context) {
   throw new Error("useCart must be used inside CartProvider");
 }


 return context;
};


const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const CLEAR_CART = "CLEAR_CART";


const getInitialCart = () => {
 try {
   const storedCart = localStorage.getItem("cart");
   return storedCart ? JSON.parse(storedCart) : [];
 } catch {
   return [];
 }
};


const cartReducer = (state, action) => {
 switch (action.type) {
   case ADD_TO_CART: {
     const { product, quantity } = action.payload;


     const existingItem = state.find(
       (item) => item.productId === product.productId,
     );


     if (existingItem) {
       return state.map((item) =>
         item.productId === product.productId
           ? {
               ...item,
               quantity: item.quantity + quantity,
             }
           : item,
       );
     }


     return [...state, { ...product, quantity }];
   }


   case REMOVE_FROM_CART:
    return state.filter((item) => item.productId !== action.payload.productId);


   case CLEAR_CART:
     return [];


   default:
     return state;
 }
};


export const CartProvider = ({ children }) => {
 const [cart, dispatch] = useReducer(cartReducer, [], getInitialCart);


 useEffect(() => {
   localStorage.setItem("cart", JSON.stringify(cart));
 }, [cart]);


 const addToCart = (product, quantity = 1) => {
   dispatch({
     type: ADD_TO_CART,
     payload: {
       product,
       quantity,
     },
   });
 };


 const removeFromCart = (productId) => {
   dispatch({
     type: REMOVE_FROM_CART,
     payload: { productId },
   });
 };


 const clearCart = () => {
   dispatch({
     type: CLEAR_CART,
   });
 };


 const totalQuantity = useMemo(
   () => cart.reduce((sum, item) => sum + item.quantity, 0),
   [cart],
 );


 return (
   <CartContext.Provider
     value={{
       cart,
       addToCart,
       removeFromCart,
       clearCart,
       totalQuantity,
     }}
   >
     {children}
   </CartContext.Provider>
 );
};
