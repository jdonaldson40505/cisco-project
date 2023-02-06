 import React, {useEffect, useState} from 'react'
 
 
 
 const FetchIpAdress = (props) => {
    const [Ip, setIp] = useState('cannot display your Ip address at this time.');
    var URL = "";
    if(props.type === "Ip4") {
        URL = "https://api.ipify.org?format=json";
    }
    else if(props.type === "Ip6") {
        URL = "https://api64.ipify.org?format=json";
    }

    useEffect(() => {
        fetch(URL)
        .then((response) => response.json())
        .then((data) => setIp(data.ip));
    })

   return (
     <div>
        <h3>{props.type} Address</h3>
        <p>{Ip}</p>
     </div>
   )
 }
 
 export default FetchIpAdress