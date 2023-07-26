// CustomH1.js
import React from "react";

const CustomH1 = (props : any) => {
    return (
      <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{props.children}</h1>
    );
  };
  
  export { CustomH1 };