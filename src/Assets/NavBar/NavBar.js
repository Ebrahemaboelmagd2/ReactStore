import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useShoppingCart } from '../Store/ShoppingCartContext';
import { NavLink } from 'react-router-dom';
import '../NavBar/NavBar.css'

function BasicExample() {
  const {openCart ,cartQuantity} = useShoppingCart();
  return (
    <Navbar expand="lg" sticky='top' className="bg-white">
      <Container>
        <Nav.Link to="/"  as={NavLink}>Home</Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/store"  as={NavLink}>Store</Nav.Link>
            <Nav.Link to="/about"  as={NavLink}>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button
          variant='outline-primary'
          className='rounded-circle'
          style={{with:'3rem' , height:"3rem" , position:"relative"}}
          onClick={() => openCart()}>
            Cart
          <div 
          className='rounded-circle bg-danger d-flex justify-content-center align-items-center' 
          style={{
            color:"white" ,
            position:"absolute" ,
            right: "0px" ,
            bottom:"0px",
            width: "18px" ,
            height: "19px", 
            transform:"translate(25% , 25%)"
            }}>
            {cartQuantity}
          </div>
        </Button>
      </Container>
    </Navbar>
  );
}

export default BasicExample;