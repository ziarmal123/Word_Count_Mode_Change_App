import React from 'react'

export default function Alerts(props) {

    const capitalword=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
  return (
    <div style={{height:'55px'}}>
      {props.alert && <div>
    <div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
    <strong>{capitalword(props.alert.typ)}</strong>: {props.alert.msg}
    </div>
    </div>}
   

    </div>
  )
}

