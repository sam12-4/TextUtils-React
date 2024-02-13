import React, {useState} from 'react'

export default function Textform(props) {
    
    const [text, setText] = useState("Enter text here");
    const [caseConvert, setCaseConvert] = useState("Convert to Uppercase");
    const handleUpClick=()=>{
        if (caseConvert === "Convert to Uppercase"){
            setCaseConvert("Convert to Lowercase ");
            setText(text.toUpperCase());
            props.message("success","Converted to Upper Case");
          }else{
            setCaseConvert("Convert to Uppercase"); 
            setText(text.toLowerCase());
            props.message("success","Converted to Lower Case");
        }
    }

    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

    return (
    <>
    <div className="my-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" style={{color:props.appMode === "light"? "black": "white", backgroundColor: props.appMode === "light"? "white": "black"}} rows="8"></textarea>
</div>
  <button onClick={handleUpClick} className="btn btn-primary mx-1">{caseConvert}</button>
  <div style={{color:props.appMode === "light"? "black": "white"}}>
  <h1 className="mt-4">{props.summary}</h1>
  <p> {text.split(" ").length} words and {text.length} characters</p>
  <p> {text.split(" ").length * (1/300)} min read</p>
  <h1 className="mt-4">Preview Text</h1>
  <p>{text.length>0?  text: "Enter text in the above box to preview it here"}</p>
  </div>

    </>
  )
}
