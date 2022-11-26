import "./App.css";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Header from "./components/Header.js";
import ResultContainer from "./components/ResultContainer.js";
import Footer from "./components/Footer.js";
import ToggleThemeButton from "./components/ToggleThemeButton.js";
import getWallpapers from "./api/getWallpapers.js";

const Container = styled.div`
  background-color: #fff;
  min-height: 100vh;
`;

function App() {
  const [data, setData] = useState({});
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetch = async () => {
      const data = await getWallpapers({
        q: query,
      });
      setData(data);
    };
    fetch();
  }, []);

  return (
    <Container>
      <Header setQuery={setQuery} />
      <ResultContainer data={data} />
      <Footer />
      <ToggleThemeButton />
    </Container>
  );
}

export default App;
