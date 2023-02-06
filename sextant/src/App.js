
import React from 'react';
import './App.css';
import './FetchIpAdress';
import FetchIpAdress from './FetchIpAdress';



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


// use this api call to get back IPv4 in JSON format
// $ curl 'https://api.ipify.org?format=json'
// use this API call to get back IPv4/IPv6 in JSON format
// https://api64.ipify.org?format=json
function NavBar(props) {
  return (
  <button className='Nav_Item' value={props.name} >{props.name}</button>
  );
}

function AddCard(props){
  return (
  <div className='Card_Container'>
    {props.children}
  </div>
  );
}




function App() {
  // FetchIpAdress('ip4');
  // on render make call for Ip4 address
  // const [Ip4, setIp4] = useState('cannot display at this time.');
  // useEffect(() => {
  //   fetch('https://api.ipify.org?format=json').then((response) => response.json()).then((data) => setIp4(data.ip));
  
  // }, []);

  // // on render make call for Ip6 address
  // const [Ip6, setIp6] = useState('cannot display at this time.');
  // useEffect(() => {
  //   fetch('https://api64.ipify.org?format=json').then((response) => response.json()).then((data) => setIp6(data.ip));
  
  // }, []);
  

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
        <FetchIpAdress type="Ip4" />
      </AddCard> 
      <AddCard className="Cards">
        <FetchIpAdress type="Ip6"/>
      </AddCard>

    </div>
  );
}


export default App;
