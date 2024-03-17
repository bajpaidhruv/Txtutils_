import React, {useState } from 'react'

export default function TextForm(props) {
  const handleUpclick=()=>{
    setText(text.toUpperCase())
    props.showalert("Converted to Uppercase!","success")
  }
  const handleLowclick=()=>{
    setText(text.toLowerCase())
    props.showalert("Converted to Lowercase!","success")
  }
  const handleExtraSpaces = () => {
    setText(text.replace(/\s+/g, ' ').trim());
    props.showalert("Extra Spaces Removed!","success")
  }
  
  const handleOnchange=(event)=>{
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
    <h1 >Try TxtUtils - Word Counter, Character counter, Remove extra spaces</h1>
      <div className="mb-3">
        
        <textarea
          value={text}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          onChange={handleOnchange}
          style={{backgroundColor: props.mode==='dark'?'#13466e':'white',
          color: props.mode==='dark'?'white':'black',
        border:props.mode==='dark'?'3px solid white':'3px solid black'}}
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mb-3 " onClick={handleUpclick}  >Convert UpperCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 mb-3" onClick={handleLowclick}>Convert LowerCase</button>
      <button disabled={text.length===0} className="btn btn-primary mb-3" onClick={handleExtraSpaces}>Remove ExtraSpaces</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 mb-3" onClick={handleCopy}>Copy</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 mb-3" onClick={handleClear}>Clear</button>
    </div>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2 >Your Text Summary</h2>
      <p><b>{text.split(/\s+/).filter((ele)=>{return ele.length!=0}).length} </b>word,<b>{text.length} </b>characters</p>
      <p>{.008 * text.split(" ").filter((ele)=>{return ele.length!=0} ).length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
