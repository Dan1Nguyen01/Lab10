import React from "react";
import ReactDOM from "react-dom";
import Page from "./App.js";
import "./style.css";
 function App (){

  return (
    <div>
      <Page/>
    </div>
  );

}
ReactDOM.render(<App/>, document.getElementById("root"));