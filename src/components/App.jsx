// import logo from './logo.svg';
// import './App.css';
import '../styles/styles.scss';
import Home from './pages/home';
import Form from './pages/form';
import CourseGrid from './organisms/courseGrid';
import Course from './pages/course';
import MainMenu from './organisms/mainmenu';
import History from './pages/history';
import Users from './pages/users';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <MainMenu />
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/cursos/:id" component={ Course } />
        <Route path="/cursos" component={ CourseGrid } />
        <Route path="/historial/:valor" component={History} />
        <Route path="/historial" component={History} />
        <Route path="/usuarios" component={Users} />
        <Route path="/formulario" component={ () => (<Form name="Pagina de Contacto" />) } />
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

/*
// Reglas JSX
// 1: Toda etiqueta debe cerrarse
// 2: Los componentes deben devolver UN SOLO elemento padre
// 3: Apoyarse de los Fragment cuando necesito devolver 2 elementos
// 4: <Fragment> hijos </Fragment> o <> hijos </>
// 5: img siempre se cierra por definicion (1)
// 6: class => className
// 7: for => htmlFor
// 8: No se puede utilizar if, else o while

// ### Atomic Design ###
src/Components/Atoms
src/Components/Molecules
src/Components/Organisms
src/Components/Templates
src/Components/Pages

jasonplaceholder.typicode.com, any-api.com (API para practicar)

*/