import React from "react";
/* function FunctionalGreeting(){

    return <h1>This is a header</h1>
} */

const FunctionalGreeting =(props)=>  <h1 className="text-3xl font-bold underline">{props.title}</h1>

export default FunctionalGreeting;