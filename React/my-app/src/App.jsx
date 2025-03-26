
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Service from './Pages/Service.jsx';
import Contact from './Pages/Contact.jsx';
import About from './Pages/About.jsx';
import Profile from './Pages/Profile.jsx';
import { useContext } from 'react';
import { DataContext } from './context/Usercontext.jsx';

const App = () => {
  const data=useContext(DataContext)
  console.log(data)
  return (
   
    <div className="">
      <h1>This is {data}</h1>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/about' element={<About/>}> </Route>
        <Route path='/profile' element={<Profile/>}> </Route>
      </Routes>

    </div>
  )
}

export default App