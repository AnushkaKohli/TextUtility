// import React, { useState } from "react";
import React from "react";

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color : 'black',
    //     backgroundColor : 'white'
    // })

    // const [btnText, setBtnText] = useState("Enable Dark Mode")

    // const toggleStyle = () => {
    //     if(myStyle.color==='black'){
    //         setMyStyle({
    //             color : 'white',
    //             backgroundColor : 'black'
    //         });
    //         setBtnText("Enable Light Mode");
    //     } 
    //     else{
    //         setMyStyle({
    //             color : 'black',
    //             backgroundColor : 'white'
    //         });
    //         setBtnText("Enable Dark Mode");
    //     }
    // }

  let myStyle = {
    color : props.mode === "dark" ? "white" : "black",
    backgroundColor : props.mode === "dark" ? "#2e2e2e" : "white"
  }

  return (
    <div className="container pb-3" style={{color : props.mode === "dark" ? "white" : "black",
    backgroundColor : props.mode === "dark" ? "#2e2e2e" : "white", 
    border : props.mode === "dark" ? "2px solid white" : "null",
    borderRadius : props.mode === "dark" ? "15px" : "null"}}>
    <h2 className="mt-1 pt-3">About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            Our app provides powerful text analysis tools to help you gain insights into your content. Analyze word count, character count, readability, and more with just a few clicks.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong>Free to Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            Our text utility app is completely free to use, offering a wide range of features without any subscription fees or hidden charges. Enjoy the convenience and functionality without any cost.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong>Save Time and Effort</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            Our text utility app is built to streamline your text editing tasks and save you valuable time and effort. With our comprehensive range of features, you can quickly modify your text as needed.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
      <button type="button" className="btn btn-primary my-3" onClick={toggleStyle}>{btnText}</button>
      </div> */}
    </div>
  );
}
