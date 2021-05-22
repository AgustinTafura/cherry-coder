import './index.css'

const CardsProducts = () => {

  const products = [
    { pic: 'card1.jpg', name: 'Almohadilla Ocular' },
    { pic: 'card2.jpg', name: 'Almohadilla Menstrual' },
    { pic: 'card3.jpg', name: 'Almohadilla Multiuso' },
    { pic: 'card4.jpg', name: 'Almohadilla Lumbar' },
    { pic: 'card5.jpg', name: 'Almohadilla Cervical' },
    { pic: 'card6.jpg', name: 'Almohadilla Oficina para manos' },
  ]



  return (
    <div id='modelos' className="row no-gutters fondoDivGris">
      <div className="col-md-1">
        <h3 className="textoBody"><strong>03               MODELOS</strong></h3>
      </div>
      <div className=" col-md-10 row">

        {
          products.map((product, index) => {
            return (
              <div className="col-sm-6 col-md-4 cardProduct">
                <div className="profile-card-2">
                  <img src={`${process.env.PUBLIC_URL}/assets/img/${product.pic}`} className="img img-responsive" />
                  <div className="profile-name">{product.name}</div>
                  <i className="comprarLink">Comprar</i>
                  {/* <div className="profile-icons">
                    <a href="#">
                    </a>
                  </div> */}
                </div>
              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default CardsProducts