import './index.css'

const SuscriptionEmail = () => {

  return (
    <div className='container suscription-section'>
      <div className='row'>
        <div className='suscription-body col-12 col-sm-10 col-md-8 col-lg-6'>
          <h5>SUSCRIBETE PARA RECIBIR NOVEDADES</h5>
          <p>Enterate de nuestras novedades y descuentos</p>

          <form action="" className='row'>
            <input type="email" className='col-6' placeholder='Ingresa tu mail' />
            <button className='btn btn-dark col-4' action='submit' >Suscribirse</button>
          </form>
        </div>

      </div>
    </div>
  )

}

export default SuscriptionEmail
