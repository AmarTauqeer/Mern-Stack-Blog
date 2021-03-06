import React from "react";

import "./navbar.css";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  state = {
    isOpen: false,
  };
  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  closeNavbar = () => {
    this.setState({
      isOpen: false,
    });
  };
  render() {
    return (
      <nav>
        <div className="blog-btn">
          <div className="blog-logo">
            <a href="/">My Blog</a>
          </div>

          <div className="toggle-btn" onClick={this.handleClick}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
        <div>
          <ul className={this.state.isOpen ? "showNav" : "undefined"}>
            <li>
              <Link to="/" onClick={this.closeNavbar}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/postmessages" onClick={this.closeNavbar}>
                Post
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={this.closeNavbar}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/register" onClick={this.closeNavbar}>
                Register
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={this.closeNavbar}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
