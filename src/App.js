// import logo from './logo.svg';
// import './App.css';
import './styles/styles.scss';
import Curso from './curso';

const App = () => {
  return (
    <>
      <div className="main-banner img-container l-section" id="main-banner">
        <div className="ed-grid lg-grid-6">
          <div className="lg-cols-4 lg-x-2">
            <img className="main-banner__img" src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" />
            <div className="main-banner__data s-center">
              <p className="t2 s-mb-0">Título del banner</p>
              <p> Subtítulo del banner</p>
              <a href="#" className="button">Botón del banner</a>
            </div>
          </div>
        </div>
      </div>
      <div className="ed-grid m-grid-3">
        <Curso />
        <Curso />
        <Curso />
        <Curso />
        <Curso />
        <Curso />
        <Curso />
        <Curso />
        <Curso />
      </div>
  </>
  );
}

export default App;

// Reglas JSX
// 1: Toda etiqueta debe cerrarse
// 2: Los componentes deben devolver UN SOLO elemento padre
// 3: Apoyarse de los Fragment cuando necesito devolver 2 elementos
// 4: <Fragment> hijos </Fragment> o <> hijos </>
// 5: img siempre se cierra por definicion (1)
// 6: class => className
// 7: for => htmlFor
// 8: No se puede utilizar if, else o while