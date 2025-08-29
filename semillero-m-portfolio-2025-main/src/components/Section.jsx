import styled from "styled-components";

const Section = styled.section`
  padding: 4rem 0;
  border-bottom: ${(props) => (props.border ? "1px solid #ddd" : "none")};
`;

export default Section;