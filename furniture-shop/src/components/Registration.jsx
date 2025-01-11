import React, { useState } from 'react'

function Registration() {
  const initialValue={username:"",email:"",password:"",conformPassword:""}
  const[formValues,setFormValues]=useState(initialValue)

  const EventHandle=(e)=>{
    e.preventDefault();
  }
  const handleChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setFormValues({...formValues, [name]:value})
  }
   
  return (
    <div className='container'>
        <form  onSubmit={EventHandle}>
          <label >User Name</label>
            <input type="text"
            placeholder='enter name'
            required 
            value={formValues.username}
            name='username'
            onChange={handleChange}/>
            <span>User name should have 3 to 10 characters</span>


            <label>Enter E-mail</label>
            <input type="email" 
            required
            placeholder='enter email'
            name='email'
            value={formValues.email}
            onChange={handleChange}/>
            <span>Enter a valid e-mail id</span>



            <label > Enter Password</label>
            <input type="password" 
            required
            placeholder='enter password'
            name='password'
            value={formValues.password}
            onChange={handleChange}/>
            <span>password minimum 8 characters </span>

            
            <label >conform password</label>
            <input type="password" 
            required
            placeholder='conform password'
            name='conformpassword'
            value={formValues.conformPasswordpassword}
            onChange={handleChange}/>
            <span className='color-'> password is not matching</span >



            <button type='submit'>Submit</button>



          
        </form>
      
    </div>
  )
}

export default Registration
