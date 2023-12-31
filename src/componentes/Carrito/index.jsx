import React, { useState } from 'react';
import axios from "axios"
import { useContext } from 'react';
import { dataContext } from '../Context/DataContext';
import { Button, Container, Row, Col, Image} from 'react-bootstrap';
import {initMercadoPago, Wallet} from "@mercadopago/sdk-react"

import "../Carrito/carrito.css"



const Carrito = () => {
    const [preferenceId, setPreferenceId]=useState(null)
    const {carrito, setCarrito}= useContext (dataContext);

    initMercadoPago('TEST-a375e421-6429-4a9f-90d0-7a8b230d572d', {
        locale:"es-AR"
    });

    const total= carrito.reduce ((acc, elemento)=> acc + parseInt(elemento.Precio * elemento.Cantidad), 0)

    const totalCantidadProductos= carrito.reduce ((acc, elemento)=> acc + parseInt(elemento.Cantidad), 0)

    const createPreference = async ()=>{
       
        try{
            const response = await axios.post ("http://localhost:5000/create_preference",
                 {
                description: "Mis compras",
                price: total,
                quantity:1
            });

           
            console.log(response.data);
            window.location= `${response.data.response.body.sandbox_init_point}`
      
        } catch (error){
            console.log(error)
        }
    }

    

const sumarCantidad=({producto})=>{
 producto.Cantidad=producto.Cantidad + 1
}

const restarCantidad=({producto})=>{
   if (producto.Cantidad > 1){
    producto.Cantidad=producto.Cantidad - 1
   
   }
   }

 const vaciarCarrito=()=>{
    setCarrito ([])
 }  
 
 const eliminarProducto=({producto})=>{
const idAEliminar= carrito.find ((elemento)=> elemento._id === producto._id)
const nuevoCarrito= carrito.filter ((elemento)=>{
    return elemento !== idAEliminar
})
    setCarrito (nuevoCarrito)
 }

        return (
<>


           
{carrito.length === 0? 

<h1 className='titulo'>TU CARRITO ESTA VACIO</h1>:
            
           <>
<Container>
            {carrito.map ((producto)=>
    <Row key={producto._id}>
        
<Col>                
<Image src={producto.Foto1.secure_url} rounded thumbnail  className='producto' />
</Col>

<Col>
<h6 className='texto-producto' >{producto.Producto}</h6>
</Col>

<Col>
<h6 className='texto-producto'>${producto.Precio}</h6>
</Col>

<Col>
<h6 className='texto-producto'>{`Cantidad: ${producto.Cantidad}`}</h6>
</Col>

<Col>
<h6 className='texto-producto'>{`Subtotal:$ ${producto.Cantidad * producto.Precio}`}</h6>
</Col>

<Col>
<Container className='texto-producto'>
<Button onClick={()=>restarCantidad({producto})} className="ms-2">-</Button>
<Button onClick={()=>sumarCantidad({producto})} className="ms-2">+</Button>
<Button variant="danger" className="ms-2" onClick={()=> eliminarProducto ({producto})}>Eliminar</Button>

</Container>
</Col>

</Row>

)}

        
    

</Container>



              
        
        
          <Row 
                        style={{ position: 'fixed', bottom: 0}}
                        className="justify-content-center w-100 footer-carrito"
                    >
                        <Col className="py-2">
                            <h4 className='text-footer'>Total en productos: $ {total}</h4>
                        </Col>
                        <Col className="p-0" md={4}>
                            <Button variant="danger"
                                className="m-2"
                                onClick={vaciarCarrito}
                            >
                                Vaciar Carrito
                            </Button>
                           
                            <Button variant="success"
                            onClick={createPreference}
                                
                            >
                                Finalizar Compra
                            </Button>
                            
                            
                            
                         
                        
                          
                          </Col>
                         
                            
                         
                            

                        
                    </Row>
                    
          
    
   
               
              </>
             
}
   
</>
        )
}

export { Carrito }