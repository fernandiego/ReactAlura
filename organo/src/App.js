import Banner from './components/Banner';
import Formulario from "./components/Formulario";
import {useState} from "react";
import Time from "./components/Time";


function App() {

    const times = [
        {
            nome: 'Programação',
            corPrimaria: '#D9F7E9',
            corSecundaria: '#57C278'
        },
        {
            nome: 'Front-End',
            corPrimaria: '#82CFFA',
            corSecundaria: '#E8F8FF',
        },
        {
            nome: 'Data Sciense',
            corPrimaria: '#A6D157',
            corSecundaria: '#F0F8E2',
        },
        {
            nome: 'Devops',
            corPrimaria: '#E06B69',
            corSecundaria: '#FDE7E8',
        },
        {
            nome: 'UX e Design',
            corPrimaria: '#D86EBF',
            corSecundaria: '#FAE5F5',
        },
        {
            nome: 'Mobile',
            corPrimaria: '#FEBA05',
            corSecundaria: '#FFF5D9',
        },
        {
            nome: 'Inovação e Gestão',
            corPrimaria: '#FF8A29',
            corSecundaria: '#FFEEDF',
        }

    ]

    const [colaboradores, setColaboradores] = useState([])
    const aoNovoColaboradorAdicionado = (colaborador) => {
        console.log(colaborador)
        setColaboradores([...colaboradores, colaborador])
    }

    return (
        <div className="App">
            <Banner></Banner>
            <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}></Formulario>

            {times.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria} />)}



</div>
    );
}

export default App;
