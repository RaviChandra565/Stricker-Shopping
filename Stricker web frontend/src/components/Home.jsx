import React, { useState, useEffect } from "react";
import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";
//import products from "../data/products";
import apiClient from "../api/apiClient";
import { useLoaderData, useLocation } from "react-router-dom";


function Home() {
 //const [products, setProducts] = useState([]);
 //const [loading, setLoading] = useState(true);
 //const [error, setError] = useState(null);


 //whatever logic we want to run when the component is mounted for the very first time, we can put it inside useEffect.
 //  It is a hook that runs after the component is rendered.
 //mounting is the process of creating and adding the component to the DOM.
 // useEffect(
 //   () => {
 //   //fetching products from the backend api
 //   fetchProducts();
 // },
 // []);


 // const fetchProducts = async () => {
 //   try {
 //     console.log("Loading started");
 //     setLoading(true);
 //     await new Promise((resolve) => setTimeout(resolve, 3000));
 //     console.log("Loading finished");
 //     const response = await apiClient.get("/products"); //AXIOS is a promise based library, so we can use .then() and .catch() to handle the response and error respectively.
 //     setProducts(response.data); //updating the state with the fetched products, which will trigger a re-render of the component and display the products on the UI.
 //   } catch (error) {
 //     setError(
 //       error.response?.data?.message ||
 //         "An error occurred while fetching products."+
 //         "Please try again later."
 //     );
 //   } finally {
 //     setLoading(false);
 //   }
 //};
 // const response = await apiClient.get("/products"); //AXIOS is a promise based library, so we can use .then() and .catch() to handle the response and error respectively.
 // setProducts(response.data); //updating the state with the fetched products, which will trigger a re-render of the component and display the products on the UI.
 //};


 // if (loading) {
 //   return (
 //     <div className="flex items-center justify-center min-h-screen">
 //       <span className="text-xl font-semibold">Loading products...</span>
 //     </div>
 //   );
 // }


 // if (error) {
 //   return (
 //     <div className="flex items-center justify-center min-h-screen">
 //       <span className="text-xl text-red-500">Error: {error}</span>
 //     </div>
 //   );
 // }
 const products = useLoaderData();
 const location = useLocation();
 console.log(location.state);
 console.log(location.pathname);
  return (
   <div className="max-w-[1152px] mx-auto px-6 py-8">
     <PageHeading title="Explore and Buy your FAV. STICKERS">
       Add a touch of fun to your day with our amazing collection of fav
       stickers!
     </PageHeading>
     <ProductListings products={products} />
   </div>
 );
}


//const products = useLoaderData();
// export function Home1() {
//   const products = useLoaderData();
//   return (
//     <div className="max-w-[1152px] mx-auto px-6 py-8">
//       <PageHeading title="Explore Eazy Stickers!">
//         Add a touch of creativity to your space with our wide range of fun and
//         unique stickers. Perfect for any occasion!
//       </PageHeading>
//       <ProductListings products={products} />
//     </div>
//   );
// }


export async function productsLoader() {
 try {
   const response = await apiClient.get("/products"); // Axios GET Request
  const productsByImage = new Map();

   response.data.forEach((product) => {
     const normalizedProduct = {
       ...product,
       productId: product.productId ?? product.product_id,
     };

     if (!productsByImage.has(normalizedProduct.imageUrl)) {
       productsByImage.set(normalizedProduct.imageUrl, normalizedProduct);
     }
   });

   return [...productsByImage.values()];
 } catch (error) {
   throw new Response(
     error.message || "Failed to fetch products. Please try again.",
     { status: error.status || 500 },
   );
 }
}


export default Home;
