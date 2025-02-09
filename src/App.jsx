import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Tickets } from './pages/Tickets'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
function App() {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [selectedTime, setSelectedTime] = useState("");

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home setSelectedMovie={setSelectedMovie} setSelectedTime={setSelectedTime} selectedMovie={selectedMovie} selectedTime={selectedTime}/>}></Route>
        <Route path="/tickets" element={<Tickets selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} selectedTime={selectedTime} setSelectedTime={setSelectedTime}/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App
