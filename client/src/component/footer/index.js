import React from "react";
import { Nav } from 'react-bootstrap';

function footer() {
    return (
        <div>
           <Nav defaultActiveKey="/" as="ul">
  <Nav.Item as="li">
    <Nav.Link href="https://github.com/imartinez0753">gitHub</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="imartinez075@gmail.com">E-Mail</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="https://www.linkedin.com/in/ian-martinez-03512a37/">LinkedIn</Nav.Link>
  </Nav.Item>
</Nav>
        </div>
    )
}

export default footer;