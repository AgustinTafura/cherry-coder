
const ContentBody = () => {
  return (
    <>
      {/* <div className="row fondoDivBody">
        <div className="col-xl-1">
          <h3 className="textoBody"><strong>02              ¿QUÉ SON?</strong></h3>
        </div>

        <div className="col-xl-6 textoHorizontalBody" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/fondolavanda3.png)` }}>
          <h2>¿QUÉ SON?</h2>
          <br />
          <h6 className="textoTamanio">Son almohadillas de tela rellenas con semillas y aceite de lavanda que mantienen la temperatura por tiempo prolongado</h6>
          <h6 className="textoTamanio">Se usan a temperatura ambiente, calientes o frías según la necesidad.</h6>
        </div>
        <img src={`${process.env.PUBLIC_URL}/assets/img/imagen4.jpg`} className="col-4 imagen" />
      </div> */}

      <div id='' className="row no-gutters divCuadrotexto fondoDivGris">
        <div className="col-md-1">
          <h3 className="textoBody"><strong>02              ¿QUÉ SON?</strong></h3>
        </div>

        <div className="col-md-10 textoHorizontalBody row no-gutters" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/fondolavanda1.png)` }}>
          <div className='textSectionContainer col-md-7 col-xl-8'>
            <div>
              <h2>¿QUÉ SON?</h2>
              <br />
              <h6 className="textoTamanio">Son almohadillas de tela rellenas con semillas y aceite de lavanda que mantienen la temperatura por tiempo prolongado</h6>
              <h6 className="textoTamanio">Se usan a temperatura ambiente, calientes o frías según la necesidad.</h6>
            </div>
          </div>
          <img src={`${process.env.PUBLIC_URL}/assets/img/imagen4.jpg`} className="col-sm-10 col-md-5 col-xl-4 mb-sm-5 mb-md-0 imagen" />
        </div>
      </div>
    </>
  )
}

export default ContentBody