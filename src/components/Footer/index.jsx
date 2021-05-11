import './index.css'


const FooterContainer = () => {
      return (
        <footer>
          <div className="container text-center pt-5 pb-2">
            <div className="row pt-2">

              <h5 id="contacto"className="d-inline col-md-3 text-md-left mb-4 mb-md-0">
                <div>DATOS DE</div>
                <div>CONTACTO</div>
              </h5>
              <div id="telefono" className="col-md-3">
                <i className="fab fa-whatsapp" aria-hidden="true"></i>
                <div itemScope="" itemType="https://schema.org/LocalBusiness">
                  <div>WhatsApp</div>
                   
                  <span itemProp="telephone">
                    <a href="https://api.whatsapp.com/send?phone=5491167485220&amp;text=&amp;source=&amp;data=&amp;app_absent=">
                      XXX XXXX-XXXX
                    </a>
                  </span>
                  </div>
              </div>

              <div id="direccion" className="col-md-3">
                <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                <address>
                  <div>Nono, Córdoba.</div>
                  <a href="https://goo.gl/maps/tCw7LczfgJvjPbFC6">Cómo llegar</a>
                </address>
              </div>

              <div id="email" className="col-md-3">
                <i className="far fa-envelope" aria-hidden="true"></i>
                <div>
                  <div>Correo electrónico</div>
                  <a href="mailto:mail@gmail.com">mail@gmail.com</a>
                </div>
              </div>

            </div>
            <div id="copywrite">© Hecho by Agus, Lucas y Aye para Cherry - 2021</div>
          </div>
        </footer>
      )
}

export default FooterContainer
