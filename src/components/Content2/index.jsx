
const ContentBody = () => {
  return (
    <div className="row fondoDivBody">
      <div className="col-lg-1">
        <h3 className="textoBody"><strong>02              ¿QUÉ SON?</strong></h3>
      </div>

      <div className="col-lg-6 textoHorizontalBody" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/fondolavanda3.png)` }}>
        <h2>¿QUÉ SON?</h2>
        <br /> 
        <h6 className="textoTamanio">Son almohadillas de tela rellenas con semillas y aceite de lavanda que mantienen la temperatura por tiempo prolongado</h6>
        <h6 className="textoTamanio">Se usan a temperatura ambiente, calientes o frías según la necesidad.</h6>
      </div>
      <img src={`${process.env.PUBLIC_URL}/assets/img/imagen4.jpg`} className="col-lg-4 imagen" />
    </div>
  )
}

export default ContentBody