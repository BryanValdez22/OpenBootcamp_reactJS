import logo from "./logo.svg";
import "./App.css";
// eslint-disable-next-line no-unused-vars
import Greeting from "./components/pure/greeting";
import GreetingF from "./components/pure/greetingF";
import TaskComponent from "./components/pure/task";
import TaskListComponent from "./components/container/task_list";
import Ejemplo1 from "./hooks/ejemplo1";
import Ejemplo2 from "./hooks/ejemplo2";
import MiComponenteConContexto from "./hooks/ejemplo3";
import Ejemplo4 from "./hooks/ejemplo4";
import GreetingStyled from "./components/pure/greetingStyled";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        {/* <Greeting name="Brayan"></Greeting> */}
        {/* <GreetingF name="Brayan"></GreetingF> */}
        {/* ejemplo de uso de HOOKS */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* <Ejemplo4 nombre="Martin">
          <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4> */}
        {/* <GreetingStyled name="Brayan"></GreetingStyled> */}
      {/* </header> */}
        <TaskListComponent></TaskListComponent>
    </div>
  );
}

export default App;
