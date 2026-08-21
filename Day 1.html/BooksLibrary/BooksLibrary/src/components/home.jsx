import React from "react";
import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";
import products from "../data/products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Home() {
 return (
    
   <div className="home-container">
    const [showProducts, setShowProducts] = useState(true);

        <button onClick={() => setShowProducts(!showProducts)}>
         {showProducts ? "Hide Products" : "Show Products"}
        </button>
    
          

    {showProducts && <ProductListings products={products} />}
           
        <PageHeading title="Explore and Buy your FAV. STICKERS">
        Add a touch of fun to your day with our amazing collection of fav
        stickers!
    
     </PageHeading>
     <ProductListings products={products}/>
     
   </div>
 );
}


export default Home;
