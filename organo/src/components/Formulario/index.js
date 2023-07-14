import CampoTexto from "../CampoTexto";
import './Formulario.css'
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";


const Formulario = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        ' Inovação e Gestão'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('salva FORM')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar os cards</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome"></CampoTexto>
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo"></CampoTexto>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"></CampoTexto>
                <ListaSuspensa obrigatorio={true} label="Time" itens={times}></ListaSuspensa>
                <Botao texto="Criar Card"></Botao>
            </form>
        </section>
    )
}
export default Formulario