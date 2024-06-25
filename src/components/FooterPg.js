import React from "react";
import styled from "styled-components";

const Footer = styled.div`
  display: flex;
  margin-top: 50px !important;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f0eeee;
  color: #333;

  /* Additional styles for responsive behavior */
  min-height: 50px; /* Set a minimum height for the footer */
  margin-top: auto; /* Push the footer to the bottom */

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
`;

const SocialIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const FooterPage = () => {
  return (
    <Footer>
      <Copyright>© 2024 All rights reserved.</Copyright>
      <LinksContainer>
        <Link href="#">Privacy Policy</Link>
        <Link href="#">Terms and Conditions</Link>
        <Link href="#">Cookie Policy</Link>
      </LinksContainer>
      <SocialContainer>
        <SocialIcon src="path/to/social-icon-1.svg" alt="Social Media Icon 1" />
        <SocialIcon src="path/to/social-icon-2.svg" alt="Social Media Icon 2" />
        {/* Add more social media icons as needed */}
      </SocialContainer>
    </Footer>
  );
};

export default FooterPage;
