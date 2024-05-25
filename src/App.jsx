import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Footer from "./components/Footer"


const App = () => {
  return (
    <div className="bg-gradient-to-r from-black via-purple-900 to-pink-900">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App