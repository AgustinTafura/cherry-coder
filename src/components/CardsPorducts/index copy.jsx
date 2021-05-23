const CardsProducts = () => {

  const products = [
    { pic: 'card1.jpg', name: 'Almohadilla Ocular' },
    { pic: 'card2.jpg', name: 'Almohadilla Menstrual' },
    { pic: 'card3.jpg', name: 'Almohadilla Multiuso' },
    { pic: 'card4.jpg', name: 'Almohadilla Lumbar' },
    { pic: 'card5.jpg', name: 'Almohadilla Cervical' },
    { pic: 'card6.jpg', name: 'Almohadilla para manos' },
  ]

  products.map((product, index) => {
    console.log(product.pic, product.name)
  })

  return (
    <div id='modelos' className="row no-gutters fondoDivGris">
      <div className="col-md-1">
        <h3 className="textoBody"><strong>03               MODELOS</strong></h3>
      </div>
      <div className=" col-md-9 ">
        <div className="row">
          <div className="col-md-3 cardsAjustes">
            <div className="profile-card-2">
              <img src={`${process.env.PUBLIC_URL}/assets/img/card1.jpg`} className="img img-responsive" />
              <div className="profile-name">Almohadilla Ocular</div>
              {/* <div className="profile-username">Almohadilla Ocular</div> */}
              <div className="profile-icons">
                <a href="#">
                  <i className="comprarLink">Comprar</i>
                </a>
              </div>
            </div>
          </div>
          {/* <div className="col-md-1  cardsAjusteEspacio"></div> */}
          <div className="col-md-3 cardsAjustes">
            <div className="profile-card-2">
              <img src={`${process.env.PUBLIC_URL}/assets/img/card2.jpg`} className="img img-responsive" />
              <div className="profile-name">Almohadilla Menstrual</div>
              {/* <div className="profile-username">@johndoesurname</div> */}
              <div className="profile-icons">
                <a href="#">
                  <i className="comprarLink">Comprar</i>
                </a>
              </div>
            </div>
          </div>
          {/* <div className="col-md-1 cardsAjusteEspacio"></div> */}
          <div className="col-md-3 cardsAjustes">
            <div className="profile-card-2">
              <img src={`${process.env.PUBLIC_URL}/assets/img/card3.jpg`} className="img img-responsive" />
              <div className="profile-name">Almohadilla Multiuso</div>
              {/* <div className="profile-username">@johndoesurname</div> */}
              <div className="profile-icons">
                <a href="#">
                  <i className="comprarLink">Comprar</i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-1 textoBody">
      </div>
      <div className="container cardsAjusteInicio">
        <div className="row">
          <div className="col-md-3 cardsAjustes ">
            <div className="profile-card-2">
              <img src={`${process.env.PUBLIC_URL}/assets/img/card4.jpg`} className="img img-responsive" />
              <div className="profile-name">Almohadilla Lumbar</div>
              {/* <div className="profile-username">@johndoesurname</div> */}
              <div className="profile-icons">
                <a href="#">
                  <i className="comprarLink">Comprar</i>
                </a>
              </div>
            </div>
          </div>
          {/* <div className="col-md-1 cardsAjusteEspacio"></div> */}
          <div className="col-md-3 cardsAjustes">
            <div className="profile-card-2">
              <img src={`${process.env.PUBLIC_URL}/assets/img/card5.jpg`} className="img img-responsive" />
              <div className="profile-name profileTexto">Almohadilla Cervical</div>
              {/* <div className="profile-username">@johndoesurname</div> */}
              <div className="profile-icons">
                <a href="#">
                  <i className="comprarLink">Comprar</i>
                </a>
              </div>
            </div>
          </div>
          {/* <div className="col-md-1 cardsAjusteEspacio"></div> */}
          <div className="col-md-3 cardsAjustes">
            <div className="profile-card-2">
              <img src={`${process.env.PUBLIC_URL}/assets/img/card6.jpg`} className="img img-responsive" />
              <div className="profile-name">Almohadilla para manos</div>
              <div className="profile-icons">
                <a href="#">
                  <i className="comprarLink">Comprar</i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardsProducts