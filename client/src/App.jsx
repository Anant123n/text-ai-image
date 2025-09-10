import { useState } from 'react'
import {Routes,Route} from  'react-router-dom'
import Home from './pages/Home.jsx'
import BuyCredit from './pages/BuyCredit.jsx'
import Result from './pages/Result.jsx' 
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='  min-h-screen bg-gradient-to-b from-gray-500 to-violet-900'>

    <Navbar/>

    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/buy' element={<BuyCredit/>}/>
      <Route path='/result' element={<Result/>}/>

    </Routes>

    <Footer/>
    

   </div>
  )
}

export default App
