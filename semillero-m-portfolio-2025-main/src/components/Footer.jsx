import styled from "styled-components";
import Container from "./Container";

const Foot = styled.footer`
  padding: 1rem 0;
  border-top: 1px solid #ddd;
  margin-top: 2rem;
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  a {
    text-decoration: none;
    color: #007bff;
  }
`;

const Social = styled.div`
  display: flex;
  gap: 1rem;

  i {
    font-size: 1.2rem;
    color: #333;
  }
`;

const Footer = () => {
  return (
    <Foot>
      <Container>
        <Links>
          <a href="#">Sobre mi</a>
          <a href="#">Contáctame</a>
          <a href="#">Proyectos</a>
        </Links>
        <Social>
          <a href="#"><i className="icon ion-social-facebook" /></a>
          <a href="#"><i className="icon ion-social-instagram-outline" /></a>
          <a href="#"><i className="icon ion-social-twitter" /></a>
        </Social>
      </Container>
    </Foot>
  );
};

export default Footer;