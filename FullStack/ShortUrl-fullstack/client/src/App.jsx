import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Login from './Components/Login'
import Sigin from './Components/Sigin'
import Home from './Components/Home'
import Relocate from './Components/Relocate';



const App = () => {
  const [full, setFull] = useState("");
  const [short, setShort] = useState("");
  
  const handleLocalStorage = () =>{ 
    if(full !== "" || short !== ""){
          localStorage.setItem(1, short);
          localStorage.setItem(2, full);
    }
  }
  handleLocalStorage()

  return (
    <>
      <Routes>
          <Route path="/" element={<Home full={setFull} fullUrl={full} shortUrl={short} short={setShort} />} />
          <Route path="/sigin" element={<Sigin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path={`/${localStorage.getItem(1)}`} element={ <Relocate url={localStorage.getItem(2)} /> } />
      </Routes>
    
    </>

  )
}

export default App