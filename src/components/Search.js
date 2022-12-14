import { useEffect } from 'react';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../asset/search.svg';
import SearchOption from './SearchOption';
import SearchTag from './SearchTag';

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

const Search = ({ setQuery, setOrder, setOrientation }) => {
  const savedSearchTags = localStorage.getItem('searchTags');
  const initalSearchTags = savedSearchTags ? JSON.parse(savedSearchTags) : [];

  const [searchOption, setSearchOption] = useState(false);
  const [searchTags, SetSearchTags] = useState(initalSearchTags);
  const inputRef = useRef(null);

  const toggleSearchOption = () => {
    setSearchOption((prev) => !prev);
  };

  const onSearch = (event) => {
    if (event.key === 'Enter') {
      const currentValue = event.target.value;
      setQuery(currentValue);
      inputRef.current.value = '';
      SetSearchTags((prev) => [...prev, currentValue]);
    }
  };

  const searchTag = (tag) => {
    setQuery(tag);
  };

  const handleDeleteTag = (idx) => {
    const newSearchTags = [...searchTags];
    newSearchTags.splice(idx, 1);
    SetSearchTags(newSearchTags);
  };

  useEffect(() => {
    localStorage.setItem('searchTags', JSON.stringify(searchTags));
  }, [searchTags]);

  return (
    <>
      <SearchBoxContainer>
        <SearchInputContainer>
          <SearchIcon width="24" fill="#5e5e5e" />
          <SearchInput
            placeholder="???????????? ??????????????????"
            onKeyPress={onSearch}
            ref={inputRef}
          />
          <SearchOptionButton onClick={toggleSearchOption}>
            ?????? {searchOption ? '??????' : '??????'}
          </SearchOptionButton>
        </SearchInputContainer>
        {searchOption && (
          <SearchOption setOrder={setOrder} setOrientation={setOrientation} />
        )}
      </SearchBoxContainer>
      <SearchTagContainer>
        {searchTags.map((tag, idx) => (
          <SearchTag
            tag={tag}
            searchTag={() => searchTag(tag)}
            handleDeleteTag={() => handleDeleteTag(idx)}
          />
        ))}
      </SearchTagContainer>
    </>
  );
};

export default Search;
