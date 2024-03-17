import React from 'react'
import logo from "../assets/logo.png"
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from "react-router-dom";

const MyNavbar = () => {
  const navigate = useNavigate()

  return (
    <Navbar className='navbar' expand="lg" >
      <Container className='navbar-container'>

        <div className=' navbar-div'>

          <h3 onClick={() => navigate("/")} className='text-white' style={{ cursor: "pointer" }}>Techno Markt</h3>
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="me-auto">
                <NavLink className="nav-link" to="/"> Home</NavLink>
                <NavLink className="nav-link" to="/newproduct"> New Product </NavLink>
                <NavLink className="nav-link" to="/productlist"> Product List</NavLink>
                <NavLink className="nav-link" to="/about">About</NavLink>
              </Nav>
              <Link to="/productlist" >
                <img className='cart-logo' src={logo} alt="" width="80px" height="50px" />
              </Link>
            </Navbar.Collapse>
          </div>

        </div>

      </Container>
    </Navbar>
  );
}

export default MyNavbar