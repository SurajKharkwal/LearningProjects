import React, { useRef, useState } from 'react'
import Side from './Components/side/Side'
import Home from './Components/Home'
import Nav from './Components/Nav'
import Aboutus from './Components/Aboutus'
import Anyalatics from './Components/Anyalatics'
import Other from './Components/Other'





const App = () => {

  const [ locate, setLocate ] = useState('');
  const [ loading, setLoading ] = useState(0)

  if (loading) {
    return (
      <div className= {`grid grid-cols-[4vw_96vw] w-full h-full justify-center relative  text-white`}>
        <div>< Side /></div>
        <div className='min-h-[100vh ]'>
          <Nav  loading={setLoading} location={setLocate} className="fixed"/>
          <Home/>
          <Anyalatics locate={locate} />
          <Aboutus/>
          <Other/>
        </div>
      </div>
    )
    
  }
  else {
    return (
      <div className= {`grid grid-cols-[4vw_96vw] w-full h-full justify-center relative  text-white`}>
        <div>< Side /></div>
        <div className='min-h-[100vh ]'>
          <Nav  loading={setLoading} location={setLocate} className="fixed"/>
          <Home/>
          <Anyalatics />  
          <Aboutus/>
          <Other/>
        </div>
      </div>
    )


  }
}

export default App