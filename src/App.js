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
import axios from 'axios';
import { useEffect } from 'react';
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

  useEffect(() => {
    if (objectNeeded) {
      fetchData();
    }
  }, [objectNeeded]);

  const fetchData = async () => {
    try {
      const res = await axios.post('http://localhost:4000/api/v1/status', objectNeeded);
      // const re = await axios.post('http://localhost:4000/api/v1/delete', objectNeeded);
      console.log("objectNeeded has been sent successfully to the backend from app.js");
    } catch (error) {
      console.log(error);
      console.log("Error in app.js while sending objectNeeded to the backend");
    }
  };

  return (
    
    <UserContext.Provider value={{ user, handleLogin, admin, handleAdminLogin, objectNeeded,setObjectNeeded}}>
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