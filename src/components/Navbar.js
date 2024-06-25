import React from 'react';
import { useState } from 'react';
import { Link, NavLink,useNavigate } from 'react-router-dom'; // Import directly
import styled from 'styled-components';

// Styled components for the navbar
const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f0f0f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
    h3,a {
      color:#2BB9AE;
      text-decoration:none !important;
    }
`;



const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 1rem;
    background-color: #f0f0f0;
    position: absolute;
    top: 100%;
    left: 0;
    padding: 1rem;
    transform: translateY(0);
    opacity: 1;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }
`;

const NavLinkStyled = styled(NavLink)`
  padding: 0.5rem 1rem;
  color: black;
  text-decoration: none;
  font-weight: bold;

  &.active {
    color: #007bff;
  }

  @media (max-width: 768px) {
    text-align: center;
    margin: 0.5rem;
  }
`;

const HamburgerMenu = styled.button`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    border: none;
    background-color: transparent;
    outline: none;

    &:focus {
      outline: 0;
    }
  }
`;

const HamburgerLine = styled.span`
  display: block;
  width: 30px;
  height: 3px;
  background-color: black;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    &:nth-child(2) {
      transform: translateY(-3px);
    }

    &:nth-child(3) {
      transform: rotate(45deg);
    }
  }
`;

// Main component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for hamburger menu

  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <NavContainer>
      <Link to="/">
        <h3>Gasikarako</h3>
      </Link>
      <NavLinks className={isOpen ? 'show' : ''}>
        <li>
          <NavLinkStyled to="/">Discover Madagascar</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/history">History & Heritage</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/culture">Culture & Tradition</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/quizz" className="quizz">Test Your Knowledge</NavLinkStyled>
        </li>
      </NavLinks>
      <HamburgerMenu onClick={toggleMenu}>
        <HamburgerLine />
        <HamburgerLine />
        <HamburgerLine />
      </HamburgerMenu>
    </NavContainer>
  );
};

export default Navbar;
