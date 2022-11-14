import BtnStore from "./BtnStore";


const UsSection = () => {
    return (
        <>
            <section className="us_section_bg d-flex align-items-center">
                <div className="container d-flex justify-content-between">
                    <div>
                        <span className="us_font">Manga</span>
                    </div>
                    <div>
                        <span className="us_font">Shop</span>
                    </div>
                </div>
            </section>
            <section className="us_section">
                <div className="container us_container">
                    <h2>Quienes Somos</h2>
                    <p>Manga.Shop es el primer E-Commerce de Argentina especializado en manga. Inició sus actividades en el 2022, y desde entonces, ha llenado estanterias completas para los otakus de Argentina, asi como de otros paises de latinoamerica.</p> 
                        <p>
                            Nos especilizamos en traer <b>la mejor calidad de editoriales que adapten manga</b>, y por brindar a nuestros
                            clientes una <b>atención personalizada</b>.
                        </p>    
                    <h3>¡BIENVENIDO/A NAKAMA!</h3>
                    <BtnStore />
                </div>
            </section>
        </>
        
    )
}

export default UsSection;