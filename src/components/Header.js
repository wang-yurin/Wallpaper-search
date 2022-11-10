import App from "../App";
import styled from "styled-components";
import GlobalStyles from "../style/GlobalStyle";

const Container = styled.section`
  width: 100%;
  background-color: #cfd8dc;
`;

const Contents = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Jua", sans-serif;
`;

const HeaderTitle = styled.h1`
  margin: 0;
`;

const HeaderTitleLink = styled.a`
  display: block;
  margin-bottom: 20px;
  color: black;
  text-decoration: none;
  font-size: 3rem;
`;

const HeaderSubTitle = styled.p``;

const Header = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Contents>
          <HeaderTitle>
            <HeaderTitleLink href="#">배경화면 검색</HeaderTitleLink>
          </HeaderTitle>
          <HeaderSubTitle>🔍 배경화면을 찾아보자 👀</HeaderSubTitle>
        </Contents>
      </Container>
    </>
  );
};

export default Header;
