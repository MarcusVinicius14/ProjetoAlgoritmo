import Lottie from "lottie-react";
import loginPageAnimation from "../../assets/loginPageAnimation.json";
import * as C from "./styles";

function LoginPage() {
  return (
    <C.ContainerAll>
      <C.ContainerLogin>
        <C.ContainerItens>
          <C.Title>Login</C.Title>
          <C.ContainerLabel>
            <C.Label>Email</C.Label>
            <C.Input type="email" />
            <C.Label>Senha</C.Label>
            <C.Input type="password" />
          </C.ContainerLabel>
          <C.Button to={`/home`}>Entrar</C.Button>
          <C.Cadastro>
            Nao possui cadastro? <C.LinkButton to={`/cadastro`}>Cadastrar-se</C.LinkButton>
          </C.Cadastro>
        </C.ContainerItens>
      </C.ContainerLogin>
      <C.ContainerLogo>
        <C.Carry>CARRY</C.Carry>
        <C.Text>procurando carona? De apenas um click</C.Text>
        <C.Text>
          Somos uma empresa ecologicamente correta que tem como proposito
          fornecer caronas gratuitas para diversos estudantes. Interessado? Crie
          sua conta.
        </C.Text>
        <C.ContainerLottie>
        <Lottie style={{ width: "400px" }} animationData={loginPageAnimation} />
        </C.ContainerLottie>
      </C.ContainerLogo>
    </C.ContainerAll>
  );
}

export default LoginPage;
