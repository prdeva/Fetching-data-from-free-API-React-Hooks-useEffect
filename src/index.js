import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';


function Welcome(){
  const[users,setUsers]=useState();
  const[loading,setLoading]=useState(true);
  useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => 
      {
        setUsers(data);
        setLoading(false);
      }
      )
      .catch(error =>{
        console.log("Error");
        setLoading(false);
      });
    });
  if(loading){
    return  <p>Loading...</p>
  }
  return(
    <div>
    <ol>
      {users.map(users=>(
        <li key={users.id} >{users.name},{users.email}, {users.address.zipcode}</li>
      ))}
      </ol>
      </div>
  )
}
ReactDOM.render(<Welcome/>,document.getElementById("root"));