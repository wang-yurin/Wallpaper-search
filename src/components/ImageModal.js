import styled from 'styled-components';
import { ReactComponent as LikeIcon } from '../asset/like.svg';
import { ReactComponent as DeleteIcon } from '../asset/delete.svg';
import DummyData from '../asset/dummyData.js';

const Modal = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  color: #000;
  min-width: 300px;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
  background-color: #fff;
  border: 3px solid #eceff1;
  padding: 16px;
  box-shadow: 8px 8px 12px -1px rgb(0 0 0 / 0.3);
`;

const ModalImg = styled.img`
  width: 100%;
`;

const DetailRow = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
  & > * {
    margin-right: 6px;
  }
`;

const ImageModal = () => {
  const { largeImageURL } = DummyData.hits[0];
  return (
    <Modal>
      <DeleteIcon width="24px" cursor="pointer" fill="#FFFFFF" />
      <ModalImg src={largeImageURL} />
      <p>태그,태그,태그</p>
      <DetailRow>
        <LikeIcon width="20px" height="20px" />
        000명이 좋아합니다
      </DetailRow>
      <p>000 조회</p>
    </Modal>
  );
};

export default ImageModal;
