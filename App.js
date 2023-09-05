import React from 'react';
import './App.css';
import Homes from './Homes';
import Loging from './Loging';

import About from './About';



import{

BrowserRouter as Router,
Routes,
Route,

} from "react-router-dom";

import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Contect from './Contect';





function App(){
  const data = true;
  return(
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Homes/>}/>
        
         <Route exact path="/Contect" element={<Contect/>}/>
        

         <Route exact path="/Loging" element={<Loging/>}/>
        
         <Route exact path="/About" element={<About/>}/>
         

      

         
        </Routes>
      </div>
    </Router>
  )
}










export default App;
