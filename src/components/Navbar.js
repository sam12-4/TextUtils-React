import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.appMode} bg-${props.appMode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.about}</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
      {/* <div className={`form-check form-switch text-${props.appMode === "light"? "dark": "light"}`}>
          <input className="form-check-input" onClick={()=>{props.toggleBtnMode("dark")}} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">{`Enable ${props.toggleModeText} Mode`}</label>
      </div> */}
      <div className={`form-check form-switch text-${props.appMode === "light"? "dark": "light"} mx-2`}>
          <input className="form-check-input" onClick={props.toggleBtnModeBlueBg} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">{`${props.toggleBtnModeBlue}`}
          </label>
      </div>
      <div className={`form-check form-switch text-${props.appMode === "light"? "dark": "light"} mx-2`}>
          <input className="form-check-input" onClick={props.toggleBtnModeGreyBg} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">{`${props.toggleBtnModeGrey}`}
          </label>
      </div>
      <div onClick={()=>{props.toggleBtnMode("primary")}} className='bg-primary rounded mx-2' style={{height:"30px",width:"30px"}}>
        </div>      
      <div onClick={()=>{props.toggleBtnMode("success")}} className='bg-success rounded mx-2' style={{height:"30px",width:"30px"}}>
        </div>      
      <div onClick={()=>{props.toggleBtnMode("warning")}} className='bg-warning rounded mx-2' style={{height:"30px",width:"30px"}}>
        </div>
      <div onClick={()=>{props.toggleBtnMode("light")}} className='bg-white rounded mx-2' style={{height:"30px",width:"30px"}}>
        </div>
        
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  title: 'TextUtils'
};




