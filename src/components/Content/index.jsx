import './index.css'

const SectionsContainer = () => {
  return (
    <>

      <div id='beneficio' className="row no-gutters divCuadrotexto fondoDivGris">
        <div className="col-md-1">
          <h3 className="textoBody"><strong>04               BENEFICIOS</strong></h3>
        </div>

        <div className="col-md-10 textoHorizontalBody" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/fondolavanda1.png)` }}>
          <div className='textSectionContainer'>
            <h2 class="tituloMobile">BENEFICIOS</h2>
            <br />
            <h3>CALOR</h3>
            <h6 className="textoTamanio">Alivian el dolor cervical, abdominal, lumbar, cólicos, dolor menstrual, descongestionan pecho tomado, ayudan a relajar, y evitar el estress y el insmonio</h6>
            <br />
            <h3>FRIO</h3>
            <h6 className="textoTamanio">Alivian el dolor de cabeza, muela, quemaduras, hematomas, vista cansada, fiebre, quemaduras de insectos y desinflaman</h6>
          </div>
        </div>
      </div>

      <div id='modo-de-uso' className="row no-gutters fondoDivGris divCuadrotexto">
        <div className="col-md-1">
          <h3 className="textoBody"><strong>05               MODO DE USO</strong></h3>
        </div>

        <div className="col-md-10 textoHorizontalBody" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/fondolavanda2.png)` }}>
          <div className='textSectionContainer'>
            <h2 class="tituloMobile">MODO DE USO</h2>
            <br />
            <h3>CALIENTE</h3>
            <h6 className="textoTamanio">Colocar la almohadilla en el microondas de a 30 segundos hasta lograr la temperatura deseada, o en el horno a temperatura baja envuelta en papel de aluminio de 10 a 20 min.</h6>
            <br />
            <h3>FRIO</h3>
            <h6 className="textoTamanio">Colocar la almohadilla en el freezer envuelta en bolsa plástica de 30 a 60 min. (Se puede conservar en el freezer ante una emergencia)</h6>
          </div>
        </div>
      </div>

    </>


  )
}


export default SectionsContainer
