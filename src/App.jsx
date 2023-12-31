import React from 'react'
import './App.css'
import { Navbar } from './componentes/Navbar'
import DataProvider from './componentes/Context/DataContext'
import { Cards } from './componentes/Cards'
import {Carrito } from "./componentes/Carrito/index"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Imagenes } from './componentes/Imagenes'
import { Checkout } from './componentes/Checkout'

function App() {


  return (
    <>
    
  <DataProvider> 
    <BrowserRouter>
    <Navbar />

    <Routes>
    <Route path='/' element={<Cards />} />
    <Route path='/Carrito' element={<Carrito />}/>
    <Route path= "/Imagenes/:id" element={<Imagenes />}/>
    <Route path='/Checkout' element={<Checkout />} />
      


    </Routes>
    </BrowserRouter>
   
  </DataProvider>
    </>
  )
}

export default App
