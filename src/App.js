import React, { createContext, useState } from 'react';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Student from './pages/Student'
import { Routes, Route, useNavigate } from 'react-router-dom';
import QueryForm from './components/QueryForm';
 // import Draft from './pages/Draft';
// import Edit from './pages/Edit';
import Admin from './pages/Admin';
import  Adminlogin from './pages/Adminlogin'; 
function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [admin,setadmin]=useState(null);
  const [objectNeeded, setObjectNeeded] = useState({});

  const handleLogin = (user) => {
    setUser(user);
    navigate('/student');
  };
  const handleAdminLogin = (admin) => {
    setadmin(admin);
    navigate('/admin');
  }
  console.log("i m in app.js",objectNeeded)

  return (
    
    <UserContext.Provider value={{ user, handleLogin, objectNeeded,setObjectNeeded}}>
      <div className="App">
        <Routes>
        {/* <Route path="/admin/draft" element={<Draft />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/student" element={<Student value={objectNeeded} />} /> 
        <Route path="/admin" element={<Admin />} />
          <Route path="/QueryForm" element={<QueryForm />} />
          <Route path="/Adminlogin" element={<Adminlogin />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
export const UserContext = createContext();