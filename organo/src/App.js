import Banner from './components/Banner';
import Formulario from "./components/Formulario";
import {useState} from "react";
import Time from "./components/Time";


function App() {

    const [colaboradores, setColaboradores] = useState([])
    const aoNovoColaboradorAdicionado = (colaborador) => {
        console.log(colaborador)
        setColaboradores([...colaboradores, colaborador])
    }

    return (
        <div className="App">
            <Banner></Banner>
            <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}></Formulario>
            <Time nome="Programação"></Time>
            <Time nome="Front-Ent"></Time>
            <Time nome="Data Science"></Time>
            <Time nome="Devops"></Time>
            <Time nome="UX e Design"></Time>
            <Time nome="Mobile"></Time>
            <Time nome="Inovação e Gestão"></Time>
        </div>
    );
}

export default App;
