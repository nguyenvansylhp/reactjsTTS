import React, { useState, useEffect } from 'react'
import './Todo.css';
import students from './students'
const Todo = () => {
  
  const phantrang = () =>{
    const aa =[...state]
    aa.map((item, index) => 
     setsosp(index)
    
    )

    const limit = 2 ;
    const tongtrang = Math.ceil((sosp+1)/limit)
    console.log(tongtrang)
  }

  const [tongtrang, settongtrang] = useState();

  const [sosp, setsosp] = useState();

  const [state, setstate] = useState(students);
  const [tranghientai, settranghientai] = useState("1");

  const [btn, setbtn] = useState('tao');
  const [kiemtra, setkiemtra] = useState(false)
  const [name, setname] = useState('');
  const [age, setage] = useState();
  const [pos, setpos] = useState();
  const [phone, setphone] = useState();
  const xoa = (kk) => {
    var hh = state.filter((item, index) => {

      return index != kk;

    }
    )
    setstate(hh);

  }
  const them = () => {
    console.log(kiemtra)
    if(kiemtra){
      xulysave();
    }
    else{
  
    const themm = (item) => {
      const aa =[...state]
      aa.push(item);

      setstate(aa)
      
    }
    themm({
      name: name,
      age: age,
      phone: phone,
    });
    setname("")
    setage("")
    setphone("")

  }
  }



  const sua = (i , index) => {
    setkiemtra(true)
    setpos(index)
    setname(i.name)
    setage(i.age)
    setphone(i.phone)

    
    /// nhet vao trong

    setbtn('cap nhap')
    
   
   }
  
  
   const xulysave = () => {

    const aa = [...state];
     
    aa[pos].name = name;
    aa[pos].age = age;
    aa[pos].phone = phone;
            
    console.log(aa)
    setstate(aa);
  

  
  
  }
  const back = () => {
    setname("")
    setage("")
    setphone("")
    setkiemtra(false)
    setbtn('tao')

    
  }

  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(2);

  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
    console.log(event)
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(state.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = state.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage == number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });
  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

 
 

  const handleLoadMore = () => {
    setitemsPerPage(itemsPerPage + 1);
  };


 
 const render = state => {
   return(
    state.map((item, index)  =>  {
    return  <div className="form">
        <div className="form-group ">
          <p> {index}  </p>
          <label className="label" >Name </label>
          <p> {item.name}  </p>
        </div>
        <br></br>
        <div className="form-group">
          <label className="label" >Age   </label>
          <p> {item.age}  </p>
        </div>
        <br></br>
        <div className="form-group">
          <label className="label" >Phone </label>
          <p> {item.phone}  </p>
        </div>
        <br></br>
        <div className="form-group">
          <button className="xoa" onClick={() => xoa(index)}>Xoa</button>
          <button className="sua" onClick={() => sua(item, index)}>Sua</button>

        </div>


      </div>
      
}

    )
   
    )
 }

  return (

    <div className="container">
      <div className="content left form1">
          {render(currentItems)}
       <div>
       <ul className="pageNumbers">
        <li>
          <button
            onClick={handlePrevbtn}
          >
            Prev
          </button>
        </li>
        {renderPageNumbers}

        <li>
          <button
            onClick={handleNextbtn}
            disabled={currentPage == pages[pages.length - 1] ? true : false}
          >
            Next
          </button>
        </li>
      </ul>
      <button onClick={handleLoadMore} className="loadmore">
        Load More
      </button>
    <ul/>
       </div>
      </div>

      <div className="content student-form">
        <div className="form-group form">
          <label className="label" htmlFor>Name</label>
          <input className="input name" type="text" name="name" onChange={e => setname(e.target.value)} value={name} />
        </div>
        <div className="form-group">
          <label className="label" htmlFor>Age</label>
          <input className="input age" type="text" name="age" onChange={e => setage(e.target.value)} value={age} />
        </div>
        <div className="form-group">
          <label className="label" htmlFor>Phone</label>
          <input className="input phone" type="text" name onChange={e => setphone(e.target.value)} value={phone} />
        </div>
        <div className="form-group">
          <button className="createstudent" type="button" name="button"  onClick={them}>{btn}</button>
          <button className="back" type="button" name="button"  onClick={back}>Back</button>

        </div>
      </div>
    </div>
  )
}


export default Todo;

