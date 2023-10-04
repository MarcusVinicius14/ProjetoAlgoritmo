import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const ContainerAll = styled.div`
  display: grid;
  grid-template:
    "header header" 80px
    "TextOne imgOne" 1fr
    "imgTwo TextTwo" 1fr
    "footer footer" 40px;
  height: 100vh;
`;
export const Header = styled.div`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 60px;
  padding-right: 60px;
  background: #d9d9d9;
`;
export const ContainerImageOne = styled.div`
  grid-area: imgOne;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ContainerImagetwo = styled.div`
  grid-area: imgTwo;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const DivObjetivo = styled.div`
  grid-area: TextOne;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
export const DivEco = styled.div`
  grid-area: TextTwo;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
export const ContainerButtons = styled.div`
  display: flex;
  gap: 30px;
`;
export const Footer = styled.div`
  grid-area: footer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 60px;
  padding-right: 60px;
  background: #000;
`;
export const TextFooter = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: #fff;
`;
export const FooterButton = styled(Link)`
  color: #fff;
  background: transparent;
  font-size: 20px;
  font-weight: 400;
  text-decoration: none;
`;
export const Button = styled(Link)`
  font-size: 32px;
  font-weight: 400;
  text-decoration: none;
  color: #000;
  border: none;
  border-bottom: ${(props) => (props.isActive ? "3px solid #000000" : "none")};
  background: transparent;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`;
export const Carry = styled.h1`
  font-size: 36px;
  font-weight: 400;
`;
export const Title = styled.h2`
  font-size: 32px;
  font-weight: 400;
`;
export const Text = styled.p`
  font-size: 24px;
  font-weight: 400;
  max-width: 400px;
  text-align: center;
`;
