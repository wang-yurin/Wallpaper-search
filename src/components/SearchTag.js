import styled from 'styled-components';
import { ReactComponent as DeleteIcon } from '../asset/delete.svg';

const Tag = styled.div`
  display: flex;
  font-size: 14px;
  border-radius: 1rem;
  background-color: #455a64;
  color: #fff;
  margin: 5px;
  padding: 10px;
`;

const TagLabel = styled.span`
  font-weight: bold;
  margin-right: 5px;
  &:hover {
    text-decoration: underline;
  }
`;

const SearchTag = () => {
  return (
    <Tag>
      <TagLabel>최근 검색어</TagLabel>
      <DeleteIcon width="12px" cursor="pointer" />
    </Tag>
  );
};

export default SearchTag;
