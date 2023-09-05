import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Card from './Card'
import Carousal from './Carousal'
 



export default function Homes(){
  return (
    
    <div>
      <div> <Navbar/> </div>
      <div><Carousal/></div>
      
     
      
      <div className='m-3'>
 <Card/>
 <Card/>
 <Card/>
      </div>
      
      <div><Footer/></div>

      

    </div>


  )
}