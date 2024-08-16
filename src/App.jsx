// import { useState } from 'react'
import Navbar from './components/navbar'
import SignUp from './pages/signup'
import './styled/reset.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='min-w-full min-h-screen bg-black'>
      {/* <Navbar />  */}
      <SignUp/> 
    </div>
  )
}

export default App
