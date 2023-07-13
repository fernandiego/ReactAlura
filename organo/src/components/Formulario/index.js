import CampoTexto from "../CampoTexto";


const Formulario = () => {
    return (
        <section>
            <form>
                <CampoTexto label="Nome" placeholder="Digite seu nome"></CampoTexto>
                <CampoTexto label="Cargo" placeholder="Digite seu cargo"></CampoTexto>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"></CampoTexto>
            </form>
        </section>
    )
}
export default Formulario