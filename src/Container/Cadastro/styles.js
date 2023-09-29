import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(243, 255, 88, 0.95) 70%,
    rgba(223, 246, 27, 1) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ContainerItens = styled.div`
  background: #ffffff;
  padding: 50px;
  width: 40vw;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  box-shadow: -24px 25px 17px 0px rgba(0, 0, 0, 0.1);
`

export const ContainerButton = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 30px;
`

export const Title = styled.p`
  font-size: 60px;
  font-weight: 700;
  margin-bottom: 40px;
`
export const Text = styled.p`
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 50px;
`
export const Label = styled.label`
  font-size: 16px;
  font-weight: 200;

  a {
    text-decoration: none;
    color: #898d58;
  }
`
export const Input = styled.input`
  margin-bottom: 20px;
  border: 1px solid #0f0f0f;
  border-radius: 20px;
  height: 40px;
  width: 300px;
  padding-left: 15px;
  text-align: center;
`
export const Button = styled.button`
  width: 170px;
  height: 50px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  background: #d3d2d2;
  box-shadow: -7px 9px 7px -4px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  font-weight: 700;
  padding: 5px;
  text-decoration: none;
  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 0.5;
  }
`
export const LinkSubmit = styled(Link)`
  font-size: 16px;
  font-weight: 700;
  padding: 5px;
  text-decoration: none;
  color: #000;
`