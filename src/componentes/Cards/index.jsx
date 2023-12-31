import React from 'react';
import { useContext, useEffect } from 'react';
import { dataContext } from '../Context/DataContext';
import { Card, Flex, CardBody, CardFooter, Button, Image, Stack, Heading, Text, Divider, ButtonGroup, Input } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { useState } from 'react';



const Cards = () => {
   const { productData,setProductData, carrito, setCarrito, info, setInfo }=useContext(dataContext)
   const [search, setSearch]=useState("");

const productosComprados =(producto)=>{
const productoRepetido = carrito.find((item)=> item._id === producto._id)

if (productoRepetido){
  setCarrito(carrito.map ((item)=> (item._id === producto._id? { ...producto, Cantidad: productoRepetido.Cantidad + 1}: item)))
}else{

  setCarrito ([...carrito, producto])
}
}

const detalle =  (producto)=>{

  setInfo(producto)
 
}

/*function detalle (lala){
  useEffect(function (lala){
    setPrueba(lala)
    console.log(prueba);
  },[])}*/


const filtrar =(e)=>{
  setSearch(e.target.value)
  }

let resultado=[]
if (!search){
  resultado=productData
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



  <Flex margin="20px" wrap="wrap" justifyContent="center" gap="20px" >
    {resultado.map ((producto)=>(
        <Card maxW='sm' border="red 1px solid" width="25vw" shadow="25px solid" key={producto._id} >
  <CardBody display="flex" justifyContent="center">
    
    <Image  height="200px" 
      src={producto.Foto1.secure_url}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{producto.Producto}</Heading>
      <Text >
       {producto.Descripcion}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
       ${producto.Precio}
      </Text>

     <Link to={`/Imagenes/${producto._id}`} onClick={()=>detalle(producto)} prueba={producto.Foto1.secure_url}>Más info...</Link>
        
    
    </Stack>
  
  </CardBody>
  <Divider />
  <CardFooter display="flex" justifyContent="center">
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue' onClick={()=> productosComprados(producto)}>
      <box-icon name='cart-add'></box-icon>
      </Button>
      
    </ButtonGroup>
  </CardFooter>
</Card>))}
</Flex>

        </>
    )
}

export { Cards }