// import logo from './logo.svg';
// import './App.css';
import './styles/styles.scss';
import Curso from './curso';

const cursos = [
  {
    "identificador": 0,
    "title": "React desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/small/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
    "price": "20 USD",
    "profesor": "Beto Quiroga"
  },
  {
    "identificador": 1,
    "title": "HTML desde cero con EDTeam",
    "image": "https://edteam-media.s3.amazonaws.com/courses/small/26557907-0555-427e-a40c-6ff207f98d72.png",
    "price": "50 USD",
    "profesor": "Alvaro Felipe"
  },
  {
    "identificador": 2,
    "title": "Drupal desde cero con EDTeam",
    "image": "https://edteam-media.s3.amazonaws.com/courses/medium/43973b1c-a8e2-4863-9252-2ae41377cab2.png",
    "price": "30 USD",
    "profesor": "Alvaro Felipe"
  },
  {
    "identificador": 3,
    "title": "Go desde cero con EDTeam",
    "image": "https://edteam-media.s3.amazonaws.com/courses/medium/3ec614b5-a9b7-475c-bf8f-8ba643a129eb.png",
    "price": "10 USD",
    "profesor": "Alexys Lozada"
  },
  {
    "identificador": 4
  }
]

const App = () => {
  return (
    <>
      <div className="main-banner img-container l-section" id="main-banner">
        <div className="ed-grid lg-grid-6">
          <div className="lg-cols-4 lg-x-2">
            <img className="main-banner__img" src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" />
            <div className="main-banner__data s-center">
              <p className="t2 s-mb-0">Cursos de EDTeam</p>
              <p> Tu futuro te esta esperando</p>
              <a href="#" className="button">Suscribirse</a>
            </div>
          </div>
        </div>
      </div>
      <div className="ed-grid m-grid-3">
        {
          cursos.map(curso => 
          <Curso
            key={curso.identificador}
            title={curso.title}
            image={curso.image}
            price={curso.price}
            profesor={curso.profesor} 
          />)
        }
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