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

    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar os cards</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome"></CampoTexto>
                <CampoTexto label="Cargo" placeholder="Digite seu cargo"></CampoTexto>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"></CampoTexto>
                <ListaSuspensa label="Time" itens={times}></ListaSuspensa>
                <Botao texto="Criar Card"></Botao>
            </form>
        </section>
    )
}
export default Formulario