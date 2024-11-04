import { Route, Routes } from 'react-router-dom';

import Login from './pages/SignPages/Login/Login';
import Register from './pages/SignPages/Register/Register';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';

import Dashboard from './_components/Dashboard/Dashboard';
import ToasterComponent from './_components/Toaster/Toaster';

import './App.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <main>
        <Dashboard />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>

      <ToasterComponent />
    </>
  );
}

export default App;
