import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home"
import Login from "./pages/login"
import Signup from "./pages/signup"
import Workarea from "./pages/workarea"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/workarea" element={<Workarea/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
