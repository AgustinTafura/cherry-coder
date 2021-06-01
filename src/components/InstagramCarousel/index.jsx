import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import Slider from "react-slick";
import { useState } from "react";

const InstagramCarousel = () => {

  const images = [ 'imagenc2.jpg', 'imagenc3.jpg','imagenc1.jpg','IMG_0023.JPG', 'IMG_0022.JPG','imagenc1.jpg', 'IMG_0024.JPG', 'IMG_0026.JPG',]
  //setea la cantidad de imagenes a mostrar en el carousell de instagram
  const [slidesToShow, setSlidesToShow] = useState(2)
  const quantitySlidesToShow = () => {
    window.innerWidth >= 1200 && setSlidesToShow(6)
    window.innerWidth >= 992 && window.innerWidth < 1200 && setSlidesToShow(5)
    window.innerWidth >= 768 && window.innerWidth < 992 && setSlidesToShow(4)
    window.innerWidth >= 576 && window.innerWidth < 768 && setSlidesToShow(3)
    window.innerWidth < 576 && setSlidesToShow(2)
  }


  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  window.addEventListener('load', (e) => {
    quantitySlidesToShow()
  })


  window.addEventListener('resize', (e) => {
    quantitySlidesToShow()

  })

  return (
    <div id='instagram-photos'>
      <Slider {...settings} id='slider'>

        {images.map((img, index) => {
          return (
            <div key={index} >
              <div className='image-container' >

                <a href="https://www.instagram.com/cherryalmohadillas/" target="_blank">
                  <img alt='' src={`${process.env.PUBLIC_URL}/assets/img/${img}`}></img>
                </a>

                <i className="fab fa-instagram"></i>

              </div>
            </div>
          )
        })}
      </Slider>
      <div id='button-ig'>
        <a href="https://www.instagram.com/cherryalmohadillas" target="_blank">
          <button className="btn row no-gutters col-6 col-sm-4 col-md-3 col-lg-2">
            <div className='col-2'>
              <i className="fab fa-instagram"></i>
            </div>
            <div className='col-10'>
              <div>seguinos en</div>
              <div>@cherryalmohadillas</div>
            </div>
          </button>
        </a>

      </div>
    </div>
  )
}

export default InstagramCarousel
