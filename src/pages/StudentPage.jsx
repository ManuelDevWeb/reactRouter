import React from 'react'
import { useParams } from 'react-router-dom';

//Creando componente
const StudentPage = () => {
    //Parámetro que recibimos por url, debe tener el mismo nombre
    const { username } = useParams();

    return (
        <div>
            <h1>Student: {username}</h1>
        </div>
    );
}

//Exportando componente
export default StudentPage;