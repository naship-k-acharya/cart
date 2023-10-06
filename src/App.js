import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import Navbar from './compound/Navbar';


export default function Datafetch(){
  const [data, setData]=useState([]);
  const [loading, setLoading]=useState(true);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response=> response.json())
    .then(data=>{
      setData(data);
      setLoading(false);
    })
    .catch(error=>{
      console.error('error fetch',error);
      setLoading(false);
    })
  }, []);
  return(

   
    <div>
       <Navbar/>
       <div className="block-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="data-block">
          {data.map(item => (
            <li key={item.id} className="data-list" >{item.title}</li>
          ))}
        </ul>
      )}
    </div>
    </div>
  );
}
