// ejemplo de uso de un hooks
import React, { useState } from 'react';

const Ejemplo1 = () => {

    // valor inicial para un contador
    const valorInicial = 0;

    // valor inicial para una persona
    const personaInicial = {
        nombre: 'Martin',
        email: 'martin@imaginagroup.com'
    }

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    function incrementarContador() {
        setContador(contador + 1);
    }

    function actualizarPersona() {
        setPersona(
            {
                nombre: 'pepe',
                email: 'martin@imaginagroup.com'
            }
        )
    }

    return (
        <div>
            <h1>*** Ejemplo de los useState() ***</h1>
            <h2>CONTADOR: {contador} </h2>
            <h2> DATOS DE LA PERSONA: </h2>
            <h3> NOMBRE: {persona.nombre} </h3>
            <h4> EMAIL: {persona.email} </h4>
            <button onClick={incrementarContador}>Incrementar Contador</button>
            <button onClick={actualizarPersona}>Actualizar persona</button>
        </div>
    );
}

export default Ejemplo1;
