import React,{useState} from 'react'

export default function Textform(props) {
  // const[count,setCount]=useState(0);
  const[text,setText]=useState("Enter Text Here");
  // text="new text" //wrong way to change the text
  // setText("new text");
  return (
  <div>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" id="myBox" rows="3" value={text}></textarea>

    </div>
    <button className='btn btn-primary'>Convert to Uppercase</button>
  </div>
  )
}
