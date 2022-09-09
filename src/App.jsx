import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home"
import Login from "./pages/login"
import Signup from "./pages/signup"
import Dashboard from "./pages/dashboard"
import Completed from "./pages/completed"
import Activities from "./pages/activities"
import Starred from "./pages/starred"
import Archives from "./pages/archives"
import TrashBin from "./pages/trashbin"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/starred" element={<Starred />} />
        <Route path="/archives" element={<Archives />} />
        <Route path="/trashbin" element={<TrashBin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
