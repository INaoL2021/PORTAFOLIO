import './Home.css'
import CV from '../../../assets/CV_Español.pdf'

function Home() {
    return (
        <>
            <div className='home-content'>
                <h1 className='name-title'>RAMIRO <span>DANIEL</span> PAVON</h1>
                <div className='contenedor'><p className='code-style'>De camino a convertime en desarrollador <span>&#160;</span></p></div>
                <p>Si necesitas contactarme escribeme a: <b className='email'>ramiro1y4@gmail.com</b></p>
                <a href={CV} download={CV}><button className='cv-btn'>Descarga mi CV</button></a>
            </div>
        </>
    )
}

export default Home;