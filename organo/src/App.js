import Banner from './components/Banner';
import Formulario from "./components/Formulario";
import {useState} from "react";


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

    </div>
  );
}

export default App;
