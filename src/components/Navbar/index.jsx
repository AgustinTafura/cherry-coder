// import $ from "jquery";
import './index.css'

const Navbar = () => {
    const sections = [
        'Que son',
        'Modo de Uso',
        'Como comprar',
        'Mayoristas',
        'Contacto'
    ]


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <a className="navbar-brand" href="#"><img id="nav-logo" src="/assets/img/logo2.png" alt=""/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    {
                        sections.map((section, index)=>{
                            
                            return(

                                <li key={index} className="nav-item">
                                    <a className="nav-link" href="#">{section}</a>
                                </li>

                            )

                        })
                    }

                </ul>
            </div>

            <div className='d-none d-lg-block '>   
                <a href=""><i class="fab fa-instagram"></i></a>
                <a href=""><i class="fab fa-whatsapp"></i></a> 
            </div>
        </nav>
    )
}

export default Navbar
