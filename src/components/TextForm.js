import React, {useState} from 'react'




export default function TextForm(props) {
    const [text, setText] = useState ('');

    // text ="new text"; //Wrong way to change the state
    // setText =" new text" //Right way to chnage the state

    const handleUpClick = () => {
        // console.log ("Uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Converted to uppercase!', 'success');

    }
    const handleLowClick = () => {
      // console.log ("Uppercase was clicked" + text)
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert('Converted to lowercase!', 'success');

  }

  const handleClearClick = () => {
    // console.log ("Uppercase was clicked" + text)
    let newText = '';
    setText(newText)
    props.showAlert('Text Cleared!', 'success');

}

const handleInverseClick = () => {
  // console.log ("Uppercase was clicked" + text)
  let newText = text.split('').reverse().join('');
  setText(newText)
  props.showAlert('Text Inverted!', 'success');


}

const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
  props.showAlert('Speaking Text!', 'success');

}

    const handleOnChange = (event) => {
        // console.log ("On change")
        setText(event.target.value)
    }
   return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'?'#212529':'white'} }>
    <h2>{props.heading} </h2>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} 
        style={{backgroundColor: props.mode==='dark'?'#212529':'white' , color: props.mode==='dark'?'white':'black'} } rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleUpClick}> Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleLowClick}> Convert to Lowercase</button>
      <button disabled={text.length===0}  className="btn btn-primary mx-2" onClick={handleClearClick}> Clear Text</button>
      <button disabled={text.length===0}  className="btn btn-primary mx-2" onClick={handleInverseClick}> Inverse Text</button>
      <button disabled={text.length===0}   type="submit" onClick={speak} className="btn btn-primary mx-2 my-2">Speak</button>


    </div>

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'?'#212529':'white'} }>
      <h3>Your Text Summary</h3>
      {/* <p> {text.split(" ").length-1} words and {text.length} characters</p> */}
      {/* <p> {text.length === 0 ? 0 : text.trim().split(" ").length} words and {text.length} characters </p> */}
      <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>

      <p> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>

      <h3>Preview</h3>
      <p>{text.length>0?text:"Nothing to preview" }</p>
    </div>


      
    </>
  )
}
