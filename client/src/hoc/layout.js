import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
// this is a high order component so i can pass down any child props , props are properties you can pass down to any child components and use.
const LayOut = props => {
  return (
    <div>
      <Header />
      <div> {props.children} </div>
      <Footer />
    </div>
  );
};

export default LayOut;
