import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home'; 
import Dashboard from './components/Dashboard/Dashboard';
import Settings from './components/Settings/Settings';
import Interview from './components/Interview/Interview';
import Calendar from './components/Calendar/Calendar';
// import Calendar_Page from './components/Calendar_Page/Calendar_Page';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/interview" element={<Interview />} />
      <Route path="/calendar" element={<Calendar />} />
      {/* <Route path="/calendar_page" element={<Calendar_Page />} /> */}
    </Routes>
  </Router>
);

export default AppRoutes;
