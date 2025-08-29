import styled from "styled-components";
import Container from "../../components/Container";
import Section from "../../components/Section";

const Item = styled.div`
  margin-bottom: 2rem;
`;

const Badge = styled.span`
  background: #28a745;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Education = () => {
  return (
    <Section border>
      <Container>
        <h2 style={{ textAlign: "center" }}>EDUCACIÓN</h2>

        <Item>
          <Row>
            <div>
              <h3>Ingeniero Informático</h3>
              <Badge>Politécnico Colombiano JIC</Badge>
            </div>
            <span>ago. 2022 - dic. 2025</span>
          </Row>
          <p>
            Estudiante destacado por mi disciplina, liderazgo y sentido de
            pertenencia.
          </p>
        </Item>

        <Item>
          <Row>
            <div>
              <h3>Tecnología en sistematización de datos</h3>
              <Badge>Politécnico Colombiano JIC</Badge>
            </div>
            <span>mar. 2020 - jul. 2022</span>
          </Row>
          <ul>
            <li>Matrícula de honor en el semestre 2021-2</li>
            <li>
              Desarrollo de sistema IA para detectar ambulancias en cámaras de
              fotodetección.
            </li>
          </ul>
        </Item>
      </Container>
    </Section>
  );
};

export default Education;