import { Carousel } from 'react-bootstrap';

const CherryCarousel = () => {
  return (
    <div className="row fondoDiv">
      <div className="col-lg-1">
        <h3 className="texto"><strong>01 -              HOME</strong></h3>
      </div>
      <div className="col-lg-4 textoHorizontal">
        <h3>NOVEDADES</h3>
        <h6>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</h6>
        <p className="textoChico"><strong>CONTACTO</strong></p>
      </div>

      <div className="col-lg-7 carouselTamanio" id="carouselDesktop">
        <Carousel>
          <Carousel.Item>
            {console.log(process.env)}
            <img
              className="d-block w-100"
              src={`${process.env.PUBLIC_URL}/assets/img/imagen1.jpg`}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`${process.env.PUBLIC_URL}/assets/img/imagen2.jpg`}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`${process.env.PUBLIC_URL}/assets/img/imagen3.jpg`}
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="col-lg-7 carouselTamanio" id="carouselMobile">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`${process.env.PUBLIC_URL}/assets/img/imagenc1.jpg`}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`${process.env.PUBLIC_URL}/assets/img/imagenc2.jpg`}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`${process.env.PUBLIC_URL}/assets/img/imagenc3.jpg`}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>



  )
}

export default CherryCarousel