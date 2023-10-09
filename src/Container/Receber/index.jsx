import Lottie from "lottie-react";
import ReceberAnimation from "../../assets/ReceberAnimation.json";
import * as C from "./styles";

function Receber() {
  return (
    <C.ContainerAll>
      <C.Header>
        <C.Carry>CARRY</C.Carry>
        <C.ContainerButtons>
          <C.ButtonHeader to={"/home"}>Home</C.ButtonHeader>
          <C.ButtonHeader isActive={true}>Receber</C.ButtonHeader>
          <C.ButtonHeader to={"/oferecer"}>Oferecer</C.ButtonHeader>
        </C.ContainerButtons>
      </C.Header>
      <C.ContainerLogin>
        <C.ContainerItens>
          <C.Title>Receber carona</C.Title>
          <C.ContainerLabel>
            <C.Label>Local</C.Label>
            <C.Input type="email" />
            <C.Label>Horario</C.Label>
            <C.Input type="time" />
          </C.ContainerLabel>
          <C.Button>Submit</C.Button>
        </C.ContainerItens>
      </C.ContainerLogin>
      <C.ContainerLogo>
        <C.Carry>CARRY</C.Carry>
        <C.Text>Quer receber carona?</C.Text>
        <C.Text>
          Recebendo carona você ajuda o meio ambiente e pode beneficiar diversas
          pessoas com isso.
        </C.Text>
        <C.ContainerAnimation>
          <Lottie animationData={ReceberAnimation} />
        </C.ContainerAnimation>
      </C.ContainerLogo>
      <C.Footer>
        <C.TextFooter>
          Seja Bem vindo ao Carry Marcus! Institution : Senai
        </C.TextFooter>
        <C.FooterButton to={"/"}>Log Out</C.FooterButton>
      </C.Footer>
    </C.ContainerAll>
  );
}

export default Receber;
