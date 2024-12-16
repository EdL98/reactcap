import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Contact from './Pages/contact';
import Health from './Pages/health';
import Home from './Pages/home';
import Table from './Pages/table';
import WaterDashboard from './Pages/waterdashboard';
import NotFound from './Pages/notfound';
import './lang.js';
import LanguageSelector from './langsel.js';

import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  return (
    <BrowserRouter>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          {/* Left Section: Brand and Navigation Links */}
          <div className="d-flex align-items-center">
            {/* Navbar Brand */}
            <Link className="navbar-brand me-3" to="/home">
              <b>{t("smw")}</b>
            </Link>

            {/* Navigation Links */}
            <ul className="navbar-nav d-flex flex-row align-items-center mb-0">
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/home">{t("homeh")}</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/waterdashboard">{t("waterdash")}</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/health">{t("health")}</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/table">{t("table")}</Link>
              </li>
              <li className="nav-item mx-1">
                <Link className="nav-link" to="/contact">{t("contact")}</Link>
              </li>
            </ul>
          </div>

          {/* Right Section: Images and Language Selector */}
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center gap-1 ">
              <img
                src="sit.png"
                alt="Singapore Institute Of Technology"
                width={50}
                height={50}
                className='mx-2'
                
              />
              <img
                src="digi.png"
                alt="Digipen Singapore"
                width={50}
                height={50}
                 className='me-2'
                
              />
              <img
                src="Team3.jfif"
                alt="Capstone Team 3"
                width={50}
                height={50}
              />
            </div>
            <LanguageSelector />
          </div>
        </div>
      </nav>

      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/waterdashboard" element={<WaterDashboard />} />
        <Route path="/health" element={<Health />} />
        <Route path="/table" element={<Table />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
