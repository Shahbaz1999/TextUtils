import React,{useState} from 'react'
export default function TextForm(props) {
  const handleUpClick=()=>{
    // console.log("Uppercase was clicked");
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  }
  const handleLoClick=()=>{
    // console.log("Uppercase was clicked");
    let newText=text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  }
  const handleCopy=()=>{
    // console.log("I am Copying");
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied!", "success");
  }
  const handleClearClick=()=>{
    // console.log("Cleared Text");
    let newText="";
    setText(newText);
    props.showAlert("Clear Text!", "success");
  }
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed!", "success");
  }
  const handleOnChange=(event)=>{
    // console.log("Onchange");
    setText(event.target.value);
  }
  const [text, setText] = useState("Enter text here2");
  // setText("New Text");

  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea  className="form-control" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} value={text} id="myBox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convet to upercase</button>
  <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convet to lowercase</button>
  <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
  <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
  <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra space</button>
  



    </div>
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>This is Summary</h1>
      <p>{text.split(" ").length} word and {text.length}</p>
      <p>{0.008*text.split(" ").length} Minutes read</p>
      <h2></h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>

    </div>
    </>
  )
}
