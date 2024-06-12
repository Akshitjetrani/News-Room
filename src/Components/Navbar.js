import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props)=> {
 
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <Link className="navbar-brand mx-3" to="/">Daily News</Link>
           
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <li className='nav-item my-3 mx-2'>
                <Link className='nav-link' to="/general">Home</Link>
              </li>
              <li className='nav-item my-3 mx-2'><Link className="nav-link" to="/general">General</Link></li>
              <li className='nav-item my-3 mx-2'><Link className="nav-link" to="/business">Business</Link></li>
              <li className='nav-item my-3 mx-2'><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
              <li className='nav-item my-3 mx-2'><Link className="nav-link" to="/sports">Sports</Link></li>
              <li className='nav-item my-3 mx-2'><Link className="nav-link" to="/science">Science</Link></li>
              <li className='nav-item my-3 mx-2'><Link className="nav-link" to="/technology">Technology</Link></li>
              <li className="nav-item my-3 mx-2"><Link className="nav-link" to="/health">Health</Link></li>
            </div>
          </div>
        </nav>
      </div>
    )
  }

  export default Navbar
