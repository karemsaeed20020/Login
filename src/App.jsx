// import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

//import MainLayout from "./components/MainLayout";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";

const App = () => {
  // const { currentUser } = useSelector((state) => state.user);

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light" 
        style={{
          fontSize: '14px', 
          padding: '10px',  
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              
                <Dashboard />
            
            </ProtectedRoute>
          } 
        />
      </Routes>
    </div>
  );
};

export default App;
