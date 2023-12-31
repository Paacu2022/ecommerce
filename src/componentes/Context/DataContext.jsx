import React from 'react'
import {useEffect, useState} from "react"
import {createContext } from "react";

export const dataContext= createContext();

const DataProvider = ({children})=>{
    const [productData, setProductData]=useState([]);
    const [carrito, setCarrito]=useState([]);
    const [info, setInfo]=useState([]);
  
    

    useEffect(()=>{
        fetch('https://tienda.paacu.repl.co/productos')
                          .then(res=> res.json())
                          .then(data => {
                          setProductData(data);
                          })
},[]);
    return (
        <dataContext.Provider value={{ productData,setProductData, carrito, setCarrito, info, setInfo }}>
            {children}
        </dataContext.Provider>
    )
}

export default DataProvider