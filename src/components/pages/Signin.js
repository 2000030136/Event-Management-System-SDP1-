import React from 'react';
import { useState } from 'react';
import '../../App.css';
import { useHistory } from "react-router";
import './Signin.css';
import { Link } from 'react-router-dom';

function Signin() {

const [formdata, setFormdata] = useState({
  email: '',
  password: ''
});

const handleSubmit = (e) => {
  e.preventDefault();

  
  console.log(formdata)

  let res = fetch('http://localhost:4001/Signin', {method: "POST", body: JSON.stringify(formdata) , headers : {
         'Content-Type' : 'application/json'
     }} ).then(response => response.json()).then(respose => console.log(respose))
}

    let history = useHistory();
  return(
  <div className="Login">
<div className="login1"><h5>Login</h5></div>
<form onSubmit={handleSubmit}>
  <div className='login2'>
    <div className='login3'>
                <p>
                    <label>email</label><br/>
                    <input onChange={e => setFormdata({...formdata, email: e.target.value})} type="email" name="email" required value={formdata.email} />
                </p>
                </div>
                <div className='login3'>
                <p>
                    <label>password</label><br/>
                    <input onChange={e => setFormdata({...formdata, password: e.target.value})} type="password" name="password" required value={formdata.password}/>
                </p>
                </div>
                <div className='login3'>
                <p>
                    <button id="sub_btn" type="submit" to='/'> Signin</button>
                </p>
                </div>
                <div className='login3'>
                <p>
                  If not Registered <a href= 'http://localhost:3000/Signup'>click here</a>
                </p>
                </div>
                </div>
            </form>
            </div>
  );
}
export default Signin;