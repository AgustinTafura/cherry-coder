import './index.css'

const CardsProducts = () => {

  const products = [
    { pic: 'card12.jpg', name: 'Almohadilla Ocular' },
    { pic: 'card22.jpg', name: 'Almohadilla Menstrual' },
    { pic: 'card32.jpg', name: 'Almohadilla Multiuso' },
    { pic: 'card42.jpg', name: 'Almohadilla Lumbar' },
    { pic: 'card52.jpg', name: 'Almohadilla Cervical' },
    { pic: 'card62.jpg', name: 'Almohadilla para manos' },
    { pic: 'card92.jpg', name: 'Almohadilla Kids' },
    { pic: 'card72.jpg', name: 'Manta Soft' },
    { pic: 'card82.jpg', name: 'Antifaz Polar Soft' },
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
                  <div class="boxProduct">
                    <div className="profile-name ">{product.name}</div>
                    <i className="comprarLink">Comprar</i>
                  </div>
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