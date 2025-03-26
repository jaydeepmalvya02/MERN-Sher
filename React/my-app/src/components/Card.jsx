import React from 'react'

const Card = (props,idx) => {
  // console.log(props)
  return (
    <div className='mr-7 bg-slate-300 inline-block p-6 text-center rounded-lg' >
      <img src={props.image} alt="" className="ml-8 h-32 w-32 rounded-full mb-3" />
      <h1 className="text-2xl font-semibold mb-4">{props.username}</h1>
      <h2 className="">{props.city},{props.age}</h2>
      <button className=" bg-teal-400 cursor-pointer rounded-lg items-center px-4 py-2 mt-5 active:scale-90 ">Add Friend</button>
      <h4 className="text-sky-800">{props.prof}</h4>
    </div>
  )
}

export default Card