// import React from "react";
// import ReactDOM from "react-dom";
const ReactDOM = require('react-dom/client')

// const elem = React.createElement('h2',{},"We are hjwd learning react");
// console.log(elem);
const elem1 = <h2>We are learning react</h2>
console.log(elem1);

const root = ReactDOM.createRoot(document.getElementById('root'));

const Title = ()=> <h2>Title using react functional component</h2>
const Footer = ()=> <h3>Footer using functional component</h3>
// const FirstReactComponent = ()=>{
//     return <h1>our first react component</h1>
// }
const FirstReactComponent = ()=>(
    <div id="container">
        <Title/>
        <Title></Title>
        {Title()}
         <h1>our first react component</h1>
         <Footer/>
    </div>
)
root.render(<FirstReactComponent/>);
// root.render(elem1);