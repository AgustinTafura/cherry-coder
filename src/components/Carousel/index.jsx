import './index.css'
import { Carousel } from 'react-bootstrap';
const CherryCarousel = () => {
  return (
    <div id='cherryCarousel' className="row no-gutters fondoDiv">
      <div className="col-md-1">
        <h3 className="texto"><strong>01                HOME</strong></h3>
      </div>
      <div className="col-sm-8 col-md-3 textoHorizontal">
        <div>
          <h3>NOVEDADES</h3>
          <h6>¡Nuevo producto! Mantas individuales polar ideales para tener como compañeras durante este invierno, en la cama, sillon, mesa, o donde desees. A parte de súper calentitas decoran tus espacios.</h6>
          <a href="https://www.instagram.com/cherrymantas/" target="_blank" className="textoChico"><strong>VER MÁS</strong></a>

        </div>

      </div>

      <div className="col-sm-10 col-md-7 carouselTamanio" id="carouselDesktop">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`${process.env.PUBLIC_URL}/assets/img/imagen11.jpg`}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`${process.env.PUBLIC_URL}/assets/img/imagen12.jpg`}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`${process.env.PUBLIC_URL}/assets/img/imagen13.jpg`}
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="col-sm-10 col-md-7 carouselTamanio" id="carouselMobile">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`${process.env.PUBLIC_URL}/assets/img/imagen11c.jpg`}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`${process.env.PUBLIC_URL}/assets/img/imagen12c.jpg`}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`${process.env.PUBLIC_URL}/assets/img/imagen13c.jpg`}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>



  )
}

export default CherryCarousel