import './index.css'


const FooterContainer = () => {
  return (
    <footer>
      <div className="container text-center pt-5 pb-2">
        <div className="row pt-2">

          <h3 id="contacto" className="d-inline col-md-3 text-md-left mb-4 mb-md-0">
            <div>DATOS DE</div>
            <div>CONTACTO</div>
          </h3>
          <div id="telefono" className="col-md-3">
            <i className="fab fa-whatsapp" aria-hidden="true"></i>
            <div itemScope="" itemType="https://schema.org/LocalBusiness">
              <div>WhatsApp</div>

              <span itemProp="telephone">
                <a href="https://api.whatsapp.com/send?phone=5493544589440&amp;text=&amp;source=&amp;data=&amp;app_absent=">
                  (35) 4458-9440
                    </a>
              </span>
            </div>
          </div>

          <div id="direccion" className="col-md-3">
            <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
            <address>
              <div> Avenida Los Porteños 698 Nono, Córdoba.</div>
              {/* <a href="https://goo.gl/maps/YccMq1M7Xxss9knc6" >Cómo llegar</a> */}
              <a href="#" data-toggle="modal" data-target="#redDistrubuidoresModal" >Dónde Encontrarnos</a>
            </address>
          </div>

          <div id="email" className="col-md-3">
            <i className="far fa-envelope" aria-hidden="true"></i>
            <div>
              <div>Correo electrónico</div>
              <a href="mailto:solbruzzone@hotmail.com ">solbruzzone@hotmail.com</a>
            </div>
          </div>

        </div>
        <div id="copywrite">© Hecho by Agus, Lucas y Aye para Cherry - 2021</div>
      </div>

      {/* <!-- Modal --> */}
      <div className="modal fade" id="redDistrubuidoresModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">DONDE ENCONTRARNOS</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div id="accordion">
                <div className="card">
                  <div className="card-header" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    <h5 className="mb-0" >
                      <button className="btn collapsed" >
                        BUENO AIRES
                    </button>
                    </h5>
                  </div>

                  <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body">
                      <ul>
                        <li>Liniers : <a href="https://goo.gl/maps/74cYqpPtohMbLsqU6"> Cnel. Ramón Falcón 7055 local 7 “Tienda Holistica Khewra”</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingTwo" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <h5 className="mb-0" >
                      <button className="btn collapsed" >
                        CORDOBA
                    </button>
                    </h5>
                  </div>
                  <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div className="card-body">
                      <ul>
                        <li>Capital - Nueva Cordoba : <a href="https://goo.gl/maps/HQtc6KF4j22wN5a26"> Rondeau 615 local 5 “La casa de los aromas” </a></li>
                        <li>Capital - Nueva Cordoba : <a href="https://www.instagram.com/cronopia.almohadillas/?hl=es-la">“Cronopia”</a>   - Contacto <a href="tel:+542966466519">2966466519</a> </li>
                        <li>Capital - General Paz : <a href="https://goo.gl/maps/2VR7RzzFB5fkurc37">Sarmiento 1750 (CIR)</a>  </li>
                        <li>Nono : <a href="https://www.instagram.com/p/CHbjKZnBcyJ/"> Av Libertad esquina Jorge Recalde “Menta” </a></li>
                        <li> Unquillo y Centro : <a href="https://www.instagram.com/onix.cosmeticanatural/?hl=es"> @onix.cosmeticanatural </a></li>
                      </ul>

                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <h5 className="mb-0" >
                      <button className="btn collapsed" >
                        CORRIENTES
                    </button>
                    </h5>
                  </div>
                  <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div className="card-body">
                      <ul>
                        <li>Capital : <a href="https://www.instagram.com/naturalezabioactiva/">@naturalezabioactiva</a> </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingFour" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    <h5 className="mb-0" >
                      <button className="btn collapsed" >
                        MENDOZA
                    </button>
                    </h5>
                  </div>
                  <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                    <div className="card-body">
                      <ul>
                        <li>Godoy Cruz : <a href="https://goo.gl/maps/kA9MR6c8DpR45HGU7"> Av. San Martín sur 2883 local 12 “Más Clean”</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterContainer
