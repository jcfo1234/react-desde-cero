// import logo from './logo.svg';
// import './App.css';
import './styles/styles.scss';
import Banner from './banner';
import Formulario from './formulario';

const App = () => {
  return (
    <>
      <Banner />
      <Formulario name="EDTeam"/>
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