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

    const handleClear=(text)=>{
        setText("");
        return ;
    }

    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

    const handleCopy=()=>{
      navigator.clipboard.writeText(text);
      props.message("success","Copied to Clipboard");
    }

    let wordCount = text.split(/\s+/).filter((element)=>{
        return element.length>0;
    }).length;

    return (
    <>
    <div className="my-3">
    <h1 className="mb-3" style={{color:props.appMode === "light"? "black": "white"}}>{props.textarea_heading}</h1>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" style={{color:props.appMode === "light"? "black": "white", backgroundColor: props.appMode === "light"? "white": "black"}} rows="8"></textarea>
</div>
  <button onClick={handleUpClick} disabled={text.length===0} className="btn btn-primary mx-1">{caseConvert}</button>
  <button onClick={handleClear} disabled={text.length===0} className="btn btn-primary mx-1">Clear Text</button>
  <button onClick={handleCopy} disabled={text.length===0} className="btn btn-primary mx-1">Copy Text</button>
  <div style={{color:props.appMode === "light"? "black": "white"}}>
  <h1 className="mt-4">{props.summary}</h1>
  <p> {wordCount} words and {text.length} characters</p>
  <p> {text.split(/\s+/).filter((e)=>{return e.length>0}).length * (0.00333)} min read</p>
  <h1 className="mt-4">Preview Text</h1>
  <p>{text.length>0?  text: "preview text here"}</p>
  </div>

    </>
  )
}
