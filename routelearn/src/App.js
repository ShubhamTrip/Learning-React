import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Career from './Pages/Careers';
import Nav from './Nav';
import Error from './Pages/404';
import User from './Pages/User';
import UseParams from './Pages/UseParams';
import Contact from './Contact';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/About/" element={<About/>}>
            <Route path ='Contact' element={<Contact/>}/>      {/*This is nested Routing*/ }
          </Route>
          <Route path="/Career" element={<Career/>}/>
          <Route path="/*" element={<Error/>}/>
          <Route path="/User/:name" element={<User/>}/>
          <Route path="/Useparams" element={<UseParams/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
