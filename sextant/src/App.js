
import React from 'react';
import './App.css';


function DisplayContents(site){
  switch(site) {
    case 'Home':
      break;
      default:
        break;
      
  }
}
function NavBar(props) {
  return (<button className='Nav_Item' value={props.name} onClick={val => DisplayContents(val.target.value)}>{props.name}</button>
  );
}



function App(pages) {
  return (
    <div className='Site_Container'>
      <header className='Banner'>
        <h1 className='Site_Name'>Sextant</h1>
      </header>
      <hr className='Header_Break'></hr>
      <div className='NavBar'>
        <ul className='Nav_Items'>
          <NavBar name='Home'/> 
          <NavBar name="About Us"/>
        </ul>
      </div>
      <div className='BodyContainer' id='BodyContainer'>
      </div>
    </div>
  );
}


export default App;
