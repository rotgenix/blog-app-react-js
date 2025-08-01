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
import CreateBlog from './pages/CreateBlog/CreateBlog'

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
    const token = localStorage.getItem("token");
    console.log("token:", token);
    console.log(!token)
    if (!token) {
      console.log("37");
      console.log(hasNoEmptyOrNullKeys(user));
      if (!hasNoEmptyOrNullKeys(user)) {
        console.log("Logged in", user);
        return navigate("/", {});
      }
    }
    dispath(authenticateUser());
  }, []);

  useEffect(() => {
    if (!hasNoEmptyOrNullKeys(user) && userApiError && !success) {
      return navigate("/", {});
    }
  }, [user, userApiError, success]);

  return (
    <div className='app'>
      <Routes>
        <Route path='/' Component={Landing} />
        <Route path='/explore' Component={Explore} />
        <Route path='/create' Component={CreateBlog} />
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
