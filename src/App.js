import styled from "styled-components";
import Header from "./components/Header.js";
import "./App.css";
import ResultContainer from "./components/ResultContainer.js";
import Footer from "./components/Footer.js";

const Container = styled.div`
  background-color: #fff;
  min-height: 100vh;
`;

function App() {
  return (
    <Container>
      <Header />
      <ResultContainer />
      <Footer />
    </Container>
  );
}

export default App;
