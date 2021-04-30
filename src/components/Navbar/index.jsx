import logo from '../../assets/imagenes/logo.png';

const Navbar = () => { 
        const sections = [
        'Home',
        'Productos'
    ]

    return (
        <nav class="navbar navbar-expand-md navbar-light fixed-top bg-light">
            <div class="container-fluid">
            <img class="logoNav" src={logo} alt="Cherry" />
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse textoMenu" id="navbarCollapse">
                <ul class="navbar-nav me-auto mb-2 mb-md-0">
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
            </div>
        </nav>
    )
}

export default Navbar
