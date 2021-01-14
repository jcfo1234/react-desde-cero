import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

// ### Componente presentacional o funcional ###
// De-structure the object props into {title, image, price, profesor}
const Curso = ({id, title, image, price, profesor}) => {
    return (
        <article className="card">
          <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <Link to={`/cursos/${id}`}>
              <img src={image} alt={title} />
            </Link>
          </div>
          <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="center">{title}</h3>
            <div className="s-main-center">
              {`Prof.: ${profesor}`}
            </div>
            <div className="s-main-center">
              <a className="button--ghost-alert button--tiny" href="https://ed.team">{`$ ${price} USD`}</a>
            </div>
          </div>
        </article>
    );
}

// Tipo de datos en las propiedades: string, number, ... etc
Curso.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  profesor: PropTypes.string
}

// Declara propiedades por defecto del componente en caso de que no se pasen en el componente Curso
Curso.defaultProps = {
  title: "No se encontro titulo",
  image: "http://www.ciudaddelapunta.com/sitio/fotos/ciudad/miniaturas/006.jpg",
  price: "--",
  profesor: ""
}

export default Curso;