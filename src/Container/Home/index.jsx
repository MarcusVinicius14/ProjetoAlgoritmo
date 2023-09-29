import * as C from './styles'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <C.Container>
      <C.ContainerItens>
        <C.Title>CARRY</C.Title>
        <C.Text>somos a empressa askdfalsdfklaskdfaslk</C.Text>
        <C.Label>Email</C.Label>

        <C.Input type='email' placeholder='Digete seu email' />

        <C.Label>Senha</C.Label>
        <C.Input type='password' placeholder='Digite sua senha' />
        <C.Label>
          Não possui conta? <Link to={`/cadastro`}>Cadastrar-se</Link>
        </C.Label>
        <C.ContainerButton>
          <C.Button to={`/receber`}>Receber carona</C.Button>
          <C.Button>Oferecer carona</C.Button>
        </C.ContainerButton>
      </C.ContainerItens>
    </C.Container>
  )
}

export default Home
