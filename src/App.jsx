import './App.css';
import Cliente from './components/pages/cliente/Cliente'
import Home from './components/pages/home/Home'
import Vale from './components/pages/vale/Vale'
import About from './components/pages/about/About'
import {BrowserRouter, Routes, Link, Route} from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav variant='tabs'>
        <Nav.Link as={Link} to='/'>Página inicial</Nav.Link>
        <Nav.Link as={Link} to='/clientes'>Cliente</Nav.Link>
        <Nav.Link as={Link} to='/vales'>Vales</Nav.Link>
      </Nav>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/clientes' element={<Cliente/>}></Route>
        <Route path='/vales' element={<Vale/>}></Route>
        <Route path='/sobre' element={<About/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
