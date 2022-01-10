import React from "react";
import { render } from "react-dom";

function Home(props) {

  return (
    <div id="home">
      <h1 style={{ color: props.color }}>
        {props.username} is a Web Developer from {props.city}
      </h1>
    </div>
  )
  
}

export default Home;
