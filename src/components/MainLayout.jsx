import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const MainLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(signOut());
    toast.success('Logged out successfully!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    navigate('/login'); 
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src="/path/to/logo.png" alt="Logo" className="h-8 mr-4" />
            <span className="text-2xl font-semibold">My App</span>
          </div>
          <div>
            {currentUser ? (
              <div className="flex items-center">
                <span className="text-xl mr-4">Welcome, {currentUser.name}!</span>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition duration-200"
                >
                  Logout
                </button>
              </div>
            ) : (
              <a href="/login" className="text-white text-lg hover:underline">Login</a>
            )}
          </div>
        </div>
      </header>
      <main className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
        <p className="text-gray-700 mb-4">Welcome to your dashboard. Here you can manage your account, view your data, and access other features.</p>
      </main>
      <footer className="bg-gray-800 text-white p-4 mt-6">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
