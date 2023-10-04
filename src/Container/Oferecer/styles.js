import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const ContainerAll = styled.div`
  display: grid;
  grid-template:
    "header header" 80px
    "DivOne DivTwo" 0.5fr
    "footer footer" 40px;
  height: 100vh;
`;
export const ContainerLogin = styled.div`
  grid-area: DivOne;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50vw;
  height: calc(100vh - 120px);
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
export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
export const ContainerLabel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;
export const ContainerButtons = styled.div`
  display: flex;
  gap: 30px;
`;
export const ContainerLogo = styled.div`
  grid-area: DivTwo;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50vw;
  height: calc(100vh - 120px);
  background: #d9d9d9;
  gap: 60px;
`;
export const Title = styled.h1`
  font-size: 32px;
  font-weight: 400;
`;
export const Carry = styled.h1`
  font-size: 48px;
  font-weight: 400;
`;
export const Label = styled.label`
  font-size: 20px;
  font-weight: 400;
`;
export const Input = styled.input`
  background: #d9d9d9;
  border-radius: 25px;
  border: none;
  width: 300px;
  height: 35px;
  padding-left: 9px;
  margin-bottom: 20px;
`;
export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #d9d9d9;
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 400;
  text-decoration: none;
  color: #000;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`;
export const ButtonHeader = styled(Link)`
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
export const Text = styled.p`
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  max-width: 80%;
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