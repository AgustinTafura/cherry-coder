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
        <>

        <nav className="container-fluid">
            <div className="navbar navbar-expand-lg navbar-light row no-gutters container-fluid">
                <a className="navbar-brand col-1" href="#"><img id="nav-logo" src="/assets/img/logo2.png" alt=""/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul className="navbar-nav ">
                        {
                            sections.map((section, index)=>{
                                
                                return(

                                    <li key={index} className="nav-item text-center p-1 m-lg-3 text-nowrap">
                                        <a className="" href="#">{section}</a>
                                    </li>

                                )

                            })
                        }

                    </ul>
                </div>

                <div className='social-media d-none d-lg-block col-1 text-center'>   
                    <a href="" className="m-2 h4"><i className="fab fa-instagram"></i></a>
                    <a href="" className="m-2 h4"><i className="fab fa-whatsapp"></i></a> 
                </div>
            </div>
        </nav>

      </>
    )
}

export default Navbar
