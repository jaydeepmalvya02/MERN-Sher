
import Header from '../components/Header.jsx'

import Card from '../components/Card.jsx'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
const Home = () => {

  const [data, setData] = useState([]);
  
  
  const getData=async ()=>{
    const response = await axios.get('https://picsum.photos/v2/list')
    setData(response.data)
    // console.log(data)
  }

  useEffect(() => {
    getData()
  }, [])
  



  const users=[
    {
      "name": "Rohit Sharma",
      "city": "Mumbai",
      "age": 28,
      "profession": "Software Engineer",
      "profilePhoto": "https://upload.wikimedia.org/wikipedia/commons/1/1e/Prime_Minister_Of_Bharat_Shri_Narendra_Damodardas_Modi_with_Shri_Rohit_Gurunath_Sharma_%28Cropped%29.jpg"
    },
    {
      "name": "Virat Kohli",
      "city": "Delhi",
      "age": 25,
      "profession": "Graphic Designer",
      "profilePhoto": "https://static-files.cricket-australia.pulselive.com/headshots/288/10917-camedia.png"
    },
    {
      "name": "KL Rahul",
      "city": "Bangalore",
      "age": 30,
      "profession": "Data Analyst",
      "profilePhoto": "https://documents.bcci.tv/resizedimageskirti/1125_compress.png"
    },
    {
      "name": "MS Dhoni",
      "city": "Chennai",
      "age": 27,
      "profession": "Marketing Manager",
      "profilePhoto": "https://documents.iplt20.com/ipl/IPLHeadshot2024/57.png"
    },
    {
      "name": "AB de Villiers",
      "city": "Bengaluru",
      "age": 32,
      "profession": "Cyber Security Expert",
      "profilePhoto": "https://static-files.cricket-australia.pulselive.com/headshots/440/792-camedia.png"
    }
  ]
  return (
    <>
    <Header/>
    <div className='p-10'>
    {users.map((elem,idx)=>{
      return <Card key={idx} username={elem.name} age={elem.age} city={elem.city} image={elem.profilePhoto} prof={elem.profession} />
    })}
    </div>
    
    <div className="p-10 text-center">
      <button 
      // onClick={getData}
      className="bg-teal-500 py-3 px-6 rounded-lg cursor-pointer active:scale-90">Get Data</button>
      <div className="p-5 mt-5 bg-amber-600">
        {data.map((el,idx)=>{
          return <div key={idx} className="bg-amber-200 flex items-center justify-between w-full px-7 py-6 rounded-lg mb-3">
            <img src={el.download_url} alt="" className="h-40" />
            <h1 className=''>{el.author}</h1>
          </div>
        })}
      </div>
    </div>
    </>
  )
}
export default Home