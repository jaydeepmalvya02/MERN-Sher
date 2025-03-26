import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [userName, setuserName] = useState('')


  const handleSubmit=(e)=>{
    e.preventDefault()
    alert('Form Submitted')
    console.log(userName);
    setuserName('')
    
  }
  return (
    <div>
      <form 
      onSubmit={(e)=>{handleSubmit(e)}}
      >
        <input 
        value={userName}
        onChange={(e)=>{
          console.log(e.target.value);
          setuserName(e.target.value)
          
          
          
        }}
        className=' bg-slate-300  px-4 py-3 rounded-lg  m-5' 
        type="text" 
        placeholder='Enter Your Name'/>

        <button className='bg-teal-600 m-5 rounded-lg px-4 py-3 mx-auto text-xl font-semibold '>Submit</button>
      </form>
    </div>
  )
}

export default Form
