import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex items-center justify-center flex-col mt-[200px]">
      <h1>Welcome You want to login</h1>
      <Link to={'/login'}>
        <button className="mt-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500 flex items-center ml-6">
          Login
        </button>
      </Link>
    </div>
  );
};

export default Home;
