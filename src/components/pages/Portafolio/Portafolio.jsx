import './Portafolio.css'

import Img1 from '../../../assets/Img1.png'
import HTML from '../../../assets/html5-logo-24.png'
import CSS from '../../../assets/css3-logo-24.png'
import REACT from '../../../assets/react-logo-24.png'
import BOOTSTRAP from '../../../assets/bootstrap-logo-24.png'
import GitHub from '../../../assets/github-logo-24.png'
import Link from '../../../assets/link-regular-24.png'

const cartas = [
    {
        img: Img1,
        titulo: "DRAGON-TECH-STORE",
        descrip: "Esta fue un proyecto propio creado durante mis tiempos libres para prácticar agregar diferentes opciones nuevas puestas a prueba.",
        len1: "HTML",
        len2: "CSS",
        len3: "REACT",
        len4: "BOOTSTRAP",
        imglen1: HTML,
        imglen2: CSS,
        imglen3: REACT,
        imglen4: BOOTSTRAP,
        Git: "https://github.com/INaoL2021/TECH-STORE",
        Link: "https://dragon-tech-store.netlify.app/"
    }
]

function Portafolio() {
    return (
        <>
            <div className='portafolio-content'>
                <div className='cartas-proyectos'>
                    {cartas.map((proyecto, index) => {
                        return(
                            <div className='carta' key={index}>
                                <img className='carta-img' src={proyecto.img} alt="" />
                                <h3 className='carta-titulo'>{proyecto.titulo}</h3>
                                <p className='carta-descrip'>{proyecto.descrip}</p>
                                <div className='len-lista'>
                                    <ul className='lens-content'>
                                        <li className='html'><img src={proyecto.imglen1} alt="" />{proyecto.len1}</li>
                                        <li className='css'><img src={proyecto.imglen2} alt="" />{proyecto.len2}</li>
                                        <li className='react'><img src={proyecto.imglen3} alt="" />{proyecto.len3}</li>
                                        <li className='bootstrap'><img src={proyecto.imglen4} alt="" />{proyecto.len4}</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className='opciones-pagina'>
                                        <li className='link-pagina'><img src={GitHub} alt="GitHub" /><a href={proyecto.Link}></a></li>
                                        <li className='github-repositorio'><img src={Link} alt="Link a Página" /><a href={proyecto.Git}></a></li>
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Portafolio