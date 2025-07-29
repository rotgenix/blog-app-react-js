import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'

import './App.css'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path='/' Component={Home} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      // transition={Bounce}
      />
    </div>
  )
}

export default App
