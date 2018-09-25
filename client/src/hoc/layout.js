import React from "react";
// this is a high order component so i can pass down any child props , props are properties you can pass down to any child components and use.
const LayOut = props => {
  return (
    <div>
      <div> {props.children} </div>
    </div>
  );
};

export default LayOut;
