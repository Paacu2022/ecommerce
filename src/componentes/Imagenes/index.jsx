import React from 'react';

import { useContext } from 'react';
import { dataContext } from '../Context/DataContext';
import { Container, Row, Col, Image, Button} from 'react-bootstrap';
import Swal from 'sweetalert2'


import "../Imagenes/imagenes.css"


const Imagenes = () => {
    const { productData, carrito, setCarrito, info, setInfo }=useContext(dataContext)
 console.log(info._id);
    

 const expandirImagen=(imagen)=>{
    Swal.fire({
        imageUrl: imagen,
        imageHeight: 550,
        imageAlt: "Producto"
      });
 }

const productosComprados=  ()=>{
    const productoRepetido =  carrito.find((item)=> item._id === info._id)

  if (productoRepetido){
   setCarrito(carrito.map ((item)=> (item._id === info._id? { ...info, Cantidad: productoRepetido.Cantidad + 1}: item)))
}else{

  setCarrito ([...carrito, info])
}}



    return(
        <>
        <Container className='contenedor1' fluid >
 <Container fluid >
    <Row>
    <Col xs={9} md={3} lg={2.5} >
    <Image src={info.Foto1.secure_url} className='Foto1 img-thumbnail img-fluid'  onClick={()=> expandirImagen (info.Foto1.secure_url)} rounded/>
    
        <p className='descripcionimagen'>Click en la imagen para agrandar</p>
    
    </Col>

    <Col xs={3} md={3} lg={1} className='fotos'>
    <Row >
    <Image src={info.Foto2.secure_url} onClick={()=> expandirImagen (info.Foto2.secure_url)} className='Foto2 img-fluid'/>
    </Row>

    <Row >
    <Image src={info.Foto3.secure_url} onClick={()=> expandirImagen (info.Foto3.secure_url)} className='Foto3 img-fluid' />
    </Row>

    <Row>
    <Image src={info.Foto4.secure_url} onClick={()=> expandirImagen (info.Foto4.secure_url)} className='Foto4 img-fluid'/>
    </Row>
    
    
    </Col>
 

    <Col className='conte2'>
        <Row>
    <h1 className='titulo-producto'>{info.Producto}</h1>
        </Row>


<Row>
    <h2 className='titulo-producto'>{info.Descripcion}</h2>
</Row>




<Row className='renglon'>

<Button variant='outline-warning'   className='boton-compra2'>
     <h2>{info.Precio}</h2>
      </Button>
      
</Row>

<Row className='renglon'>

<Button variant='outline-info'   className='boton-compra'>
      <box-icon name='cart-add' onClick={ productosComprados} ></box-icon>
      </Button>
      
</Row>
    </Col>



    </Row>

    
</Container>





</Container>
        </>
    )
}

export { Imagenes }