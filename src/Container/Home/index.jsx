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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Exercitationem, nam nulla! Ipsa aperiam debitis, veniam eum enim quam
          tempora animi dolore at quibusdam voluptatem? Consequuntur inventore
          quam rem assumenda fugiat.
        </C.Text>
      </C.DivObjetivo>
      <C.ContainerImageOne>
        <Lottie style={{ width: "500px" }} animationData={ecoAnimation} />
      </C.ContainerImageOne>
      <C.DivEco>
        <C.Title>Movimentos Eco</C.Title>
        <C.Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
          accusantium ducimus assumenda? Error quam in, soluta obcaecati neque
          sunt porro ut illum? Nesciunt, quasi aliquid adipisci iusto nulla
          obcaecati consequatur!
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
