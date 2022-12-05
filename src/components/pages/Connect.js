import React from 'react';
import { useState } from 'react';
import '../../App.css';
import './Connect.css';
import { useHistory } from "react-router";
import './Signin.css';


function Connect() {

const [formdata, setFormdata] = useState({
    Firstname:'',
    Lastname:'',
    phone:'',
    email:'',
    event:'',
    occasion:'',
    date:'',
    venue:'',
    city:'',
    state:'',
    guest:'',
    budget:'',
    message:''
});

const handleSubmit = (e) => {
  e.preventDefault();

  
  console.log(formdata)

  let res = fetch('http://localhost:4001/Connect', {method: "POST", body: JSON.stringify(formdata) , headers : {
         'Content-Type' : 'application/json'
     }} ).then(response => response.json()).then(respose => console.log(respose))
}

    let history = useHistory();
  return(
      <div className='full'>
    <div className='top'></div>
    {/* <img  src='/images/connect.jpg'  / */}
     <div><h1 className='connect'>Are you ready to plan your event?</h1> 
   <p1 className='paragraph'>
   If you are ready to plan your event or if you just simply want to ask a question or two, please submit <br/>
   the form below and connect with us now – we look forward to assisting you with all of your event<br/>
   planning needs!
   </p1>
    </div>

 

<form onSubmit={handleSubmit}>
<div className='Connect1'>
  <div className='Connect3'>
                <p>
                    <label>Details</label><br/>
                    <input onChange={e => setFormdata({...formdata, Firstname: e.target.value})} type="text" name="Firstname" required value={formdata.Firstname} placeholder='Firstname' />
                </p>
                <p>
                    <input onChange={e => setFormdata({...formdata, Lastname: e.target.value})} type="text" name="Lastname" required value={formdata.Lastname} placeholder='Lastname' />
                </p>
                </div>
                 <div className='Connect3'>
                 <p>
                    <label>phone</label><br/>
                    <input onChange={e => setFormdata({...formdata, phone: e.target.value})} type="text" name="text" required value={formdata.phone} />
                </p>
                </div>
                <div className='Connect3'>
                <p>
                    <label>email</label><br/>
                    <input onChange={e => setFormdata({...formdata, email: e.target.value})} type="email" name="email" required value={formdata.email} />
                </p>
                </div>
                <div className='Connect3'>
                <p>
                    <label>Event type</label><br/>
                    <input onChange={e => setFormdata({...formdata, event: e.target.value})} type="text" name="event" required value={formdata.event} placeholder='event'/>
                </p>
                </div>
                <div className='Connect3'>
                <p>
                    <label>Occasion</label><br/>
                    <input onChange={e => setFormdata({...formdata, occasion: e.target.value})} type="text" name="occasion" required value={formdata.occasion} placeholder='occasion'/>
                </p>
                </div>
                <div className='Connect3'>
                <p>
                    <label>date</label><br/>
                    <input onChange={e => setFormdata({...formdata, date: e.target.value})} type="date" name="date" required value={formdata.date}/>
                </p>
                </div>
                <div className='Connect3'>
                <p>
                    <label>venue</label><br/>
                    <input onChange={e => setFormdata({...formdata, venue: e.target.value})} type="text" name="venue" required value={formdata.venue} placeholder='venue'/>
                </p>
                </div>
                <div className='Connect3'>
                <p>
                    <label>city</label><br/>
                    <input onChange={e => setFormdata({...formdata, city: e.target.value})} type="text" name="city" required value={formdata.city} placeholder='city'/>
                </p>
                </div>
                <div className='Connect3'>
                <p>
                    <label>state</label><br/>
                    <input onChange={e => setFormdata({...formdata, state: e.target.value})} type="text" name="state" required value={formdata.state} placeholder='state'/>
                </p>
                </div>
                <div className='Connect3'>
                <p>
                    <label>guest</label><br/>
                    <input onChange={e => setFormdata({...formdata, guest: e.target.value})} type="text" name="guest" required value={formdata.guest} placeholder='guest'/>
                </p>
                </div>
                <div className='Connect3'>
                <p>
                    <label>budget</label><br/>
                    <input onChange={e => setFormdata({...formdata, budget: e.target.value})} type="text" name="budget" required value={formdata.budget} placeholder='budget'/>
                </p>
                </div>
                <div className='Connect3'>
                <p>
                    <label>message</label><br/>
                    <input onChange={e => setFormdata({...formdata, message: e.target.value})} type="text" name="message" required value={formdata.message} placeholder='message'/>
                </p>
                </div>
                    

                <div className='Connect3'>
                <p>
                    <button id="sub_btn" type="submit" to='/Verified'> Submit</button>
                </p>
                </div>
                </div>
                
            </form>
            
            </div>
  );
}
export default Connect;