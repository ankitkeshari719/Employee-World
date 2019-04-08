import React from "react";
import {
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div>
        <header>
          <Row>
            <Col sm="12" md="12" lg="12">
              <Navbar className="navbar-inverse bg-primary" toggleable>
                <NavbarToggler right onClick={this.toggle} />
                <NavbarBrand href="/">A-Square</NavbarBrand>
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav navbar>
                    <NavItem>
                      <NavLink href="/employee">Employees</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/add_employee">Add Employee</NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
            </Col>
          </Row>
        </header>
      </div>
    );
  }
}

export default Header;
