import React, { useState, useEffect } from 'react'
import './dubao.css'
import './dubaott'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import './style.js'


import ReactDOM from 'react-dom';
const Dubao = () => {
     
    const [cityname, setCityname] = useState("");
    const [weatherstate, setweatherstate] = useState("");
    const [weathericon, setweathericon] = useState("");
    const [nhietdo, setnhietdo] = useState("");
    const [mtmoc, setmtmoc] = useState("");
    const [mtlan, setmtlan] = useState("");
    const [doam, setdoam] = useState("");
    const [gio, setgio] = useState("");
    const [state, setState] = useState({});
                const search = (e) =>{
                   setCityname(e.target.value)                
                }              
    const appid = '80f103a8c85cea69b2c5669757c54f57'

    useEffect(() => {            
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
       

        var requestOptions = {
            method: 'GET',
           
            redirect: 'follow'
        };

        fetch(`https://swapi.dev/api/people/${cityname}`, requestOptions)
            .then(response => response.json())
            .then(result => setState(result))
        
            .catch(error => console.log('error', error));
    },[cityname])
 
    return (<div className="container">
    
         <div className="input">
             <input type="text"  value={cityname}         onChange={search}/>
             
         </div>
         <div className="cityname">
             <p>{state.name}</p>
             <p id="thoigian" className="thoigian"></p>
         </div>
         <div className="weatherstate">
             <p>{state.height}</p> 
             <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" className="weathericon"/>
             <h1 className="nhietdo">{state.mass}</h1>
         </div>

         <div className="borderbot">

         </div>
         <div className="thongso">
             <div className="thongso1">
                <p>
                    MT Moc
                </p>
                <p id="mtmoc">
                    1    
                </p>
                <p>
                    độ ẩm
                </p>
                <p id="doam">
                    1
                </p>
             </div>
             <div className="thongso2">
             <p>
                    MT lan
                </p>
                <p id="mtlan">
                    1    
                </p>
                <p>
                    gio
                </p>
                <p id="gio">
                    1
                </p>
                 </div>   
         </div>

     </div>
     

 )

}
export default Dubao;            




// / rsfp + tab --> html5
// import React, { useState }  from 'react';
//  import './dubao.css'
// import PropTypes from 'prop-types';

// // dubao.propTypes = {
    
// // };
// function getrandom(){
//     const colorlist = ['black', 'green','red','blue'];
//     const randomlist = Math.trunc(Math.random()*4);
//     return colorlist[randomlist];
// }


// function Dubao(props) {
   
//     const [color, setColor] = useState();
      
    
   

//     function handclick() {
//         const newcolor = getrandom();   
//         setColor(newcolor);
//         console.log(newcolor);
       

//     }

//     return (<div>
//             <div className="tet1"  style={{ backgroundColor : color }} onClick={handclick} >
                
//                 <p>Con meo</p>
//             </div>
//         </div>
//     );
// }

// export default Dubao;






// import React, { useEffect, useState }  from 'react';
//  import './dubao.css'
// import PropTypes from 'prop-types';

// dubao.propTypes = {
    
// };



// function Dubao(props) {
   
//     const [fullName, setFullName] = useState({name: 'name', familyName: 'family'});
//     const [title,setTitle] = useState('useEffect() in Hooks');

//     //useEffect
//     useEffect(() => {
//         setFullName({name:'TrungHC',familyName: 'HCT'});
//     });

//     return(
//         <div>
//             <h1>Title: {title}</h1>
//             <h3>Name: {fullName.name}</h3>
//             <h3>Family Name: {fullName.familyName}</h3>
//         </div>
//     );
// }

// export default Dubao;









// import React, { useEffect, useState }  from 'react';
//  import './dubao.css'
// import PropTypes from 'prop-types';

// dubao.propTypes = {

// function Dubao(props) {
   
//     const [characterChoiceNumbers, setCharacterChoiceNumbers] = useState([1,2,3,4,5])
//     const [chosenChoiceNumber, setChosenChoiceNumber] = useState(1)
  
//     const handleChoiceChange = (newNumber) => {
//       setChosenChoiceNumber(newNumber)
//     }
//     return(
//       <div>
//         <select onChange={(e)=> handleChoiceChange(e.target.value)}>
//           {
//             characterChoiceNumbers.map(choice => <option key={choice}>{choice}</option>)
//           }
//         </select>
//         <div >{chosenChoiceNumber}</div>
//       </div>
//     )
// }

// export default Dubao;






// import React, { useEffect, useState } from 'react'


//  const Dubao = () => {

//     const [state, setState] = useState({})
 

//     const [choosen , setChoosen] = useState(1);


//     useEffect(() => {
//         var myHeaders = new Headers();
//         myHeaders.append("Content-Type", "application/json");
       

//         var requestOptions = {
//             method: 'GET',
           
//             redirect: 'follow'
//         };

//         fetch(`https://swapi.dev/api/people/${choosen}`, requestOptions)
//             .then(response => response.json())
//             .then(result => setState(result))
        
//             .catch(error => console.log('error', error));
//     },[choosen])


  
   
//     return <div>
//         <p>{state.name}</p>
//         <p>{state.gender}</p>
//         <select name="" id="" value ={choosen} onChange={(e)=> setChoosen(e.target.value)}>
//             <option value="1">1</option>
//             <option value="2">2</option>
//             <option value="3">3</option>
//         </select>
//     </div>
// }
// console.log(a)
// var a=5;
// export default Dubao;


// import React, { useEffect } from "react";
// import { FormProvider, useForm } from "react-hook-form";

// const Dubao = ({ onSubmit, errors, ...rest }) => {
//   const methods = useForm(); // useForm tương tự như useFormik
//   const { handleSubmit, setError } = methods;

//   useEffect(() => {
//     if (errors) {
//       Object.entries(errors).forEach(([name, message]) => {
//         setError(name, {
//           types: "mannual",
//           message,
//         });
//       });
//     }
//   }, [errors]);

//   return (
//     <FormProvider {...methods}> // chúng ta cần FormProvider này để sử dụng context
//       <form onSubmit={handleSubmit(onSubmit)} {...rest} />
//     </FormProvider>
//   );
// };

// export default Dubao;