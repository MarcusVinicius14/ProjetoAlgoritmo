import * as C from './styles'
import { Link } from 'react-router-dom'

function Cadastro() {
  return (
    <C.Container>
      <C.ContainerItens>
        <C.Title>CARRY</C.Title>
        <C.Text>Por favor efetue seu cadastro</C.Text>
        <C.Label>Instituicao da qual estuda</C.Label>
        <C.Input type='name' placeholder='Digite sua instituicao' />
        <C.Label>Email</C.Label>
        <C.Input type='email' placeholder='Digite seu email' />
        <C.Label>Nome Completo</C.Label>
        <C.Input type='name' placeholder='Digite seu nome completo' />
        <C.Label>Senha</C.Label>
        <C.Input type='password' placeholder='Digite sua senha' />
        <C.Label>Confirme sua senha</C.Label>
        <C.Input type='password' placeholder='Confirme sua senha' />
        <C.Label>
          Ja possui conta? <Link to={`/`}>Log in</Link>
        </C.Label>
        <C.ContainerButton>
          <C.Button>
            <C.LinkSubmit to={`/`}>Submit</C.LinkSubmit>
          </C.Button>
        </C.ContainerButton>
      </C.ContainerItens>
    </C.Container>
  )
}

export default Cadastro
