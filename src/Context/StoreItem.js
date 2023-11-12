import React from 'react';
import { Button, Card } from 'react-bootstrap';
import formatCurrency from '../Assets/Store/FormatCurrency'
import { useShoppingCart } from '../Assets/Store/ShoppingCartContext.js';
// import {storeItems} from '../data/storeItems.json'
// import {item} from '../Assets/Store/Store.js'
const StoreItem = ({id , price , name , imgUrl}) => {
  const {getItemsQuantity ,increaseCartQuantity ,decreaseCartQuantity ,removeItemFormCart} = useShoppingCart();
  const quantity = getItemsQuantity(id);
  return (
    <Card className='h-100'>
        <Card.Img 
          // src={require(item.imgUrl)}
          src={imgUrl} 
          variant='top' 
          style={{height: "200px"}}
        />
        <Card.Body >
          <Card.Title className='d-flex justify-content-between align-items-baseline'>
            <span className='fs-2'>{name}</span>
            <span className='text-muted me-2'>{formatCurrency(price)}</span>
          </Card.Title>
          <div className='mt-auto' >
            {
              quantity === 0 ?
              <Button className='w-100' onClick={() => increaseCartQuantity(id)} >
                Add TO Card
              </Button>
              :
              <div className='d-flex align-items-center flex-column' 
              style={{gap:".5rem"}}
              >
                  <div className='d-flex justify-content-center align-items-center' style={{marginBottom:"10px"}}>
                    <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                    <span className="fs-4">{quantity} In Card</span>
                    <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                  </div>
                  <Button variant='danger' size='sm'  onClick={() => removeItemFormCart(id)} >
                    Remove
                  </Button>
              </div>
            }
          </div>
        </Card.Body>
    </Card>
  )
}

export default StoreItem