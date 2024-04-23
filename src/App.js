import React, { createContext, useState } from 'react';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
// import Admin from './pages/Admin'; 
import { Routes, Route, useNavigate } from 'react-router-dom';
// import Draft from './pages/Draft';
// import Edit from './pages/Edit';
function App() {
  const [user, setUser] = useState(null);
  // const navigate = useNavigate();

  const handleLogin = (user) => {
    setUser(user);
    // navigate('/admin');
  };

  return (
    
    <UserContext.Provider value={{ user, handleLogin }}>
      <div className="App">
        <Routes>
        {/* <Route path="/admin/draft" element={<Draft />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/admin" element={<Admin />} /> 
          <Route path="/admin/edit" element={<Edit/>} /> */}
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
export const UserContext = createContext();