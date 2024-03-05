import React from "react";
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

 

const Navbar = require('./components/Navbar')
const Body = require('./components/Body')



const Container = ()=>{
    return (
         <>
         <Navbar/>
         <Body/>
         </>
    )
}
root.render(<Container/>)