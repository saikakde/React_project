import React, { useState } from 'react'
// import PropTypes from 'prop-types'
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
  
    navigator.clipboard.writeText(text);
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

        <h1 className='mb-2'>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="dark"?"#13466e":"white",color: props.mode==="light"?"black":"white"}} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to lowercase</button>
        <button disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear text</button>
        <button disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy</button>
        <button disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spacing</button>

      </div>
      <div className="container my-3" style={{color: props.mode==="light"?"grey":"white"}}>
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
      </div>
    </>
  )
}
