/***
 * ejemplo con:
 * -useState()
 * -useRef()
 * -useEffect()
 */

import React, {useState, useRef, useEffect} from "react";

    // vamos a crear dos contadores

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    // referencia con el el useRef() para asociar variable con el DOM HTML

    const miRef = useRef();

    function incrementar1() {
        setContador1(contador1 + 1);
    }

    function incrementar2() {
        setContador2(contador2 + 1);
    }


    /**
     * trabajando con useEffect
     * 
     * ? caso 1: ejecutar SIEMPRE un snniped de codigo
     * Se ejecuta todo aquello que este dentro del useEffect()
     */

    useEffect(() => {
        console.log('CAMBIO EN EL ESTADO COMPONENTE');
        console.log('Mostrando referencia en el DOM:');
        console.log(miRef);
    })

const Ejemplo2 = () => {
    return (
        <div>
            <h1>*** Ejemplo de los useState(), useRef(), useEffect() ***</h1>
            <h2>CONTADOR 1: {contador1} </h2>
            <h2>CONTADOR 2: {contador2} </h2>
            {/* elemento referenciado */}
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>
            <div>
                <button onClick={contador1}>Incrementar Contador 1</button>
                <button onClick={contador2}>Incrementar Contador 2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;