import styled from 'styled-components';

const Card = styled.div`
  margin-left: 8px;
  margin-bottom: 8px;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 300px;
  padding: 8px;
  cursor: pointer;
`;

const Img = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const ImageCard = ({ imgData, onClick }) => {
  // console.log(imgData, onClick);
  const { previewURL, id } = imgData;
  // console.log(webformatURL);
  return (
    <Card onClick={onClick}>
      <Img key={id} src={previewURL} />
    </Card>
  );
};

export default ImageCard;
