import React, {useState} from 'react'



export default function TextForm(props) {
  const [text, setText] = useState('Enter Text Here');
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleOnChange = (event)=>{
    setText(event.target.value)
  }
  return (
    <div>
        <div className="mb-3 ">
          <h1>{props.heading} </h1>
          <textarea className="form-control " value={text} onChange={handleOnChange} id="MyBox" rows="8" ></textarea>
          <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to upper case</button>
        </div>
    </div>
  )
}
