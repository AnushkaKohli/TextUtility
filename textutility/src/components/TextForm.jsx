import React, { useState } from "react";

export default function TextForm(props) {

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared the text!", "success");
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted the text to uppercase!", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted the text to lowercase!", "success");
  };

  const handleToggleClick = () => {
    let newText = text
      .toUpperCase()
      .split(" ")
      .map((word) => {
        return word.charAt(0).toLowerCase() + word.slice(1);
      })
      .join(" ");
    setText(newText);
    props.showAlert("Converted the text to toggle case!", "success");
  };

  const handleSentenceClick = () => {
    let newText = text.toLowerCase().charAt(0).toUpperCase() + text.slice(1);
    setText(newText);
    props.showAlert("Converted the text to sentence case!", "success");
  };

  const handleCapitalizeClick = () => {
    let newText = text
      .toLowerCase()
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
    setText(newText);
    props.showAlert("Converted the text to capitalize case!", "success");
  };

  const handleAlternateClick = () => {
    let newText = text
      .split("")
      .map((c, i) => {
        return i % 2 === 0 ? c.toUpperCase() : c.toLowerCase();
      })
      .join("");
    setText(newText);
    props.showAlert("Converted the text to alternate case!", "success");
  };

  const handleCopy = () => {
    let copyText = document.getElementById("myBox");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("Copied the text to clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    // let newText = text.split(/\s+/g)
    // \s: matches any whitespace symbol: spaces, tabs, and line breaks
    // +: match one or more of the preceding tokens (referencing \s)
    // g: the g at the end indicates iterative searching throughout the full string
    setText(newText.join(" "));
    props.showAlert("Removed the extra spaces!", "success");
  };

  const [text, setText] = useState("");
  // const [text, setText] = useState("Enter text here"); //Enter your text here is the default value of the text variable
  // text="new text" //wrong way to change the value of text
  // setText("new text"); //right way to change the value of text
  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3 my-3">
          <textarea
            value={text}
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "#2e2e2e" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <div className="container d-flex justify-content-center">
          <button
            type="button" disabled={text.length===0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleUpClick}
          >
            UPPERCASE
          </button>
          <button
            type="button" disabled={text.length===0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleLowClick}
          >
            lowercase
          </button>
          <button
            type="button" disabled={text.length===0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleToggleClick}
          >
            tOGGLE cASE
          </button>
          <button
            type="button" disabled={text.length===0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleSentenceClick}
          >
            Sentence case
          </button>
          <button
            type="button" disabled={text.length===0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleCapitalizeClick}
          >
            Capitalize First Letter
          </button>
          <button
            type="button" disabled={text.length===0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleAlternateClick}
          >
            AlTeRnAtE cAsE
          </button>
          <button
            type="button" disabled={text.length===0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleExtraSpaces}
          >
            Remove Extra Spaces
          </button>
        </div>

        <div className="container d-flex justify-content-center">
          <button
            type="button" disabled={text.length===0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleCopy}
          >
            Copy Text
          </button>
          <button
            type="button" disabled={text.length===0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleClearClick}
          >
            Clear text
          </button>
        </div>

        {/* <div class="grid gap-3">
          <div class="p-2 g-col-6">
            <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
          </div>
          <div class="p-2 g-col-6">
            <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
          </div>
        </div>  */}
      </div>

      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>Text Summary</h3>
        <p>
          {" "}
          {text.split(/\s+/).filter((element) => {
            return element.length!==0
          }).length} words and {text.length} characters{" "}
        </p>
        <p>
          {" "}
          {0.008 * text.split(/\s+/).filter((element) => {
            return element.length!==0
          }).length} minutes is required to read the given
          text{" "}
        </p>
        <h3>Preview</h3>
        <p>{text.length>0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
