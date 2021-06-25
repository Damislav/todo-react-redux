import React, { Component } from "react";
import "./Navbar.css";
class Navbar extends Component {
  render() {
    return (
      <div className="container">
        <nav
          style={{
            margin: "1rem",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            cursor: "pointer",
          }}
        >
          <div>Logo</div>
          <div style={{ display: "flex" }}>
            <div style={{ margin: "1rem", cursor: "pointer" }}>Home</div>
            <div style={{ margin: "1rem", cursor: "pointer" }}>About</div>
          </div>{" "}
        </nav>
      </div>
    );
  }
}

export default Navbar;
