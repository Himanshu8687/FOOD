import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2026 Food App. All rights reserved.</p>
      <span>Made with by HIMANSHU DWIVEDI</span>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  width: 100%;
  padding: 20px 0;
  background-color: #111;
  color: #fff;
  text-align: center;
  margin-top: 0px;

  p {
    margin: 0;
    font-size: 17px;
  }

  span {
    font-size: 13px;
    color: #aaa;
  }
`;