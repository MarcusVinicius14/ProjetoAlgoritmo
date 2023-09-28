import * as C from "./styles"
function Home() {
    return(
        <C.Container>
            <C.ContainerItens>
                <C.Title>CARRY</C.Title>
                <C.Text>somos a empressa askdfalsdfklaskdfaslk</C.Text>               
                <C.Label>Email</C.Label>
                <C.Input type=""/>
                <C.Label>Senha</C.Label>
                <C.Input/>
                <C.Label>Não possui conta? <a href="#">Cadastrar-se</a></C.Label>
                <C.ContainerButton>
                <C.Button>Receber</C.Button>
                <C.Button>Oferecer</C.Button>
                </C.ContainerButton>
            </C.ContainerItens>
        </C.Container>
    )
}

export default Home