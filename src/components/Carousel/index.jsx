


const Carousel = () => {
    return (
      
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel" data-touch="true">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/assets/img/destacado11.jpg" className="d-block w-100" alt="..." />
            lala
          </div>
          <div className="carousel-item">
            <img src="/assets/img/destacado2.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/assets/img/destacado33.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    )
}

export default Carousel
