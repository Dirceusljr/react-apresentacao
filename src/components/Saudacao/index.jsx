import styled from "styled-components";

const Container = styled.div`
  margin: auto;
  width: 100%;
`;

const Saudacao = () => {
  return (
    <Container>
      <div className="divmodulo">
        <p>Olá, Mundo!</p>
      </div>
      <div className="div-css">
        <p>Olá, Mundo!</p>
      </div>
    </Container>
  );
};

export default Saudacao;
