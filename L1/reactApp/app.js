import React from "react";
import ReactDOM from "react-dom";

const elem = React.createElement('h2',{},"We are learning react");

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(elem);