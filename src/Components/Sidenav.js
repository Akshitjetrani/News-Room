import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Sidenav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleSidenav = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    const { isOpen } = this.state;

    return (
      <div>
        <button className="sidenav-toggle" onClick={this.toggleSidenav}>
          {isOpen ? 'Close' : 'Open'} Menu
        </button>
        <nav className={`sidenav bg-light ${isOpen ? 'open' : 'closed'}`}>
          <Link className="sidenav-brand" to="/">Your News</Link>
          <div className="sidenav-links">
            <li className='sidenav-item'>
              <Link className='sidenav-link' to="/general">Home</Link>
            </li>
            <li className='sidenav-item'><Link className="sidenav-link" to="/general">General</Link></li>
            <li className='sidenav-item'><Link className="sidenav-link" to="/business">Business</Link></li>
            <li className='sidenav-item'><Link className="sidenav-link" to="/entertainment">Entertainment</Link></li>
            <li className='sidenav-item'><Link className="sidenav-link" to="/sports">Sports</Link></li>
            <li className='sidenav-item'><Link className="sidenav-link" to="/science">Science</Link></li>
            <li className='sidenav-item'><Link className="sidenav-link" to="/technology">Technology</Link></li>
            <li className='sidenav-item'><Link className="sidenav-link" to="/health">Health</Link></li>
          </div>
        </nav>
      </div>
    );
  }
}
