
import './App.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Nav from './Nav';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
