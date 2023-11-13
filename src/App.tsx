import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginForm from './LoginForm'
// import './App.css'

// const Home = () => {
//   return <h1>Home</h1>
// }

// const About = () => {
//   return <h1>About</h1>
// }

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
