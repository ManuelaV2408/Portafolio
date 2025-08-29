import styled from "styled-components";
import Container from "./Container";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: linear-gradient(90deg, #007bff, #0056b3);
  color: white;
  padding: 1rem 0;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const NavItem = styled.li`
  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Container>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>Brand</h2>
          <NavLinks>
            <NavItem><a href="#">Inicio</a></NavItem>
            <NavItem><a href="#">Projects</a></NavItem>
            <NavItem><a href="#">Contacto</a></NavItem>
          </NavLinks>
        </div>
      </Container>
    </Nav>
  );
};

export default Navbar;
