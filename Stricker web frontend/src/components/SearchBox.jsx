import React from 'react'


export default function SearchBox({label,placeholder,value,prod,handleSearch}) {


 //two-way binding of products is not available even if we filter the products here and send to ProductListings


 // function handleSearchChange(inputSearch){
 //    console.log("handle search invoked"+inputSearch)
 //    console.log(event)
 // }




 return (
   <div className="flex items-center gap-3 pl-4 flex-1 font-primary">
     <label className="text-lg font-semibold text-primary">{label}</label>
     <input
       type="text"
       className="px-4 py-2 text-base border rounded-md transition border-primary focus:ring focus:ring-dark focus:outline-none text-gray-800"
       placeholder={placeholder}
       value={value}
       onChange={(event)=>handleSearch(event.target.value)}
     />
   </div>
 );
}
//  import _default from SearchBox.jsx;