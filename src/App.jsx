import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Morse from "./Morse"
import Home from "./Home"
import Transposition from "./Transposition"

export default function App() {
  return (
  <Router>
    <div className="w-full p-10">
        <Routes>
             <Route path="/"element={<Home/>}/>
             <Route path='/morse' element={<Morse/>}/>
             <Route path='/transposition' element={<Transposition/>}/>
        </Routes>
    </div>
  </Router>      
  )
}