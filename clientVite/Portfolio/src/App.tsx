
import Login from './Components/Login/Login';
import SignUp from './Components/Login/SignUp.js';
import ForgetPassword from './Components/Login/ForgetPassword.js';
import Layout from './app/layout/Layout.js'
import HomePage from './Components/HomePage/HomePage.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Authorization from './Components/Auth/Auth.js';
import PrivateRoutes from './Components/PrivateRoutes/PrivateRoutes.js';
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='home' element={<HomePage />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='forget-password' element={<ForgetPassword />} />
          <Route path='auth' element={<Authorization />}>
            <Route path='private-route' element={<PrivateRoutes />}>
              {/* dashboard */}
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
