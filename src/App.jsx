import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contect'
import Project from './pages/Project'
function App() {
  return (
    <div >
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/project' element={<Project />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
