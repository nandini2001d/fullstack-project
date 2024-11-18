import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [name,setName]=useState('');
  const [city , setCity]=useState('');

  const [data,setData]=useState([]);

  useEffect((value)=>{
    getallData();
  },[])

  const formData=new FormData();
  formData.append("name",name);
  formData.append("city",city);

  const submitData= async(e)=>{
      e.preventDefault();

        await fetch('http://localhost:9876/main/post',{
          method:"POST",
          headers: {
            'Accept': 'application/json',
        },
        body: formData
        }).then((value)=>{
           value.json().then((result)=>{
            setName('');
            setCity('');
            console.log(result);
            alert("data insert successfully");
            getallData();
           })
        });
  }

//   useEffect(()=>{
//     getallData();
// },[submitData()])

  const getallData= async()=>{
              await fetch('http://localhost:9876/main/get').then((value)=>{
                value.json().then((result)=>{
                  console.log(result);
                  setData(result);
                })
              })
  }

  return (
    <>
         <form onSubmit={submitData}>
          <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}/><br/><br/>
          <input type="text" name="city" value={city} onChange={(e)=>{setCity(e.target.value)}}/><br/><br/>
          <button type='submit'>Submit</button>
         </form>
         

         <div className='container'>
                <div className='row'>
                      {
                        data.map((value)=>
                        
                          <div className='col-6 offset-3'>
                          <p>{value.name}</p>
                          <p>{value.city}</p>
                   </div>

                        
                        )
                      }
                </div>
         </div>
    </>
  );
}

export default App;
