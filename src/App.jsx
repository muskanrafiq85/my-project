
import React from 'react'
import './App.css'
import Navbar from './Componets/Navbar'
import Hero from './Componets/Hero'
import Hero2 from './Componets/Hero2'
import Hero3 from './Componets/Hero3'
import Hero4 from './Componets/Hero4'
import TicTocToe from './TicTocToe/TicTocToe'
import RockPaperScissor from './RockPaperScissor/RockPaperScissor'
import Home from './Project1/Home'
import Aboutus from './Project1/Aboutus'
import ImageGallery from './Project1/ImageGallery'
import OurTeam from './Project1/OurTeam'
import ContactUs from './Project1/ContactUs'
import Nav from './Project1/Nav'
import OurServices from './Project1/OurServices'
import Footer from './Project1/Footer'
import Nbar from './Project2/Nbar'
import Home2 from './Project2/Home2'
import Aboutus2 from './Project2/Aboutus2'
import BestServices from './Project2/BestServices'
import OurTeam2 from './Project2/OurTeam2'
import ContactUs2 from './Project2/ContactUs2'
import Footer2 from './Project2/Footer2'
import {BrowserRouter, Routes, Route} from 'react-router-dom'




function App(){


  return (
    // project1
    // <BrowserRouter>
    // <Nav/>
    // <Routes>
    //   <Route path='/' element = {<Home/>}/>
    //   <Route path='/about' element = {<Aboutus/>}/>
    //   <Route path='/services' element = {<OurServices/>}/>
    //   <Route path='/gallery' element = {<ImageGallery/>}/>
    //   <Route path='/team' element = {<OurTeam/>}/>
    //   <Route path='/contact' element = {<ContactUs/>}/>
    //   <Route path='/footer' element = {<Footer/>}/>
    // </Routes>
    // </BrowserRouter>

    // Project2
     <BrowserRouter>
     <Nbar/>
     <Routes>
      <Route path='/' element = {<Home2/>}/>
      <Route path='/about' element = {<Aboutus2/>}/>
      <Route path='/services' element = {<BestServices/>}/>
      <Route path='/team' element = {<OurTeam2/>}/>
      <Route path='/contact' element = {<ContactUs2/>}/>
      <Route path='/footer' element = {<Footer2/>}/>
    </Routes>
    </BrowserRouter>
    
    //portfolio
    // <div>
    //   <Navbar/>
    //   <Hero/> 
    //   <Hero2/> 
    //   <Hero3/> 
    //   <Hero4/>  
    // </div>

    //RockpaperScissor
    // <div>
    //   <RockPaperScissor/>
    // </div>

    //Tic Tac Toe
    // <div>
    //   <TicTocToe/>
    // </div>

    //Project1    
    // <div>
    //    <Nav/>
    //    <Home/>    
    //    <Aboutus/>
    //    <OurServices/>
    //    <ImageGallery/>
    //    <OurTeam/>
      //  <ContactUs/> 
    //    <Footer/>   
    //  </div> 
    // Project2
    // <div>
    //   <Nbar/>
    //   <Home2/>
    //   <Aboutus2/>
    //   <BestServices/>
    //   <OurTeam2/>
    //   <ContactUs2/>
    //   <Footer2/>
    // </div>
    // Portfolio 2
    // <NavBar/>
   
  )
}

export default App
