import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const ContainerAll = styled.div`
  display: grid;
  grid-template:
    "header header" 80px
    "DivOne DivTwo" 0.5fr
    "footer footer" 40px;
  height: 100vh;
  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
`;
export const ContainerLogin = styled.div`
  grid-area: DivOne;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50vw;
  height: calc(100vh - 120px);
  @media (max-width: 850px) {
    height: 50vh;
    margin-bottom: 20px;
  }
`;
export const Header = styled.div`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 60px;
  padding-right: 60px;
  background: #d9d9d9;
  @media (max-width: 850px) {
    width: 100vw;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-left: 0px;
    padding-right: 0px;
    margin-bottom: 20px;
  }
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
  @media (max-width: 850px) {
    gap: 10px;
  }
`;
export const Footer = styled.div`
  grid-area: footer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 60px;
  padding-right: 60px;
  background: #000;
  @media (max-width: 850px) {
    display: none;
  }
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
  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 60%;
    width: 100vw;
    background: #fff;
    margin-bottom: 50px;
    margin-top: 20px;
  }
`;
export const Title = styled.h1`
  font-size: 32px;
  font-weight: 400;
  @media (max-width: 850px) {
    font-size: 24px;
  }
`;
export const Carry = styled.h1`
  font-size: 48px;
  font-weight: 400;
  @media (max-width: 850px) {
    font-size: 24px;
  }
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
  @media (max-width: 850px) {
    font-size: 16px;
    border-bottom: ${(props) =>
      props.isActive ? "1px solid #000000" : "none"};
  }
`;
export const Text = styled.p`
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  max-width: 80%;
  @media (max-width: 850px) {
    font-size: 18px;
    max-width: 350px;
  }
`;
export const ContainerAnimation = styled.div`
  width: 400px;
  @media (max-width: 850px) {
    width: 300px;
  }
`;