import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css'
export default function Page(){

  return(
    <div className="app-div">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}