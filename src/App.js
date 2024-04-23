import React, { createContext, useState } from 'react';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Student from './pages/Student'
import { Routes, Route, useNavigate } from 'react-router-dom';
import Adminlogin from './pages/Adminlogin';

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [admin,setadmin]=useState(null);
  const handleLogin = (user) => {
    setUser(user);
    navigate('/student');
  };

  return (
    
    <UserContext.Provider value={{ user, handleLogin, admin, setadmin}}>
      <div className="App">
        <Routes>
      
          <Route path="/adminlogin" element={<Adminlogin />} />
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/student" element={<Student />} /> 
          
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
export const UserContext = createContext();