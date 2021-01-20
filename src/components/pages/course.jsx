// import React, {useState, useEffect} from 'react';
// import axios from 'axios';
import React, {useState} from 'react';
import UseCourse from '../customhooks/usecourse';

const Course = ({match}) => {

    /*
    // const [course, setCourse] = useState({});
    // Cada vez que el componente se renderiza, useEffect se ejecuta
    // El segundo argumento ([]) sirve para que useEffect solo corra una vez
    useEffect(() => {
        axios.get(`http://my-json-server.typicode.com/jcfo1234/json-db/cursos/${match.params.id}`)
        .then(resp => setCourse(resp.data));
    }, []);
    */
   const course = UseCourse(match.params.id);
   const [comment, setComment] = useState("");


    const myComment = (e) => {
        setComment(e.target.value);
    }

    return (
        <div className="ed-grid m-grid-3">
        {
            course ? 
            (
                <>
                    <div className="ed-grid">
                        <div className="l-block">
                            <h1 className="m-cols-3">{course.titulo}</h1>
                            <img className="m-cols-1" src={course.image} alt={course.titulo}/>
                            <p className="m-cols-2">Profesor: {course.professor}</p>
                        </div>
                        <div>
                            <h2>Escribe tu comentario</h2>
                            <input type="text" placeholder="Escribe" onChange={myComment.bind(this)} />
                            <p>{comment}</p>
                        </div>
                    </div>
                </>
            )
            : 
            (
                <h1>El curso no existe</h1>
            )
        }
        </div>
    );
}

export default Course;