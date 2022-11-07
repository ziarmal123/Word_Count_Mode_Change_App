import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


function Navbar(props) {
  const aboutdata=()=>{
    props.showAlert("You are on About Page","success")
  }
  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
         <div className='container-fluid'>
         <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
        <Link className="nav-link" to="/home">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" onClick={aboutdata} to="/about">About</Link>
        </li>
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" to="/" id="navbarDropdown"
         role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li className="dropdown-item"><a className="dropdown-item" href="/">Action</a></li>
          <li className="dropdown-item"><a className="dropdown-item" href="/">Another action</a></li>
          <div className="dropdown-divider"><hr className="dropdown-divider"/></div>
          <li className="dropdown-item"><a className="dropdown-item" href="/">Something else here</a></li>
        </ul>
        </li>
        </ul>
        <form className="d-flex offset-5 align-self-end"  role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        {/* <div className='d-flex'> for differnt color Mode
          <div className='bg-primary rounded' onClick={()=>{props.changeMode('primary')}} style={{height:'30px',width:'30px'}}></div>
          <div className='bg-success rounded' onClick={()=>{props.changeMode('success')}} style={{height:'30px',width:'30px'}}></div>
          <div className='bg-danger rounded' onClick={()=>{props.changeMode('danger')}} style={{height:'30px',width:'30px'}}></div>
          <div className='bg-warning rounded' onClick={()=>{props.changeMode('warning')}} style={{height:'30px',width:'30px'}}></div>
        </div> */}
        <div className={`form-check form-switch mx-1 d-wrapped text-${props.mode==='dark'?'light':'dark'}`}>
            <input className="form-check-input" type="checkbox" onClick={props.changeMode} role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Switch Mode</label>
        </div>
        </div>
        </div>   
        
        </nav>
    </div>
  )
}



export default Navbar

Navbar.propTypes={title:PropTypes.string};

Navbar.defaultProps={title:'Set Title'};

{/* <li className="nav-item active">
<Link className="nav-link" onClick={()=>props.showdata("Home")} to="/home">Home</Link>
</li> */} ///for function Call