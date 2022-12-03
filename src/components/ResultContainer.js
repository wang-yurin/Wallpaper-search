import styled from 'styled-components';
import Pagination from './Pagination';
import ImageCard from './ImageCard';
import ImageModal from './ImageModal';
import EmptyResult from './EmptyResult';

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

const ResultContainer = ({ data }) => {
  return (
    <Container>
      {/* <ImageModal></ImageModal> */}
      <Pagination></Pagination>
      <ResultWrapper>
        {data.hits?.map((imgData) => (
          <ImageCard key={imgData.id} imgData={imgData} />
        ))}
        {/* <EmptyResult /> */}
      </ResultWrapper>
    </Container>
  );
};

export default ResultContainer;
