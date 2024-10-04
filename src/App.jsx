import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Collection from './modules/collection/Collection'
import Header from'./component/header/Header'
import ContactUs from'./modules/contactus/ContactUs'
import Provider from './component/provider/Provider'


function App() {

  return (
    <>
    <BrowserRouter>
    <Provider>
      <Header></Header>
        <Routes>
           <Route path='/' element={<Collection/>}/>
           <Route path='/ContactUs' element={<ContactUs/>}/>
        </Routes>
    </Provider>
    </BrowserRouter>
  </>
  )
}

export default App
