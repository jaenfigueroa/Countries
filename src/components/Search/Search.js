import React from 'react'
import './Search.css'

export const Search = () => {
  return (
    <section className='seccion-search'>

      {/* DESKTOP */}
      <section className='search-desktop'>
        <h4>251 resultados</h4>

        <div className='search__resultados'>
          <span>ordenar por:</span>&nbsp;&nbsp;&nbsp;
          
          <div className='boton-opciones'>
            Predeterminado
            <div className='contenedor-opciones'>
              <p>Nombre (A-Z)</p>
              <p>Nombre (Z-A)</p>
              <p>Capital (A-Z)</p>
              <p>Capital (Z-A)</p>
              <p>Continente (A-Z)</p>
              <p>Continente (Z-A)</p>
              <p>Área (Asc)</p>
              <p>Área (Des)</p>
            </div>

          </div>

        </div>
      </section>

      {/* CONTENEDOR TARJETAS */}
      <div className='search__tarjetas-contenedor'>

        <article className='search__tarjeta'>
          <div className='contenedor-clavos'>
            <div>
              <div></div>
              <div></div>
            </div>
            <div>
              <div></div>
              <div></div>
            </div>
          </div>
          <h3 className='tarjeta__nombre'>peru</h3>
          <img className='tarjeta__bandera' src="https://flagcdn.com/pe.svg" alt="bandera de peru" />
          <div className='contenedor-informacion'>
            <p><strong>Capital</strong>: Lima</p>
            <p><strong>Continente</strong>: America</p>
            <p><strong>Area</strong>: 451km2</p>
          </div>
        </article>
        <article className='search__tarjeta'>
          <div className='contenedor-clavos'>
              <div>
                <div></div>
                <div></div>
              </div>
              <div>
                <div></div>
                <div></div>
              </div>
            </div>
          <h3 className='tarjeta__nombre'>españa</h3>
          <img className='tarjeta__bandera' src="https://flagcdn.com/es.svg" alt="bandera de peru" />
          <div className='contenedor-informacion'>
            <p><strong>Capital</strong>: Lima</p>
            <p><strong>Continente</strong>: America</p>
            <p><strong>Area</strong>: 451km2</p>
          </div>
        </article>
        <article className='search__tarjeta'>
        <div className='contenedor-clavos'>
              <div>
                <div></div>
                <div></div>
              </div>
              <div>
                <div></div>
                <div></div>
              </div>
            </div>
          <h3 className='tarjeta__nombre'>europea</h3>
          <img className='tarjeta__bandera' src="https://flagcdn.com/eu.svg" alt="bandera de peru" />
          <div className='contenedor-informacion'>
            <p><strong>Capital</strong>: Lima</p>
            <p><strong>Continente</strong>: America</p>
            <p><strong>Area</strong>: 451km2</p>
          </div>
        </article>
        <article className='search__tarjeta'>
        <div className='contenedor-clavos'>
              <div>
                <div></div>
                <div></div>
              </div>
              <div>
                <div></div>
                <div></div>
              </div>
            </div>
          <h3 className='tarjeta__nombre'>ecuador</h3>
          <img className='tarjeta__bandera' src="https://flagcdn.com/ec.svg" alt="bandera de peru" />
          <div className='contenedor-informacion'>
            <p><strong>Capital</strong>: Lima</p>
            <p><strong>Continente</strong>: America</p>
            <p><strong>Area</strong>: 451km2</p>
          </div>
        </article>
        <article className='search__tarjeta'>
        <div className='contenedor-clavos'>
              <div>
                <div></div>
                <div></div>
              </div>
              <div>
                <div></div>
                <div></div>
              </div>
            </div>
          <h3 className='tarjeta__nombre'>china</h3>
          <img className='tarjeta__bandera' src="https://flagcdn.com/vn.svg" alt="bandera de peru" />
          <div className='contenedor-informacion'>
            <p><strong>Capital</strong>: Lima</p>
            <p><strong>Continente</strong>: America</p>
            <p><strong>Area</strong>: 451km2</p>
          </div>
        </article>
        <article className='search__tarjeta'>
        <div className='contenedor-clavos'>
              <div>
                <div></div>
                <div></div>
              </div>
              <div>
                <div></div>
                <div></div>
              </div>
            </div>
          <h3 className='tarjeta__nombre'>peru</h3>
          <img className='tarjeta__bandera' src="https://flagcdn.com/bl.svg" alt="bandera de peru" />
          <div className='contenedor-informacion'>
            <p><strong>Capital</strong>: Lima</p>
            <p><strong>Continente</strong>: America</p>
            <p><strong>Area</strong>: 451km2</p>
          </div>
        </article>
        <article className='search__tarjeta'>
        <div className='contenedor-clavos'>
              <div>
                <div></div>
                <div></div>
              </div>
              <div>
                <div></div>
                <div></div>
              </div>
            </div>
          <h3 className='tarjeta__nombre'>Peru</h3>
          <img className='tarjeta__bandera' src="https://flagcdn.com/br.svg" alt="bandera de peru" />
          <div className='contenedor-informacion'>
            <p><strong>Capital</strong>: Lima</p>
            <p><strong>Continente</strong>: America</p>
            <p><strong>Area</strong>: 451km2</p>
          </div>
        </article>
        <article className='search__tarjeta'>
        <div className='contenedor-clavos'>
              <div>
                <div></div>
                <div></div>
              </div>
              <div>
                <div></div>
                <div></div>
              </div>
            </div>
          <h3 className='tarjeta__nombre'>peru</h3>
          <img className='tarjeta__bandera' src="https://flagcdn.com/ch.svg" alt="bandera de peru" />
          <div className='contenedor-informacion'>
            <p><strong>Capital</strong>: Lima</p>
            <p><strong>Continente</strong>: America</p>
            <p><strong>Area</strong>: 451km2</p>
          </div>
        </article>

      </div>

    </section>
  )
}
