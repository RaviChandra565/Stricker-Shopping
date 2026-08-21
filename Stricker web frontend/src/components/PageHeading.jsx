import React from 'react'
import PageTitle from './PageTitle'


export default function PageHeading(props) {
 console.log(props);
 return (
   <div className="text-center max-w-[576px] mx-auto px-4 py-6">
     <PageTitle title={props.title} />
     <p className="page-heading-paragraph">{props.children}</p>
   </div>
 );
}
