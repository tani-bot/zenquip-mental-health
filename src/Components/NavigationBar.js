import React from 'react'
import './../Style/zq-navigationbar.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const NavigationBar = () => {
  return (
      <div id="footer-box">
      <div id="footer">
      <div className="slider">
      <ul class="slider-bullets large-text" >
          <li className='slider-bullets'><Link to="/Home"  style={{textDecoration:"none"}}>•</Link></li>
          <li className='slider-bullets'><Link to="/Product"  style={{textDecoration:"none"}}>•</Link></li>
          <li className='slider-bullets'><Link to="/Team"  style={{textDecoration:"none"}}>•</Link></li>
          <li className='slider-bullets'><Link to="/Contact"  style={{textDecoration:"none"}}>•</Link></li>
      </ul> 
      <button type="button" id="slider-button" class="slider-bullets-handler">
          <span className="dragger">
          <img src="../Style/icon_slider" alt="" height={"20px"} width={"20px"}/>
          </span>
      </button>
      </div>
      </div>
      </div>
  )
}
 
export default NavigationBar;
/*<li className='slider-bullets'>•</li>
          <li className='slider-bullets'>•</li>
          <li className='slider-bullets'>•</li>
          <li className='slider-bullets'>•</li>*/