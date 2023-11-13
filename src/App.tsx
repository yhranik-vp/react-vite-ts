import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

const Home = () => {
  return <h1>Home</h1>
}

const About = () => {
  return <h1>About</h1>
}

function App() {
  return (
    <>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
