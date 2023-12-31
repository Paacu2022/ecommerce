import React from 'react';
import { Box, Flex, Input, Stack } from '@chakra-ui/react'
import { useState } from 'react';
import { useContext } from 'react';
import { dataContext } from '../Context/DataContext';


const Buscador = () => {
  const [search, setSearch]=useState("");
  const { productData, setProductData }=useContext(dataContext)

const filtrar =(e)=>{
setSearch(e.target.value)
console.log(e.target.value);
}

let resultado=[]
if (!search){
  resultado=setProductData
}else{
  resultado= productData.filter((dato)=>
  dato.Producto.toLowerCase().includes(search.toLocaleLowerCase()))
 
}

    return(
        <>
        <Flex justifyContent="center">
        <Stack  margin="25px" width="50vw">
  <Input
    isInvalid
    errorBorderColor='crimson'
    placeholder='¿Que producto deseas buscar?'
    autoFocus
    value={search}
    onChange={filtrar}
  />
</Stack>
</Flex>    
        
        </>
    )
}

export { Buscador }