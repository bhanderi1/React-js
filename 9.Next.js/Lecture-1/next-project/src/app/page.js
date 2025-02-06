'use client'

export default function Home() {
  return (
    <>
     <h1 className="text-center text-4xl">this is Next Js</h1>
     <Print name='one'/>
     <Print name='two'/>
     <Print name='three'/>
     <Print name='four'/>
     <Print name='five'/>
    
    
    </>
  );
}
 export const Print = (props) => {
   return(
    <>
       <div> this is print {props.name} element</div>
        <button onClick={() => alert("Hi , I am nextjs.....")}> click</button>
    </>
   )
 }