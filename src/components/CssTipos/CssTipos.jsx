import styled from "styled-components";
import "./CssNormal.css";
import styles from "./CssModulo.module.css";

//CSS-IN-JS
const Container = styled.div`
  margin: 30px auto;
  display: flex;
  gap: 20px;
  background-color: bisque;
  padding: 10px;
  justify-content: center;

`;

const Box = styled.div`
  background-color: blue;
  width: 20%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: white;
  }
`;

export default function CssTipos() {
  return (
    <Container>
        <Box>
            <p> CSS-In-JS</p>
        </Box>
      <div className="div-css">
        <p>CSS Normal</p>
      </div>
      <div className={styles.divmodulo}>
        <p>CSS Modulo</p>
      </div>
    </Container>
  );
}
