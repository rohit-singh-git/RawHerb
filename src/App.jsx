import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart'
import LoginSignUp from './pages/LoginSignUp'
import Contact from './pages/Contact'


function App() {

  return (
    <>

      <Navbar />
      <main>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignUp />} />
          <Route path='/contact-us' element={<Contact/>} />
        </Routes>

      </main>
      <Footer />
    </>
  )
}

export default App
