// import logo from './logo.svg';
// import './App.css';
import './styles/styles.scss';
import Banner from './banner';
import Formulario from './formulario';
import CourseGrid from './courseGrid';
import Course from './course';
import MainMenu from './mainmenu';
import Historial from './historial';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <MainMenu />
      <Switch>
        <Route path="/" exact component={ Banner } />
        <Route path="/cursos/:id" component={ Course } />
        <Route path="/cursos" component={ CourseGrid } />
        <Route path="/historial/:valor" component={Historial} />
        <Route path="/historial" component={Historial} />
        <Route path="/formulario" component={ () => (<Formulario name="Pagina de Contacto" />) } />
        <Route component={() => {
          return (
            <div className="ed-grid">
              <h1>
                Error 404
              </h1>
              <span>Pagina no encontrada</span>
            </div>
          );
        }} />
      </Switch>
    </Router>
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