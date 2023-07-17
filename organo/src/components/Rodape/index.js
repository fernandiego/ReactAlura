import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='rodape'>
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target="_blank">
                            <img src="/img/fb.png" alt="facebook logo" />
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com" target="_blank">
                            <img src="/img/tw.png" alt="twitter logo" />
                        </a>
                    </li>
                    <li>
                        <a href="instagram.com" target="_blank">
                            <img src="/img/ig.png" alt="instagram logo" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/img/logo.png" alt="logo organo" />
            </section>
            <section>
                <p>
                    Developed by FOX.
                </p>
            </section>
        </footer>
    )
}

export default Rodape