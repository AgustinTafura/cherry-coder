import { useState } from 'react'
import './index.css'

const ShippingInfo = () => {

  const [windowWidth, setWindowWidth] = useState()

  window.addEventListener('resize', () => {
    setWindowWidth(window.innerWidth)
  })

  return (
    <div id='shipping-container' className={`d-flex justify-content-center`}>
      <div className={`${windowWidth > 992 ? 'container' : 'container-fluid'} row`}>
        <div className='col-12 col-md-6 shipping-left d-flex justify-content-center no-gutters'>
          <i className="fas fa-truck"></i>
          <div className='shipping-info'>
            <div>ENVÍOS A TODO EL PAÍS</div>
            <div>Entre x/x días hábiles /</div>
            <div>Retiro en ……. de Lunes a Viernes</div>
          </div>
        </div>
        <div className='col-12 col-md-6 shipping-right d-flex justify-content-center no-gutters'>
          <i className="fas fa-hands-helping"></i>
          <div className='shipping-info'>
            <div>REALIZAMOS VENTAS MAYORISTAS</div>
            <div>Contactactanos para más info a:</div>
          </div>
          <div>

          </div>
        </div>

      </div>
    </div>
  )

}

export default ShippingInfo
