// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React,{useState} from 'react';
function App() {

  // 1. use state
  const [data,setData]=useState({
    namee:'',
    email:'',
    age:'',
    password:'',
    feedback:'',
  })

  //2. Desturtr
  const {namee,email,age,password,feedback} = data
  // 3.onchange event function
  const onChangeHandler=(a)=>{
    
    setData({...data,[a.target.name]:[a.target.value]})
    // console.log(data)
  }
  // 4.onsubmit function
  const onSubmitHandle=(e)=>{
    e.preventDefault();
    // console.log(data);
    axios.post('https://form-eb71c-default-rtdb.firebaseio.com/form.json',data).then(()=>alert('thank you for your feedBack'))

  }

  return (
    <div className="App">
        <div className='title-part'>
      <h1 id='title'>freeCodeCamp Survey Form</h1>
    <p id='description'>Thank you for taking the time to help us improve the platform</p>
    </div>
      <form id='survey-form' onSubmit={onSubmitHandle}>
      
        <div className='form-group'>
      <label id="name-label">Name</label><br/>
      <input type='text' id='name' placeholder='Enter your name' value={namee} name='namee' onChange={onChangeHandler} required/><br/>
      </div>

      <div className='form-group'>
      <label id="email-label">Email</label><br/> 
        <input type='email' id='email' placeholder='Enter your Email' value={email} name='email' onChange={onChangeHandler}  required/><br/>
        </div>

        <div className='form-group'>
      <label id="number-label" >Age<span>(optional)</span></label><br/>
      <input type='number' id='number' placeholder='Age' value={age} name='age' onChange={onChangeHandler} required/><br/>
      </div>

      <div className='form-group'>
      <label id="password-label" >Password</label><br/>
      <input type='Password' id='password'  placeholder='Password' value={password} name='password' onChange={onChangeHandler} required/><br/>
      </div>

      <div className='form-group'>
      <label>Which option best describes your current role?</label>
      <br/>
      <select id='dropdown'><option>select current role</option>
      <option>Student</option>
      <option>Full Time Job</option>
      <option>Full Time Learner</option>
      <option>Perfer Not To Say</option>
      <option>Other</option>
      </select><br/>
      </div>

      <div className='form-group'>
    <label>Would you recommend freeCodeCamp to a friend?</label><br/>
    <label ><input id="personal-account" type="radio" name="account-type" className="inline" value='Definitely' checked /> Definitely</label><br/>
    <label ><input id="personal-account" type="radio" name="account-type" className="inline" value='Maybe' /> Maybe</label><br/>
    <input id="personal-account" type="radio" name="account-type" className="inline" value='Not sure'/> Not sure<br/>
    </div>

    <div className='form-group'>
<label>What is your favorite feature of freeCodeCamp?</label><br/>
  <select id='dropdown'><option>select an option</option>
      <option>Projects</option>
      <option>Challenges</option>
      <option>Community</option>
      <option>Open Source</option>
      </select><br/>
      </div>

      <div className='form-group'>
<label>What would you like to see improved?<span>(Check all that apply)</span></label><br/>

        <input className="inline" id="checkboxs" type="checkbox" value='Front-end Projects'  />
        <label >Front-end Projects</label>
    <br/>
<label >
        <input className="inline" id="checkboxs" type="checkbox" value='Back-end Projects'   />
    Back-end Projects</label><br/>
    <label >
        <input className="inline" id="checkboxs" type="checkbox" value='Data Visualization'  />
    Data Visualization</label><br/>
    <label >
        <input className="inline" id="checkboxs" type="checkbox" value='Challenges' />
    Challenges</label><br/>
    <label >
        <input className="inline" id="checkboxs" type="checkbox" value='Open Source Community'  />
    Open Source Community</label><br/>
    <label >
        <input className="inline" id="checkboxs" type="checkbox" value='Gitter help rooms' />
    Gitter help rooms</label><br/>
    <label >
        <input className="inline" id="checkboxs" type="checkbox" value='Videos'   />
    Videos</label><br/>
    <label >
        <input className="inline" id="checkboxs" type="checkbox" value='City Meetups' />
    City Meetups</label><br/>
    <label >
        <input className="inline" id="checkboxs" type="checkbox" value='Wiki'  />
    Wiki</label><br/>
    <label >
        <input className="inline" id="checkboxs" type="checkbox" value='Forum' />
    Forum</label><br/>
    <label >
        <input className="inline" id="checkboxs" type="checkbox" value='Additional Courses'/>
    Additional Courses</label><br/>
    </div>

    <div className='form-group'>
    <label>Any comments or suggestions?</label><br/>
    <textarea placeholder='Enter your Comment here... ' rows="3" cols="30" onChange={onChangeHandler} value={feedback} name='feedback' required></textarea><br/>
    {/* <input type='text' required/> */}
    </div>

    
    <input id='button' type='submit' name='Submit'/>
   </form>
    </div>
  );
}

export default App;
