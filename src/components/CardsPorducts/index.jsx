import './index.css'

const CardsProducts = () => {

  const products = [
    { pic: 'card12.jpg', name: 'Almohadilla Ocular', link: 'https://wa.me/p/3993524057383989/5493544589440'},
    { pic: 'card22.jpg', name: 'Almohadilla Menstrual', link: 'https://wa.me/p/4023325277749140/5493544589440'},
    { pic: 'card32.jpg', name: 'Almohadilla Multiuso', link: 'https://wa.me/p/4380421388685945/5493544589440'},
    { pic: 'card42.jpg', name: 'Almohadilla Lumbar', link: 'https://wa.me/p/4326621067380828/5493544589440'},
    { pic: 'card52.jpg', name: 'Almohadilla Cervical', link: 'https://wa.me/p/3872620969457636/5493544589440'},
    { pic: 'card62.jpg', name: 'Almohadilla para manos', link: 'https://wa.me/p/3795532443903584/5493544589440'},
    { pic: 'card92.jpg', name: 'Almohadilla Kids',link: 'https://wa.me/p/5955299174510467/5493544589440' },
    { pic: 'card102.jpg', name: 'Manta Soft', link: 'https://wa.me/p/4412245158825984/5493544589440'},
    { pic: 'card82.jpg', name: 'Antifaz Polar Soft', link: 'https://wa.me/p/4233041186751928/5493544589440'},
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
                  <img src={`${process.env.PUBLIC_URL}/assets/img/${product.pic}`} className="img img-responsive"  />
                  <div class="boxProduct">
                    <a className="profile-name " href={`${product.link}`} target="_blank">{product.name}</a>
                    <a className="comprarLink" href={`${product.link}`} target="_blank">Comprar</a>
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