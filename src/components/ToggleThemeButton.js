import styled from "styled-components";
import { ReactComponent as LightIcon } from "../asset/light.svg";
import { ReactComponent as DarkIcon } from "../asset/dark.svg";

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 10px;
  top: 10px;
  width: 50px;
  height: 50px;
  background-color: #455a64;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: #808e95;
    transition: ease 0.5s;
  }
`;

const ToggleThemeButton = () => {
  return (
    <Button>
      <DarkIcon width="50" height="50" fill="#fff" />
      <LightIcon width="50" height="50" fill="#fff" />
    </Button>
  );
};

export default ToggleThemeButton;
