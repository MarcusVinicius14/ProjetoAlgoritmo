import * as C from './styles'

function Receber() {
  return (
    <C.Container>
      <C.ContainerItens>
        <C.Title>CARRY</C.Title>
        <C.Text>Preencha os campos para receber carona</C.Text>
        <C.Label>Local de espera</C.Label>
        <C.Input type='string' placeholder='Digite aonde espera receber carona' />
        <C.Label>Horario</C.Label>
        <C.Input type='time' placeholder='Horario esperado' />
        <C.ContainerButton>
          <C.Button>Ver caronas disponiveis</C.Button>
        </C.ContainerButton>
      </C.ContainerItens>
    </C.Container>
  )
}

export default Receber
