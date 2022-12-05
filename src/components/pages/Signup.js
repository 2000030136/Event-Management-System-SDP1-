import React from 'react';
import { useState } from 'react';
import '../../App.css';
import { useHistory } from "react-router";
import './Signup.css';
import { Link } from 'react-router-dom';

function Signup() {

const [formdata, setFormdata] = useState({
  Firstname:'',
  Lastname:'',
  mobile:'',
    email: '',
  password: '',
  confirm_password: ''
});

const handleSubmit = (e) => {
  e.preventDefault();

  
  console.log(formdata)

  let res = fetch('http://localhost:4001/Signup', {method: "POST", body: JSON.stringify(formdata) , headers : {
         'Content-Type' : 'application/json'
     }} ).then(response => response.json()).then(respose => console.log(respose))
}

    let history = useHistory();
  return(
  <div className="Register">
<div className="r1"><h5>Register</h5></div>
<form onSubmit={handleSubmit}>
    <div className='r2'>
        <div className='r3'>
                <p>
                    <label>Firstname</label><br/>
                    <input onChange={e => setFormdata({...formdata, username: e.target.value})} type="text" name="firstname" required value={formdata.firstname}/>
                </p>
                </div>
                <div className='r3'>
                <p>
                    <label>Lastname</label><br/>
                    <input onChange={e => setFormdata({...formdata, username: e.target.value})} type="text" name="lastname" required value={formdata.lastname}/>
                </p>
                </div>
                <div className='r3'>
                <p>
                    <label>mobile</label><br/>
                    <input onChange={e => setFormdata({...formdata, mobile: e.target.value})} type="text" name="mobile" required value={formdata.lastname}/>
                </p>
                </div>
                <div className='r3'>
                <p>
                    <label>email</label><br/>
                    <input onChange={e => setFormdata({...formdata, email: e.target.value})} type="email" name="email" required value={formdata.email} />
                </p>
                </div>
                <div className='r3'>
                <p>
                    <label>password</label><br/>
                    <input onChange={e => setFormdata({...formdata, password: e.target.value})} type="password" name="password" required value={formdata.password}/>
                </p>
                </div>
                <div className='r3'>
                <p>
                    <label>confirm password</label><br/>
                    <input onChange={e => setFormdata({...formdata, confirmpassword: e.target.value})} type="password" name="confirm password" required value={formdata.confirmpassword}/>
                </p>
                </div>
                <div className='r3'>
                <p>
                    <button id="sub_btn" type="submit" to='/' >Register</button>
                </p>
                </div>
                </div>
            </form>
            </div>
  );
}
export default Signup;