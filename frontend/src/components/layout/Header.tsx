import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export class Header extends Component<{}> {
  render() {
    return (
      <div className="headerContainer">
        <div className="leftHeader">
          <h3>Title</h3>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/hello">Nav 1</Link>
            </li>
            <li>
              <Link to="/goodbye">Nav 2</Link>
            </li>
            <li>Nav 3</li>
          </ul>
        </nav>
        <div className="rightHeader">
          <button>Login / Register</button>
        </div>
      </div>
    );
  }
}
