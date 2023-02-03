
import React from 'react';
import './App.css';

// Todo: create seperate pages to navigate to.
// This would be for switching pages if necessary
/* 
function DisplayContents(site){
  switch(site) {
    case 'Home':
      break;
      default:
        break;
      
  }
}


onClick={val => DisplayContents(val.target.value)}
*/
function NavBar(props) {
  return (<button className='Nav_Item' value={props.name} >{props.name}</button>
  );
}

function AddCard(props){
  return (
  <div className='Card_Container'>
    {props.children};
  </div>
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
      <AddCard className="Cards">
        <p>placeholder for testing remove when ready to populate feild</p>  
      </AddCard> 

    </div>
  );
}


export default App;
