import styled from "styled-components";

const EmptyResultContainer = styled.div`
  width: 100%;
  text-align: center;
  padding: 16px 0;
  color: black;
  font-size: 20px;
  line-height: 1.5;
`;

const EmptyResult = () => {
  return (
    <EmptyResultContainer>
      <p>
        검색 결과가 없습니다. <br />
        다른 키워드로 검색해주세요.
      </p>
    </EmptyResultContainer>
  );
};

export default EmptyResult;
