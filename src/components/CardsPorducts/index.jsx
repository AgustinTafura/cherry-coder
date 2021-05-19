const CardsProducts = () => {
  return (
    <div className="row fondoDivBody">
      <div className="col-lg-1">
        <h3 className="textoBody"><strong>03               MODELOS</strong></h3>
      </div>
      <div class="container cardsAjusteInicio">
        <div class="row">
          <div class="col-md-3 cardsAjustes">
            <div class="profile-card-2">
              <img src={`${process.env.PUBLIC_URL}/assets/img/card1.jpg`} class="img img-responsive" />
              <div class="profile-name">Almohadilla Ocular</div>
              {/* <div class="profile-username">Almohadilla Ocular</div> */}
              <div class="profile-icons">
                <a href="#">
                  <i class="comprarLink">Comprar</i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-1 cardsAjusteEspacio"></div>
          <div class="col-md-3 cardsAjustes">
            <div class="profile-card-2">
              <img src={`${process.env.PUBLIC_URL}/assets/img/card1.jpg`} class="img img-responsive" />
              <div class="profile-name">Almohadilla Ocular</div>
              {/* <div class="profile-username">@johndoesurname</div> */}
              <div class="profile-icons">
                <a href="#">
                  <i class="comprarLink">Comprar</i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-1 cardsAjusteEspacio"></div>
          <div class="col-md-3 cardsAjustes">
            <div class="profile-card-2">
              <img src={`${process.env.PUBLIC_URL}/assets/img/card1.jpg`} class="img img-responsive" />
              <div class="profile-name">Almohadilla Ocular</div>
              {/* <div class="profile-username">@johndoesurname</div> */}
              <div class="profile-icons">
                <a href="#">
                  <i class="comprarLink">Comprar</i>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="col-lg-1 textoBody">
      </div>
      <div class="container cardsAjusteInicio">
        <div class="row">
          <div class="col-md-3 cardsAjustes ">
            <div class="profile-card-2">
              <img src={`${process.env.PUBLIC_URL}/assets/img/card1.jpg`} class="img img-responsive" />
              <div class="profile-name">Almohadilla Ocular</div>
              {/* <div class="profile-username">@johndoesurname</div> */}
              <div class="profile-icons">
                <a href="#">
                  <i class="comprarLink">Comprar</i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-1 cardsAjusteEspacio"></div>
          <div class="col-md-3 cardsAjustes">
            <div class="profile-card-2">
              <img src={`${process.env.PUBLIC_URL}/assets/img/card1.jpg`} class="img img-responsive" />
              <div class="profile-name">Almohadilla Ocular</div>
              {/* <div class="profile-username">@johndoesurname</div> */}
              <div class="profile-icons">
                <a href="#">
                  <i class="comprarLink">Comprar</i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-1 cardsAjusteEspacio"></div>
          <div class="col-md-3 cardsAjustes">
            <div class="profile-card-2">
              <img src={`${process.env.PUBLIC_URL}/assets/img/card1.jpg`} class="img img-responsive" />
              <div class="profile-name">Almohadilla Ocular</div>
              <div class="profile-icons">
                <a href="#">
                  <i class="comprarLink">Comprar</i>
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