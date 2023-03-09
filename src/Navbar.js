
import React from 'react';
import {Container, Nav, Navbar, Button} from 'react-bootstrap';
import logo1 from './Images/mylogo.png'
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

function Navibar() {
  const { loginWithRedirect, logout, isAuthenticated,user } = useAuth0();


  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md">
        <Container>
          <Navbar.Brand to="/homepage" className='navbar-image'><img src={logo1}/></Navbar.Brand>
          <Nav className="nav-text">
            <Link to="/" className="navbar-link" style={{textDecoration: 'none', color:"cyan"}}>Home</Link>
            <Link to="/service" className="navbar-link"  style={{textDecoration: 'none', color:"cyan"}}>Services</Link>
            <Link to="/connect" className="navbar-link"  style={{textDecoration: 'none', color:"cyan"}}>Connect</Link>
            <Link to="/announcement" className="navbar-link"  style={{textDecoration: 'none', color:"cyan"}}>Announcement</Link>
            <Link to="/product" className="navbar-link"  style={{textDecoration: 'none', color:"cyan"}}>Products</Link>
            {
              isAuthenticated && <p style={{color:"white"}}>{user.name} </p>
            }
            {
              isAuthenticated ? (
              <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} style={{padding:"3px", width:"6rem", height:"3rem", marginLeft:'1rem'}}> Log Out </Button>
              ):(
              <Button onClick={() => loginWithRedirect()} style={{padding:"3px", width:"6rem", height:"3rem"}}>Log In</Button>
              )
            }
             
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

export default Navibar;