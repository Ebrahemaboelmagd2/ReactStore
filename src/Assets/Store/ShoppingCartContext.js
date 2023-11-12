import { createContext, useContext, useState , useEffect } from "react";
import React from 'react'
import ShoppingCart from '../../Context/ShoppingCart.js'
// import ShoppingCart from "../../Context/ShoppingCart.js";


const ShoppingCartContext = createContext({});
const initialCartitems = localStorage.getItem("Sopping-cart") ? JSON.parse(localStorage.getItem("Sopping-cart")) : [];
 
const ShoppingCartprovider = ({ children }) => {
  const [isOpen , setisOpen] = useState(false)
    const [carItems , setCarItems] = useState(initialCartitems)
    useEffect(() => {
      localStorage.setItem("Sopping-cart" , JSON.stringify(carItems))
    }, [carItems])
    const getItemsQuantity = (id) => {
        return carItems.find((item) => item.id === id)?.quantity || 0;
    }
    const increaseCartQuantity  = (id) => {
      setCarItems((currtItems) => {
        if (currtItems.find((item) => item.id === id) == null ) {
          return [...currtItems , {id , quantity : 1}];
        } else {
          return currtItems.map((item) => {
            if (item.id === id) {
              return {...item , quantity: item.quantity + 1}
            } else {
              return item;
            }
          })
        }
      })
    }
    const decreaseCartQuantity  = (id) => {
      setCarItems((currtItems) => {
        if (currtItems.find((item) => item.id === id) == null ) {
          return currtItems.filter((item) => item.id !== id)
        } else {
          return currtItems.map((item) => {
            if (item.id === id) {
              return {...item , quantity: item.quantity - 1}
            } else {
              return item;
            }
          })
        }
      })
    }
    const removeItemFormCart = (id) => {
      setCarItems((currtItems) => currtItems.filter((item) => item.id !== id ) )
    }
    const openCart = () => {
      setisOpen(true)
    }
    const closeCart = () => {
      setisOpen(false)
    }
    const cartQuantity = carItems.reduce((quantity , item) => 
      item.quantity + quantity
    ,0 )
  return (
    <ShoppingCartContext.Provider
      value={{
        carItems,
        getItemsQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeItemFormCart,
        openCart,
        closeCart,
        cartQuantity,
      }}>
        {children}
        <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  )
}
export default ShoppingCartprovider;
export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
