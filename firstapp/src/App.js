import './App.css';
import FunctionsComp from './FuncComponents.js';
import ClassComp from './ClassComp.js';
function App() {
  return (
    <div className="App">
      <FunctionsComp txt='Hello' obj={{name:'Shubham', roll:'dev'}}/>        {/* FUnctional Components  with passing props*/}
      <ClassComp txt='This is an Example of class Component'/>
    </div>
  );
}

export default App;
