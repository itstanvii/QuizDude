import { Link } from "react-router-dom";
import "./Header.css";
import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/tbb-removebg-preview (1).png";
class Header extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    // const Header = () => {
    return (
      <div className="header">
        <Link to="/" className="title">
          <nav>
            <img src={logo} className="logo" />
            <div>
              <ul
                id="navbar"
                className={this.state.clicked ? "#navbar active" : "#navbar"}
              >
                <li>
                  <a className="active " href="">
                    Home
                  </a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Problems</a>
                </li>
                <li>
                  <a href="">Contact us</a>
                </li>
              </ul>
            </div>
            <div id="mobile" onClick={this.handleClick}>
              <i
                id="bar"
                className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
              ></i>
            </div>
          </nav>

          <hr className="divider" />
        </Link>
      </div>
    );
  }
}

export default Header;
