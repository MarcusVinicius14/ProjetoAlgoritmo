import Lottie from "lottie-react";
import OferecerAnimation from "../../assets/OferecerAnimation.json";
import * as C from "./styles";

function Oferecer() {
  return (
    <C.ContainerAll>
      <C.Header>
        <C.Carry>CARRY</C.Carry>
        <C.ContainerButtons>
          <C.ButtonHeader to={"/home"}>Home</C.ButtonHeader>
          <C.ButtonHeader to={"/receber"}>Receber</C.ButtonHeader>
          <C.ButtonHeader isActive={true}>Oferecer</C.ButtonHeader>
        </C.ContainerButtons>
      </C.Header>
      <C.ContainerLogin>
        <C.ContainerItens>
          <C.Title>Oferecer carona</C.Title>
          <C.ContainerLabel>
            <C.Label>Percurso</C.Label>
            <C.Input type="string" />
            <C.Label>Horario</C.Label>
            <C.Input type="time" />
            <C.Label>Polo da instituição</C.Label>
            <C.Input type="string" />
          </C.ContainerLabel>
          <C.Button>Submit</C.Button>
        </C.ContainerItens>
      </C.ContainerLogin>
      <C.ContainerLogo>
        <C.Carry>CARRY</C.Carry>
        <C.Text>Quer oferecer carona?</C.Text>
        <C.Text>
          Oferecendo carona você recebe diversos benefícios como, desconto em
          sua mensalidade, networking, além de ajudar o meio ambiente.
        </C.Text>
        <C.ContainerAnimation>
          <Lottie animationData={OferecerAnimation} />
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

export default Oferecer;
