import { Offcanvas } from 'react-bootstrap'
import React from 'react'
import { useShoppingCart } from '../Assets/Store/ShoppingCartContext.js';
import Cartitem from '../Assets/Store/Cartitem';
import storeItems from '../data/storeItems.json';
import formatCurrency from '../Assets/Store/FormatCurrency.js';

const ShoppingCart = ({isOpen}) => {
    const { carItems ,closeCart } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} placement='end' onHid={closeCart}>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>
                Cart
            </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        {carItems.map((item) => (
            <Cartitem key={item.id} {...item} />
        ))}
        <div className='ms-auto fw-bold fs-5'>
            <label>total</label>
            {formatCurrency(
                carItems.reduce((total , carItems) =>{
                    const item = storeItems.find((i) => i.id === carItems.id);
                    return total + (item?.price || 0) * carItems.quantity;
                } , 0)
            )}
        </div>
        </Offcanvas.Body>
    </Offcanvas>
  )
}

export default ShoppingCart;