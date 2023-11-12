import { Container } from 'react-bootstrap';
import './App.css';
import BasicExample from './Assets/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './Assets/Home/Home';
import Store from './Assets/Store/Store';
import About from './Assets/About/About';
import ShoppingCartprovider from './Assets/Store/ShoppingCartContext.js';

function App() {
  return (
    
    <ShoppingCartprovider>
      <BasicExample />
      <Container className="mb-4">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartprovider>
  );
}

export default App;
