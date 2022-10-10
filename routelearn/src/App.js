
import './App.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Career from './Pages/Careers';
import Nav from './Nav';
import Error from './Pages/404';
import User from './Pages/User';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/career' element={<Career/>}/>
          <Route path='/*' element={<Error/>}/>
          <Route path='/User/:name' element={<User/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
