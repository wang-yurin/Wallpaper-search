import styled from "styled-components";
import { ReactComponent as PrevIcon } from "../asset/prev.svg";
import { ReactComponent as NextIcon } from "../asset/next.svg";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const PageSelect = styled.select`
  background-color: #fff;
  color: #455a64;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 3px;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const Pagination = () => {
  return (
    <Nav>
      <PrevIcon width="24px" cursor="pointer" />
      {`총 10 페이지 중`}
      <PageSelect name="page">
        <option value={1} key={1}>
          1
        </option>
      </PageSelect>
      페이지
      <NextIcon width="24px" cursor="pointer" />
    </Nav>
  );
};

export default Pagination;
