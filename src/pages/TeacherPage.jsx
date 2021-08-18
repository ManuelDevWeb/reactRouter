import React from 'react'
import { useHistory, useLocation } from 'react-router-dom';

//Creando componente
const TeacherPage = () => {
    //URL DE PRUEBA: http://localhost:3000/teacher?skip=0&limit=10

    //Nos permite acceder a la información de la URL actual en la que se encuentran 
    let location = useLocation();
    //Imprime la información de la URL
    //console.log(location);
    const query = new URLSearchParams(location.search);
    //Imprime las operaciones que podemos hacer con el parámetro search
    //console.log(query);

    const skip = parseInt(query.get("skip")) || 0;
    const limit = parseInt(query.get("limit")) || 10;

    //Nos permite acceder a los métodos de navegación para movernos a través de ella de la forma que lo veamos más conveniente.
    let history = useHistory();
    //console.log(history);

    //Función que se ejecuta al dar click en el boton next
    const handleNext = () => {
        console.log("Next");
        //Modificando skip y límiti del parámetro search 
        query.set("skip", skip + 10);
        query.set("limit", limit + 10);
        //Como string -> history.push("/demo");
        //Como object -> history.push({pathname:"/contact", search: "?id=1&type=Tes"})
        //Vamos a la url con su parametro search modificado, el pathname es el mismo de la url actual.
        history.push({ search: query.toString() });
    }

    return (
        <div>
            <h1>Teacher Page</h1>
            <h3>Skip: {skip}</h3>
            <h3>Limit: {limit}</h3>
            <button onClick={handleNext}>Next</button>
        </div>
    );
}

//Exportando componente
export default TeacherPage;