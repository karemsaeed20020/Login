import { useState, useEffect } from "react";
import Login1 from "../assets/pexels-padrinan-2882566.jpg";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice";
import axiosInstance from "./axiosInstance";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(signInFailure(null));
  }, [dispatch]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signInStart());

    try {
      const response = await axiosInstance.post("/admin/login", formData);
      dispatch(signInSuccess(response.data));
      toast.success("Login Successful!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          fontSize: '14px', 
          padding: '10px', 
        },
      });
      navigate('/dashboard');
      

    } catch (error) {
      dispatch(signInFailure(error.response?.data?.message || "Login failed"));
      toast.error(error.response?.data?.message || "Login failed", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold">Login</span>
          <span className="font-light text-gray-400 mb-8">
            Welcome back! Please enter your details
          </span>
          <form onSubmit={handleSubmit}>
            <div className="py-4">
              <span className="mb-2 text-md">Email</span>
              <input
                onChange={handleChange}
                type="email"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                name="email"
                id="email"
              />
            </div>
            <div className="py-4">
              <span className="mb-2 text-md">Password</span>
              <input
                onChange={handleChange}
                type="password"
                name="password"
                id="password"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
            >
              {loading ? "Loading..." : "Sign In"}
            </button>
          </form>
          <div className="text-center text-gray-400">
            Don’t have an account?
            <span className="font-bold text-black ml-2">Sign up</span>
          </div>
          {error && <p className="text-red-500 mt-5">{error}</p>}
        </div>
        <div className="relative">
          <img
            src={Login1}
            alt="img"
            className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
