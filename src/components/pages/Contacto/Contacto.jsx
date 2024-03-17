import './Contacto.css'
import ReactLogo from '../../../assets/react-logo-24.png'
import HTMLLogo from '../../../assets/html5-logo-24.png'
import CSSLogo from '../../../assets/css3-logo-24.png'
import BootstrapLogo from '../../../assets/bootstrap-logo-24.png'

function Contacto() {
    return (
        <>
            <div className='contact-container'>
                <section className='con-content'>
                    <h1>CONTACTAME</h1>
                    <div>
                        <ul>
                            <li>
                                <img src="" alt="" />
                                <b>Email:</b> ramiro1y4@gmail.com
                            </li>
                            <li>
                                <img src="" alt="" />
                                <b>Celular:</b> +54 9 11 3203-3522
                            </li>
                        </ul>
                    </div>
                </section>
                <section className='con-content'>
                    <div>
                        <h4>ESTE SITIO WEB FUE DESARROLADO CON:</h4>
                        <ul className='lens-content'>
                            <li className='html'>
                                <img src={HTMLLogo} alt="" />
                                HTML
                            </li>
                            <li className='css'>
                                <img src={CSSLogo} alt="" />
                                CSS
                            </li>
                            <li className='react'>
                                <img src={ReactLogo} alt="" />
                                React
                            </li>
                            <li className='bootstrap'>
                                <img src={BootstrapLogo} alt="" />
                                Bootstrap
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Contacto;