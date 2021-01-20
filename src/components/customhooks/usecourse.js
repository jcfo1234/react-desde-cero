import { useEffect, useState } from 'react';
import axios from 'axios';

const UseCourse = (id) => {
    const [course, setCourse] = useState({});

    useEffect(() => {
        axios.get(`http://my-json-server.typicode.com/jcfo1234/json-db/cursos/${id}`)
        .then(resp => setCourse(resp.data));
    }, []);

    return course
}

export default UseCourse;