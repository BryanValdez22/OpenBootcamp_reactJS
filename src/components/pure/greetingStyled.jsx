import React, { useState } from "react";

// definiendo estilos en constantes

const loggedStyles = {
  color: "white",
};

const unLoggedStyles = {
  color: "tomato",
  fontWeight: "bold",
};

const GreetingStyled = (props) => {
  const [logged, setLogged] = useState(false);

//   const loggedUsuar = () => (<p>Hola, {props.name} </p>);
//   const login = () => (<p>please Login</p>);

  return (
    <div style={logged ? loggedStyles : unLoggedStyles}>
      {logged ? (<p>Hola, {props.name} </p>) : (<p>please Login</p>)}
      <button
        onClick={() => {
          console.log("boton pulsado");
          setLogged(!logged);
        }}
      >
        {logged ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default GreetingStyled;
