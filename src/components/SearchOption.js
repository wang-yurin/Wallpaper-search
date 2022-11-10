import styled from "styled-components";

const SearchOptionContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchOptionUl = styled.ul``;

const SearchOptionLi = styled.li`
  margin: 1em;
  text-align: center;
`;

const SearchOptionLabel = styled.p`
  margin-bottom: 1em;
  padding: 0.5em;
  text-align: center;
  color: #455a64;
  border: 1px solid #455a64;
  border-radius: 1em;
  font-weight: 500;
`;

const SearchOption = () => {
  return (
    <SearchOptionContainer>
      <SearchOptionUl>
        <SearchOptionLi>
          <SearchOptionLabel>정렬</SearchOptionLabel>
          <form id="order">
            <input type="radio" name="order" id="latest" value="latest" />
            <label htmlFor="latest">최신순</label>
            <input type="radio" name="order" id="popular" value="popular" />
            <label htmlFor="popular">인기순</label>
          </form>
        </SearchOptionLi>
        <SearchOptionLi>
          <SearchOptionLabel>사진 방향</SearchOptionLabel>
          <form id="direction">
            <input type="radio" name="direction" id="all" value="all" />
            <label htmlFor="all">모두</label>
            <input
              type="radio"
              name="direction"
              id="horizontal"
              value="horizontal"
            />
            <label htmlFor="horizontal">가로</label>
            <input
              type="radio"
              name="direction"
              id="vertical"
              value="vertical"
            />
            <label htmlFor="vertical">세로</label>
          </form>
        </SearchOptionLi>
        <SearchOptionLi>
          <SearchOptionLabel>페이지 당 갯수</SearchOptionLabel>
          <form id="page">
            <input type="radio" name="page" id="10" value="10" />
            <label htmlFor="10">10</label>
            <input type="radio" name="page" id="20" value="20" />
            <label htmlFor="20">20</label>
            <input type="radio" name="page" id="30" value="30" />
            <label htmlFor="30">30</label>
          </form>
        </SearchOptionLi>
      </SearchOptionUl>
    </SearchOptionContainer>
  );
};

export default SearchOption;
