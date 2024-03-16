import React, {useState } from 'react'

export default function TextForm(props) {
  const handleUpclick=()=>{
    // console.log("upper case was cilcked");
    setText(text.toUpperCase())
    props.showalert("Converted to Uppercase!","success")
  }
  const handleLowclick=()=>{
    // console.log("Lower case was cilcked");
    setText(text.toLowerCase())
    props.showalert("Converted to Lowercase!","success")
  }
  const handleExtraSpaces = () => {
    setText(text.replace(/\s+/g, ' ').trim());
    props.showalert("Extra Spaces Removed!","success")
  }
  
  const handleOnchange=(event)=>{
    // console.log("change on was cilcked");
    setText(event.target.value)
  }
  const handleCopy=()=>{
    var text=document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("Copy to Clipboard!","success")
  }
  
  
  const handleClear=()=>{
    setText("")
    props.showalert("Text Cleared!","success")
  }



  const [text,setText]= useState("");

  
  
  return (
    <>
    
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
    <h1 >Enter the Text To analyze</h1>
      <div className="mb-3">
        
        <textarea
          value={text}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          onChange={handleOnchange}
          style={{backgroundColor: props.mode==='dark'?'grey':'white',
          color: props.mode==='dark'?'white':'black',
        border:props.mode==='dark'?'3px solid white':'3px solid black'}}
        ></textarea>
      </div>
      <button className="btn btn-primary mb-3 " onClick={handleUpclick}  >Convert UpperCase</button>
      <button className="btn btn-primary mx-2 mb-3" onClick={handleLowclick}>Convert LowerCase</button>
      <button className="btn btn-primary mb-3" onClick={handleExtraSpaces}>Remove ExtraSpaces</button>
      <button className="btn btn-primary mx-2 mb-3" onClick={handleCopy}>Copy</button>
      <button className="btn btn-primary mx-1 mb-3" onClick={handleClear}>Clear</button>
    </div>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2 >Your Text Summary</h2>
      <p><b>{text.split(" ").length} </b>word,<b>{text.length} </b>characters</p>
      <p>{.008 * text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Something above text box to preview it here."}</p>
    </div>
    </>
  )
}
