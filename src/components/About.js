import React from 'react'

export default function About(props) {
    // const [myStyle] = useState({
    //     color:'black',
    //     backgroundColor:'white',
    //     border:'1px solid white'

    // })
//   let myStyle ={
//     color: props.mode=== 'dark'?'white':'black',
//     backgroundColor :props.mode=== 'light'?'black':'white'
//     // color: props.mode=== 'dark'?'black':'white',
//     // backgroundColor :props.mode=== 'light'?'white':'black'
//   }
let myStyle = {
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.mode === 'dark' ? '#212529' : 'white',
     border: '0.5px ',
    borderColor: props.mode === 'dark' ? 'white' : '#212529'
  };
  return (
    <div className='container' style={{    color: props.mode === 'dark' ? 'white' : 'black',
    }}>
      <div className="accordion" id="accordionExample">
        <h2>About us</h2>
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button"style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
         <b>   Analyze your text </b>
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
        TextUtils offers powerful features for text analysis, including case conversion, text reversal, and speech synthesis.        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <b> Free to use </b>
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
        Enjoy all the features of TextUtils at no cost, making it an accessible tool for everyone.        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <b>Browser Compatible</b>
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
        TextUtils is designed to be compatible with all modern browsers, ensuring you can access and utilize its features from any device.        </div>
        </div>
    </div>
    </div>
    
    </div>
  )
}
