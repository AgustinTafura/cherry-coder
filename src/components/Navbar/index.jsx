import $ from "jquery";
import './index.css'

const Navbar = () => {
    const sections = [
        'que-son',
        'modelos',
        'beneficios',
        'modo-de-uso',
        'contacto'
    ]



    const scrollToSection = (e) => {
        e.preventDefault()
        var elem = e.nativeEvent.target
        window.innerWidth < 992 && $('.collapse').collapse('toggle')
        window.scrollTo({ top: ($(elem.hash)).offset().top - 80, behavior: 'smooth' })
    }

    return (
        <>
            <nav className="container-fluid">
                <div className="navbar navbar-expand-lg navbar-light row no-gutters container-fluid fixed-top bg-white shadow-sm">
                    <a className="navbar-brand col-1" href="#"><img id="nav-logo" src={`${process.env.PUBLIC_URL}/assets/img/logo2.png`} alt="" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-center " id="navbarSupportedContent">
                        <ul className="navbar-nav col-lg-8">
                            {
                                sections.map((section, index) => {

                                    return (

                                        <li key={index} className="nav-item text-center p-1 m-lg-3 text-nowrap  col-lg-2 ">
                                            <a onClick={scrollToSection} className="" href={`#${section}`}>{section.replaceAll('-', ' ')}</a>
                                        </li>

                                    )

                                })
                            }

                        </ul>
                    </div>

                    <div className='social-media d-none d-lg-block col-1 text-center'>
                        <a href="#" data-toggle="modal" data-placement="bottom" title="Donde encontrarnos" data-target="#redDistrubuidoresModal" target="_blank" className="m-2 h4"><i class="fas fa-shopping-bag"></i></a>
                        <a href="https://www.instagram.com/cherryalmohadillas/" target="_blank" className="m-2 h4"><i className="fab fa-instagram"></i></a>
                        <a href="https://api.whatsapp.com/send?phone=5493544589440&amp;text=&amp;source=&amp;data=&amp;app_absent=" target="_blank" className="m-2 h4"><i className="fab fa-whatsapp"></i></a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
