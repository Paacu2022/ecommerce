import React from 'react';
import { Flex, Spacer, Box, Avatar, Badge, Text, Button } from '@chakra-ui/react';
import "boxicons";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { dataContext } from '../Context/DataContext';



const Navbar = () => {
  const {carrito, setCarrito}= useContext (dataContext);

  const totalCantidadProductos= carrito.reduce ((acc, elemento)=> acc + parseInt(elemento.Cantidad), 0)


    return(
        <>
        <Flex justifyContent="space-between" bgColor="ActiveBorder">
        <Link to={"/"}>   
        <Box ml='1'>
        <img src='e-commerce copia.gif' width="100px"/>
        </Box></Link> 

  <Box marginTop="10px" marginBottom="10px">
  <img src='1280px-Musixmatch_horizontal_logo_on_white.svg.png'  width="300px"/>
</Box>
 
 <Box marginTop="10px" marginRight="45px">
<Link to={"/Carrito"}> <box-icon name='cart' size="4rem" color="#579ad3" border="circle"></box-icon></Link>
<span className='total-Cantidad-Productos'>{totalCantidadProductos === 0? null: totalCantidadProductos}</span>
  </Box>


     


    </Flex>
        
        </>
    )
}

export { Navbar }