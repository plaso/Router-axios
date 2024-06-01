import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PhoneDetail from './pages/PhoneDetail/PhoneDetail'
import Posts from './pages/Posts/Posts'
import NotFound from './pages/NotFound/NotFound'
import PostDetail from './pages/PostDetail/PostDetail'

function App() {
  return (
    <div>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/phones/:id" element={<PhoneDetail />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
