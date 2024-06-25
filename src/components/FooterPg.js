import React from "react";
import styled from "styled-components";
import gmailIco from "../images/mail-ico.png"
import githubIco from "../images/github-ico.png"
import { useNavigate } from "react-router";

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f0eeee;
  color: #333;

  /* Additional styles for responsive behavior */
  min-height: 50px; /* Set a minimum height for the footer */

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`;

const Copyright = styled.p`
  font-size: 0.8em;
  margin: 0;
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Link = styled.a`
  color: inherit;
  text-decoration: none; /* Remove underline */
  font-weight: bold;

  &:hover {
    color: #2bb9ae; /* Primary brand color on hover */
  }
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 1rem;
  img{
    width:35px;
    height:35px;
    cursor:pointer;
  }
`;



const FooterPage = () => {
  const navigate = useNavigate();

  const handleEmailClick = () => {
    window.location.href = `mailto:zk818019@gmail.com`;
  }
  return (
    <Footer>
      <Copyright>© 2024 All rights reserved.</Copyright>
      <LinksContainer>
        <Link href="#">Privacy Policy</Link>
        <Link href="#">Terms and Conditions</Link>
        <Link href="#">Cookie Policy</Link>
      </LinksContainer>
      <SocialContainer>
          <img className="icon" src={gmailIco} alt="gmail" onClick={()=>handleEmailClick()}/>
          <img className="icon"src={githubIco} alt="github" href="https://github.com/endy-rkt/malagasy-wonders"/>
      </SocialContainer>
    </Footer>
  );
};

export default FooterPage;
