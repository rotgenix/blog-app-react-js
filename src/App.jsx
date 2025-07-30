import { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'

// pages
import Landing from './pages/Landing/Landing'
import Explore from './pages/Explore/Explore'

// components
import Loader from './components/Loader/Loader'

// redux
import { authenticateUser } from './redux/user/actions'

// css
import './App.css'
import { hasNoEmptyOrNullKeys } from './utils/helper'

function App() {
  const {
    apiState: {
      success,
      message: userApiMessage,
      isError: userApiError
    },
    user
  } = useSelector(state => state.user);

  const dispath = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispath(authenticateUser());
  }, []);

  console.log(user);
  useEffect(() => {
    console.log("37");
    console.log(hasNoEmptyOrNullKeys(user));
    if (!hasNoEmptyOrNullKeys(user)) {
      console.log("Logged in", user);
      return navigate("/", {});
    }
  }, [user]);

  return (
    <div className='app'>
      <Routes>
        <Route path='/' Component={Landing} />
        <Route path='/explore' Component={Explore} />
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
      />

      <Loader />
    </div>
  )
}

export default App
