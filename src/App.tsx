import './App.css';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventPage2025 from './pages/EventPage2025';
import EventPage2026 from './pages/EventPage2026';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/2025' element={<EventPage2025 />} />
        <Route path='/2026' element={<EventPage2026 />} />
        {/* Redirect any other routes to the home page */}
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </Router>
  );
}

export default App;
