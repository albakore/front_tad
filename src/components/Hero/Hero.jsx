import React from 'react'

export default function Hero() {
  return (
    <div  className="custom estiloTituloBuscador">
  <div  className="jumbotron_bar">
    <div  className="container">
      <div  className="row">
        <div  className="col-sm-8 col-xs-12" id="titulos">
          <div >
            <h2 >Trámites a Distancia (TAD)</h2>
          </div>

          <div >
            <span  className="subtitulo">Encontrá y gestioná tus trámites de la Administración Pública a través de la
              plataforma</span>
          </div>

          <div  className="row">
            <section  className="col-md-10" id="buscador">
              <form  className="buscamos ng-pristine ng-valid ng-touched">
                <div  className="form-wrapper form-group input-group input-group-lg " id="edit-basic">
                  <div  className="form-item form-item-keys form-type-textfield form-group">
                    
                    <div >
                      <div  className="col-sm-11 col-xs-12" style={{padding: '0'}}>
                        <input  autocomplete="off" className="input-lg form-control tt-input ng-pristine ng-valid ng-touched" dir="auto" focus="border:none" id="edit-keys" maxlength="255" name="keys" placeholder="Buscar trámite, organismo, categoría, temas..." size="20" spellcheck="false" type="text" />
                      </div>
                      <div  className="col-sm-1 col-xs-12" style={{padding:'0'}}>
                        <span  className="input-group-btn">
                          <button  className="btn-primary btn form-submit" id="edit-submit" name="op" type="submit">
                            <span  className="glyphicon glyphicon-search"></span>
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
