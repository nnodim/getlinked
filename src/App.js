import './App.css';
import Landing from './pages/Landing';
import Contact from './pages/Contact';
import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  return (
    <div className='bg-color-1 min-h-screen'>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
