import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../asset/search.svg";
import SearchOption from "./SearchOption";
import SearchTag from "./SearchTag";

const SearchTagContainer = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
  justify-content: center;
`;

const SearchBoxContainer = styled.div`
  width: 100%;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  font-family: sans-serif;
  box-shadow: 0 4px 6px 1px rgb(0 0 0 / 0.1);
`;

const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const SearchInput = styled.input`
  flex: auto;
  color: #5e5e5e;
  font-size: 1rem;
  background-color: transparent;
  border: none;
  margin-left: 10px;
`;

const SearchOptionButton = styled.p`
  color: #5e5e5e;
  font-size: 14px;
  cursor: pointer;
`;

const Search = () => {
  const [searchOption, setSearchOption] = useState(false);

  const toggleSearchOption = () => {
    setSearchOption((prev) => !prev);
  };

  return (
    <>
      <SearchBoxContainer>
        <SearchInputContainer>
          <SearchIcon width="24" fill="#5e5e5e" />
          <SearchInput placeholder="검색어를 입력해주세요" />
          <SearchOptionButton onClick={toggleSearchOption}>
            옵션 {searchOption ? "닫기" : "열기"}
          </SearchOptionButton>
        </SearchInputContainer>
        <SearchOption />
      </SearchBoxContainer>
      <SearchTagContainer>
        <SearchTag />
      </SearchTagContainer>
    </>
  );
};

export default Search;
