// import { useState } from 'react'

import MainLayout from './layout/mainlayout'
import './styled/reset.css'
import '../src/index.css'
import SettingsButton from './components/settings'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='min-w-full min-h-screen bg-black relative'>
        <MainLayout/>
        
    </div>
  )
}

export default App
