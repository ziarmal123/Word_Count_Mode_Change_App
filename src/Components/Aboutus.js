import React from 'react'

export default function Aboutus(props) {
  let Stledata={
    color:props.mode==='dark'?'white':'black',
    backgroundColor:props.mode === 'dark'?'black':'white'
  }
  const display=()=>{
    props.alert("Its is About Page","success")
  }
  return (
            <div>
               
                <div className='about-section' style={Stledata}>
                <h1>About Us Page</h1>
                <p>Some text about who we are and what we do.</p>
                <p>Resize the browser window to see that this page is responsive by the way.</p>
            </div>  
    </div>
  )
}
