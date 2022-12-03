/***
 * ejemplo con:
 * -useState()
 * -useRef()
 * -useEffect()
 */

import React, { useState, useEffect, useRef } from "react";

const Ejemplo2 = () => {
  // vamos a crear dos contadores

  const [contador2, setContador2] = useState(0);
  const [contador1, setContador1] = useState(0);

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

//   useEffect(() => {
//     console.log("CAMBIO EN EL ESTADO COMPONENTE");
//     console.log("Mostrando referencia en el DOM:");
//     console.log(miRef);
//   });

    /**
     * ? caso 2: ejecutar solo cuando cambie contador 1
     * cada vez que haya un cambio en el contador 1 se ejecutara lo que diga el useEffect()
     * en caso de que cambie contador 2 no habra ejecucion
     */

    // useEffect(() => {
    //     console.log("CAMBIO EN EL ESTADO COMPONENTE");
    //     console.log("Mostrando referencia en el DOM:");
    //     console.log(miRef);
    // }, [contador1]);

    /**
     * ? caso 2: ejecutar solo cuando cambie contador 1 o el contador 2
     * cada vez que haya un cambio en el contador 1 se ejecutara lo que diga el useEffect()
     * cada vez que haya un cambio en el contador 1 se ejecutara lo que diga el useEffect()
     */

    useEffect(() => {
        console.log("CAMBIO EN EL ESTADO COMPONENTE 1 / COMPONENTE 2");
        console.log("Mostrando referencia en el DOM:");
        console.log(miRef);
    }, [contador1, contador2]);

  return (
    <div>
      <h1>*** Ejemplo de los useState(), useRef(), useEffect() ***</h1>
      <h2>CONTADOR 1: {contador1} </h2>
      <h2>CONTADOR 2: {contador2} </h2>
      {/* elemento referenciado */}
      <h4 ref={miRef}>Ejemplo de elemento referenciado</h4>
      <div>
        <button onClick={incrementar1}>Incrementar Contador 1</button>
        <button onClick={incrementar2}>Incrementar Contador 2</button>
      </div>
    </div>
  );
};

export default Ejemplo2;
