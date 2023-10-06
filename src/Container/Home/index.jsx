import Lottie from "lottie-react";
import ecoAnimation from "../../assets/ecoAnimation.json";
import sobreAnimation from "../../assets/sobreAnimation.json";

import * as C from "./styles";

function Home() {
  return (
    <C.ContainerAll>
      <C.Header>
        <C.Carry>CARRY</C.Carry>
        <C.ContainerButtons>
          <C.Button isActive={true}>Home</C.Button>
          <C.Button to={"/receber"}>Receber</C.Button>
          <C.Button to={"/oferecer"}>Oferecer</C.Button>
        </C.ContainerButtons>
      </C.Header>
      <C.DivObjetivo>
        <C.Title>Objectivo</C.Title>
        <C.Text>
          Nosso objetivo é desenvolver um aplicativo onde seja viabilizada 
          a carona
          gratuitamente entre alunos da graduação, disponibilizando
          desconto ou vale-gaolina para os motoristas pela boa ação.
        </C.Text>
      </C.DivObjetivo>
      <C.ContainerImageOne>
        <Lottie style={{ width: "500px" }} animationData={ecoAnimation} />
      </C.ContainerImageOne>
      <C.DivEco>
        <C.Title>Movimentos Eco</C.Title>
        <C.Text>
          Carry é uma empresa com proposito ecologico que tem como meta atingir uma sociedade mais
          ecologica limpa. Menos um carro na rua é menos liberação de gás carbonico 
          impactanto positivamente a vida de todos.
        </C.Text>
      </C.DivEco>
      <C.ContainerImagetwo>
        <Lottie style={{ width: "500px" }} animationData={sobreAnimation} />
      </C.ContainerImagetwo>{" "}
      <C.Footer>
        <C.TextFooter>
          Seja Bem vindo ao Carry Marcus! Institution : Senai
        </C.TextFooter>
        <C.FooterButton to={"/"}>Log Out</C.FooterButton>
      </C.Footer>
    </C.ContainerAll>
  );
}

export default Home;
