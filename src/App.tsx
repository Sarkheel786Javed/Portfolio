
import Layout from './layout/Layout'
import HomePage from './Components/HomePage'
import Skills from './Components/Skills'
import About from './Components/About'
import Contact from './Components/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {

  return (
    <>
      <BrowserRouter basename="/Sarkheel786Javed">
      <Routes>
        <Route  path='/' element={<Layout><HomePage/></Layout>}/>
        <Route  path='/skills' element={<Layout><Skills/></Layout>}/>
        <Route  path='/about-us' element={<Layout><About/></Layout>}/>
        <Route  path='/contact-us' element={<Layout><Contact/></Layout>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
