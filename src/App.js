import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Contact from './Pages/contact';
import Health from './Pages/health';
import Home from './Pages/home';
import Table from './Pages/table';
import WaterDashboard from './Pages/waterdashboard';

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/home">
          <b>Smart Water Meter</b>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/waterdashboard">Water Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/health">System Health Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/table">Water Reading Table</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <img
              src="sit.png"
              alt="Singapore Institute Of Technology"
              width={70}
              height={60}
              className="mx-3"
            />
            <img
              src="digi.png"
              alt="Digipen Singapore"
              width={70}
              height={60}
              className="mx-3"
            />
            <img
              src="Team3.jfif"
              alt="Capstone Team 3"
              width={70}
              height={60}
              className="mx-3"
            />
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/waterdashboard" element={<WaterDashboard />} />
        <Route path="/health" element={<Health />} />
        <Route path="/table" element={<Table />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

