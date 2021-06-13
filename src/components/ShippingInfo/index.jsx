import { useState } from 'react'
import './index.css'
import $ from 'jquery'

const ShippingInfo = () => {

  const [windowWidth, setWindowWidth] = useState()

  window.addEventListener('resize', () => {
    setWindowWidth(window.innerWidth)
  })


  const scrollToSection = (e) => {
    e.preventDefault()
    var elem = e.nativeEvent.target
    window.innerWidth < 992 && $('.collapse').collapse('toggle')
    window.scrollTo({ top: ($(elem.hash)).offset().top - 80, behavior: 'smooth' })
  }

  return (
    <div id='shipping-container' className={`d-flex justify-content-center`}>
      <div className={`${windowWidth > 992 ? 'container' : 'container-fluid'} row`}>
        <div className='col-12 col-md-6 shipping-left d-flex justify-content-center no-gutters'>
          <i className="fas fa-truck"></i>
          <div className='shipping-info'>
            <div>ENVÍOS A TODO EL PAÍS POR CORRERO ARGENTINO</div>
          </div>
        </div>
        <div className='col-12 col-md-6 shipping-right d-flex justify-content-center no-gutters'>
          <i className="fas fa-hands-helping"></i>
          <div className='shipping-info'>
            <div>REALIZAMOS VENTAS MAYORISTAS</div>
            <div> <a onClick={scrollToSection} href="#contacto">Contactanos</a> </div>
          </div>
          <div>

          </div>
        </div>

      </div>
    </div>
  )

}

export default ShippingInfo
