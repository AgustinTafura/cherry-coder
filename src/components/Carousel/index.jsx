import imagen1 from '../../assets/imagenes/imagen1.jpg';
import imagen2 from '../../assets/imagenes/imagen2.jpg';
import imagen3 from '../../assets/imagenes/imagen3.jpg';
import { Carousel } from 'react-bootstrap';
 
const CherryCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen1}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen2}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen3}
        />
      </Carousel.Item>
    </Carousel>
  )
}
 
export default CherryCarousel