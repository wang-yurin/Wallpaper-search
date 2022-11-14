import styled from "styled-components";
import DummyData from "../asset/dummyData";
import Pagination from "./Pagination";
import ImageCard from "./ImageCard";

const Container = styled.div`
  max-width: 1800px;
  margin: 10px auto;
`;

const ResultWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ResultContainer = () => {
  const data = DummyData;
  return (
    <Container>
      <Pagination></Pagination>
      <ResultWrapper>
        {data.hits.map((imgData) => (
          <ImageCard key={imgData.id} imgData={imgData} />
        ))}
      </ResultWrapper>
    </Container>
  );
};

export default ResultContainer;
