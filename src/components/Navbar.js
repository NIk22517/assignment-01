import React from "react";
import styled from "styled-components";
import { BiUserCircle } from "react-icons/bi";

const Navbar = () => {
  return (
    <Nav>
      <div className='logo'>
        <h1>Medical Darpan</h1>
      </div>
      <ul className='nav-links'>
        <li>Home</li>
        <li>Products</li>
        <li>Distributors</li>
        <li>Manufacturers</li>
        <li>About Us</li>
        <li>Blog</li>
      </ul>

      <div className='nav-log'>
        <p>Login</p>
        <BiUserCircle />
      </div>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  padding: 1rem 5rem;
  background-color: #750b0b;
  color: #ffffff;

  ul {
    display: flex;
    gap: 1.5rem;
    cursor: pointer;
  }
  .logo {
    cursor: pointer;
  }
  .nav-log {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    cursor: pointer;

    svg {
      scale: 1.5;
    }
  }
  ul li {
    list-style: none;
  }
`;
