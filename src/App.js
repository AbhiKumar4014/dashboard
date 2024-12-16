import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home.js';
import Profile from './pages/profile.js';
import Header from './components/Header.js';
import Login from './components/Login.js';
import About from './pages/About.js';

function App() {
  const user = {
    name: 'Abhi Kumar Yallapu',
    age: 19,
    occupation: 'Employee',
    employeeId: '4014',
    imageUrl: 'https://myportal.tecnics.com/UserFiles/EmpPhotos/4014.jpg',
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile user={user} />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
