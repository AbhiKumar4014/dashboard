import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home.js';
import Header from './components/Header.js';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
