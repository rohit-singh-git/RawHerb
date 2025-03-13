import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import ProductDetail from './components/ProductDetail'
import Checkout from './pages/Checkout'
import AuthPage from './pages/LoginSignUp'


function App() {

  return (
    <>
      <Navbar />
      <main>

        <Routes>
          <Route path="/RawHerb/product/:id" element={<ProductDetail />} />
          <Route path='/RawHerb/' element={<Home />} />
          <Route path='/RawHerb/cart/' element={<Cart />} />
          <Route path='/RawHerb/login/' element={<AuthPage />} />
          <Route path='/RawHerb/contact-us/' element={<Contact />} />
          <Route path='/RawHerb/checkout' element={<Checkout />} />
        </Routes>

      </main>
      <Footer />
    </>
  )
}

export default App
