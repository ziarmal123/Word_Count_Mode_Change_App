import React,{useState} from 'react'

export default function Text(props) {
    
    
    const [text,setText]=useState('');
    const [time,setTime]=useState(0.008*text.split(' ').length)
    function UpperCase(){
        let newText =text.toUpperCase();
        setText(newText)
        props.alert("All Text is Shifted to Upper Case","success")
    }
    function LowerCase(){
        let newText =text.toLowerCase();
        setText(newText)
        props.alert("All Text is Shifted to Lower Case","success")
    }
    function textChange(e){
        setText(e.target.value)
    }
    function Clear(){
        setText('')
        props.alert("All Text is Cleared","success")
    }
    function Copy(){
        var text=document.getElementById('mybox');
        text.select();
        navigator.clipboard.writeText(text.value)
        // document.getSelection().removeAllRanges(); for Remove data Selection
        props.alert("Copied","success")
    }
    function handleextraspaces(){
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.alert("Extra Spaces Removed","success")
    }
    
    return (
     <div className='container-sm' style={{color:props.mode==='light'?'red':'white'}}>
        <div className='row'>
            <div className="mb-3">
            <label htmlFor='exampleFormControlTextarea1' className="form-label"><h2>{props.some}</h2></label>
            <textarea className="form-control" id="mybox" value={text} style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}} placeholder='Enter Some Text Here' onChange={textChange} rows="6"></textarea>    
            <button type="button" disabled={text.length===0} className="btn btn-primary" onClick={UpperCase}>Change To Upper Case</button>
            <button type="button" disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={LowerCase}>Change To Lower Case</button>
            <button type="button" disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={Copy}>Copy Text</button>
            <button type="button" disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={Clear}>Clear Text</button>
            <button type="button" disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleextraspaces}>Remove Extra Space</button>
        </div>
        <div className='row my-2'>
            <h3>Total {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} character</h3>
            <h3> Total Time Take to Read {0.008*text.split(' ').filter((element)=>{return element.length!==0}).length}</h3>
            <h2>Preview</h2><p>{text.length>0?text:"Please Enter Some text Above Feild"}</p>
        </div>
       
        </div>
    

    </div>
  )
}
