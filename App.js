import React from "react";
import ReactDOM from "react-dom/client";



//React Element
const Title = () => (
  <h1 className="head">
    Vanakam react from JSX
  </h1>
);

//React Functional Component

const HeadingComponent = () =>(
  <div id="container">
    {Title()}
    <Title/>
    <h1 className="heading">Vanakam react from functional component</h1>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);

