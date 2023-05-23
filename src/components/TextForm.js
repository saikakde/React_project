import React, { useState } from 'react'
import PropTypes from 'prop-types'
export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toLocaleUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase","success")

  }
  const handleLowClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase","success")

  }
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("text cleared","success")

  }
  const handleOnChange = (event) => {
    // console.log("h");
    setText(event.target.value)
    
  }
  const handleCopy = () => {
    var text= document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("copied to clipboard","success")

    // setText(event.target.value)
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("spaces removed","success")

  }

  const [text, setText] = useState("Enter text here")
  return (
    <>

      <div className="container" style={{color: props.mode==="light"?"black":"white"}}>

        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="light"?"grey":"white",color: props.mode==="light"?"white":"black"}} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spacing</button>

      </div>
      <div className="container my-3" style={{color: props.mode==="light"?"grey":"white"}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length}words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"enter something to preview"}</p>
      </div>
    </>
  )
}
