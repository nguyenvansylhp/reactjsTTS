


import React,{useState,useEffect} from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

    const Test = () => {  //// fucntion component

        const [date, setDate] = useState(new Date()); 
        const [date2, setDate2] = useState(new Date()); 
        const [date3, setDate3] = useState(new Date()); 
        console.log('init');

        
       useEffect(() => {
        var timerID = setInterval( () => tick(), 1000 );
        
        return function cleanup() {
            clearInterval(timerID);
            console.log('did');
          };
         
          
        
       });
       
      
         function tick() {
          setDate(new Date());
         }
         




    



    console.log('render');
    return ( <div>
        <p>{date.toLocaleTimeString()}</p>
    </div>
    );
  
 }

export default Test;