import Lottie from "lottie-react";
import loginPageAnimation from "../../assets/cadastroAnimation.json";
import * as C from "./styles";

function Cadastro() {
  return (
    <C.ContainerAll>
      <C.ContainerLogin>
        <C.ContainerItens>
          <C.Title>Cadastro</C.Title>
          <C.ContainerLabel>
            <C.Label>Nome</C.Label>
            <C.Input type="string" />
            <C.Label>Instituição </C.Label>
            <C.Input type="string" />
            <C.Label>Email</C.Label>
            <C.Input type="email" />
            <C.Label>Senha</C.Label>
            <C.Input type="password" />
            <C.Label>Confirmar senha</C.Label>
            <C.Input type="password" />
          </C.ContainerLabel>
          <C.Button to={`/`}>Enviar</C.Button>
          <C.Cadastro>
            Já possui cadastro? <C.LinkButton to={`/`}>Entrar</C.LinkButton>
          </C.Cadastro>
        </C.ContainerItens>
      </C.ContainerLogin>
      <C.ContainerLogo>
        <C.Carry>CARRY</C.Carry>
        <C.Text>procurando carona? De apenas um click</C.Text>
        <C.Text>
          Cadastre-se para ganhar caronas gratuitas, descontos em sua fatura
          alem de ajudar o meio anbiente.
        </C.Text>
        <C.ContainerLottie>
          <Lottie
            style={{ width: "400px" }}
            animationData={loginPageAnimation}
          />
        </C.ContainerLottie>
      </C.ContainerLogo>
    </C.ContainerAll>
  );
}

export default Cadastro;
