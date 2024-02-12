const heading = React.createElement(
    'h1',
    {id:"head",xyz:'ji'},
    'Hello from First react App'
    );
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);

console.log(heading);