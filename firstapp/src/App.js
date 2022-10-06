import './App.css';
import FunctionsComp from './FuncComponents.js';
import ClassComp from './ClassComp.js';
import Statelearn from './Statelearn';
function App() {
  return (
    <div className="App">
      <FunctionsComp txt='Hello' obj={{name:'Shubham', roll:'dev'}}/>        {/* FUnctional Components  with passing props*/}
      <ClassComp txt='This is an Example of class Component'/>
      <hr/>
      <h1>Now We will Learn About States</h1>
      <Statelearn/>
    </div>
  );
}

export default App;
