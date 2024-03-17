import './Educacion.css'
import DW1 from '../../../assets/Certificado_AP_DW1.pdf'
import DW2 from '../../../assets/Certificado_AP_DW2.pdf'
import DW3 from '../../../assets/Certificado_AP_DW3.pdf'
import DW4 from '../../../assets/Certificado_AP_DW4.pdf'
import CD from '../../../assets/Certificado_AP_CD.pdf'

function Educacion() {
    return (
        <>
            <div className='edu-container'>
                <section className='edu-sec'>
                    <h1 className='edu-titulo'>Cursos</h1>
                    <div className='edu-content'>
                        <div className='cer-cont'>
                            <h3>Desarrollo Web</h3>
                            <a className="cer-down-btn" href={DW1} download={DW1}>Certificado</a>
                            <a className="cer-down-btn" href={DW2} download={DW2}>Certificado</a>
                            <a className="cer-down-btn" href={DW3} download={DW3}>Certificado</a>
                            <a className="cer-down-btn" href={DW4} download={DW4}>Certificado</a>
                        </div>
                        <p className='edu-di'>HTML / CSS / BOOTSTRAP / REACTJS / MYSQL</p>
                        <p className='edu-txt'>
                            Estos cursos fueron brindados por el Gobierno de la Ciudad de Buenos Aires <b>CABA</b> para aquellos estudiant
                            es que estaban en sus últimos 2 años de secundaria. Este se llamaba <b>AP</b>, "Aprende Programando", los cuáles tenian una duración
                            aproximada de 3 meses y meido cada uno. Este los tome a comienzos de 2022 hasta finales de 2023.
                        </p>

                    </div>
                    <div className="edu-content">
                        <div className='cer-cont'>
                            <h3>Ciencia de Datos</h3>
                            <a className="cer-down-btn" href={CD} download={CD}>Certificado</a>
                        </div>
                        <p className="edu-di">PYTHON</p>
                        <p className='edu-txt'>
                            Estos fue otro curso de AP, en el cuál a través de Python teniamos el objetivo de graficar diferente tablas de
                            archivos brindadas por ellos y mostrarlo para que se visible para el púbico de manera sensilla.
                        </p>
                    </div>
                </section>
                <section className='edu-sec'>
                    <h1 className='edu-titulo'>Pasantías</h1>
                    <div className='edu-content'>
                        <h3>Marsh and McLennan</h3>
                        <p className='edu-di'>C1106ACV, Av. Eduardo Madero 802, 1106 Buenos Aires, Piso 16</p>
                        <p className='edu-txt'>
                            Este duró aproximadamente 3 meses y medio, y mi trabajo durante el mismo fue el de ocupar un lugar en la Sala de Sistemas,
                            en la cuál se me dio el trabajo de verificar el correcto funcionamiento de las laptops de la compañia, cambio de componentes
                            internos de las laptos, instalación del sistema operativo de la empresa, formateo de dispositivos y su correcta categorización
                            para asegurar que sean ocupadas a futuro.
                        </p>
                    </div>
                    <div className='edu-content'>
                        <h3>Bliblioteca del Docente</h3>
                        <p className='edu-di'>Av. Entre Ríos 1349, C1148 Buenos Aires</p>
                        <p className='edu-txt'>
                            Este fue mi primer pasantía en la cuál tuvimos que ir y presentarnos para ayudar a hacer marketing personalizado para la biblioteca.
                            Esta incluida tanto panfletos para distribuir al público hasta promosiones de libros via instagram o tiktok. Además de encargarme de categorizar
                            los diferentes tipos de libros según correspodía en un Excel.
                        </p>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Educacion;