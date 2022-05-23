import React,{useState} from 'react'

export default function Textform(props) {
  const handleUpClick =()=>{
    console.log("Uppercase was clicked");
    // setText("You have clicked on handleUpClick");
    console.log("Before: ",text);
    let newText=text.toUpperCase();
    setText(newText);
    console.log("After: ",text);
  }
  const handleOnChange=(event)=>{
    console.log("You tried to change the text");
    setText(event.target.value);
  }
  // const[count,setCount]=useState(0);
  const[text,setText]=useState("Enter Text Here");
  // text="new text" //wrong way to change the text
  // setText("new text"); //correct way to change the text
  return (
  <div>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    {/* here form field will be rendered as read only field without an Onchange handler as we have provided a 'value' prop. To solve this Otherwise, set either `onChange` or `readOnly` */}
    {/* <textarea className="form-control" id="myBox" rows="3" value={text}></textarea> */}
    {/* here now onchange handler is used so it will not provide any error in out console. */}
    <textarea className="form-control" id="myBox" rows="3" value={text} onChange={handleOnChange}></textarea>

    </div>
    <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
  </div>
  )
}
