import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const ContainerAll = styled.div`
  display: flex;
  @media (max-width: 850px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }
`;
export const ContainerLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100vh;
  @media (max-width: 850px) {
    height: 50%;
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
export const ContainerLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100vh;
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
export const Cadastro = styled.p`
  font-size: 18px;
  font-weight: 400;
  @media (max-width: 850px) {
    font-size: 16px;
  }
`;
export const LinkButton = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: #000;
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
export const ContainerLottie = styled.div`
  @media (max-width: 850px) {
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;