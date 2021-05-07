import imagen1 from '../../assets/imagenes/imagen1.jpg';
import imagen2 from '../../assets/imagenes/imagen2.jpg';
import imagen3 from '../../assets/imagenes/imagen3.jpg';
import { Carousel } from 'react-bootstrap';

const CherryCarousel = () => {
  return (
    <div class="row fondoDiv">
      <div class="col-lg-1">
        <h3 class="texto">01 ― ― ― ― ― <strong>HOME</strong> </h3>
      </div>
      <div class="col-lg-4 textoHorizontal">
        <h3>NOVEDADES</h3>
        <h6>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</h6>
        <p class="textoChico"><strong>CONTACTO</strong></p>
      </div>

      <div class="col-lg-7 carouselTamanio">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-50"
              src={imagen1}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50"
              src={imagen2}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50"
              src={imagen3}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
}

export default CherryCarousel