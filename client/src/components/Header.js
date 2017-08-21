import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  renderContent() {
    console.log("auth props is: " + this.props.auth);
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return(
            <li><a href="/auth/google">Login With Google</a></li>
        );
      default:
        return <li><a href="/api/logout">Logout</a></li>;
    }
  }

  render() {
    console.log("Header render");
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">Emaily</a>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  console.log("Header mapStateToProps");
  return {
    auth
  };
}

export default connect(mapStateToProps)(Header);
