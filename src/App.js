import logo from './logo.svg';
import './App.css';
// eslint-disable-next-line no-unused-vars
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskComponent from './components/pure/task';
import TaskListComponent from './components/container/task_list';
import Ejemplo1 from './hooks/ejemplo1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* <Greeting name="Brayan"></Greeting> */}
        {/* <GreetingF name="Brayan"></GreetingF> */}

        {/* <TaskListComponent></TaskListComponent> */}

        {/* ejemplo de uso de HOOKS */}
        <Ejemplo1></Ejemplo1>

      </header>
    </div>
  );
}

export default App;
