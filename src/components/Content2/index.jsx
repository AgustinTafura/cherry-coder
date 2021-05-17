
const ContentBody = () => {
  return (
    <div className="row fondoDivBody">
      <div className="col-lg-1">
        <h3 className="textoBody"><strong>02 -              ¿QUÉ SON?</strong></h3>
      </div>
      <div className="col-lg-6 textoHorizontalBody">
        <h3>¿Qué son?</h3>
        <h6>Son almohadillas de tela rellenas con semillas y aceite de lavanda que mantienen la temperatura por tiempo prolongado</h6>
        <h6>Se usan a temperatura ambiente, calientes o frías según la necesidad</h6>

      </div>
      <div className="col-lg-5 col-md-12">
        <img src={`${process.env.PUBLIC_URL}/assets/img/imagen4.jpg`} />
      </div>
    </div>
  )
}

export default ContentBody