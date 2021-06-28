import React from "react";
import { Nav } from "react-bootstrap";
import "./Header.css";
import {
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { connect } from "react-redux";
import { setSearchField } from "../../actions/todoAction";

class Header extends React.Component {
  render() {
    return (
      <>
        <Navbar expand="lg">
          <div className="container">
            <Navbar.Brand href="#home">Todo App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <div style={{ flex: "3" }}>
                <Nav className="ml-auto">
                  <Nav.Link>Home</Nav.Link>
                  <Nav.Link>Link</Nav.Link>
                  <NavDropdown
                    className="nav-dropdown "
                    title="Change Theme"
                    id="basic-nav-dropdown"
                  >
                    <Button
                      variant="secondary"
                      className="dark-button shadow-sm"
                    >
                      <span> Dark</span>
                    </Button>
                    <Button variant="light" className="white-button shadow-sm">
                      <span> White</span>
                    </Button>
                  </NavDropdown>
                </Nav>
              </div>
              <Form style={{ display: "flex" }}>
                <FormControl
                  onChange={this.props.setSearchField}
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchField: (e) => dispatch(setSearchField(e.target.value)),
  };
};
const mapStateToProps = (state, ownProps) => {
  return {
    ...state.searchField,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
