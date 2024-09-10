import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    // Handle logout
    const handleLogout = () => {
        // Clear any auth tokens or session data
        localStorage.removeItem('authToken'); // Example for token storage
        navigate('/login'); // Redirect to the login page
    };

    return (
        <div className="flex">
            <aside className="w-64 bg-gray-800 text-white h-screen p-4">
                <div className="mb-4 mt-4">
                    <span className="ml-3 font-bold text-lg">Dashboard</span>
                </div>
                <ul>
                    <li className="mb-2">
                        <a href="#" className="flex items-center px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">
                            <i className="ri-home-2-line mr-3"></i> Dashboard
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-600 rounded">
                            <i className="ri-instance-line mr-3"></i> Orders
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-600 rounded">
                            <i className="ri-flashlight-line mr-3"></i> Services
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-600 rounded">
                            <i className="ri-settings-2-line mr-3"></i> Settings
                        </a>
                    </li>
                </ul>
                <button 
                    className="mt-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500 flex items-center ml-6" 
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </aside>

            <main className="flex-1 bg-gray-100 p-6">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                    <button className="text-gray-500 hover:text-gray-700">
                        <i className="ri-menu-line text-2xl"></i>
                    </button>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-white p-4 shadow rounded">
                        <h2 className="text-xl font-semibold">Total Orders</h2>
                        <p className="text-3xl font-bold">256</p>
                    </div>
                    <div className="bg-white p-4 shadow rounded">
                        <h2 className="text-xl font-semibold">Active Services</h2>
                        <p className="text-3xl font-bold">16</p>
                    </div>
                    <div className="bg-white p-4 shadow rounded">
                        <h2 className="text-xl font-semibold">New Users</h2>
                        <p className="text-3xl font-bold">32</p>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white p-6 shadow rounded h-[74vh]">
                    <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
                    <ul className="space-y-3">
                        <li className="flex justify-between">
                            <p className="text-gray-600">User John placed an order.</p>
                            <span className="text-gray-500">2 hours ago</span>
                        </li>
                        <li className="flex justify-between">
                            <p className="text-gray-600">New service added by admin.</p>
                            <span className="text-gray-500">3 hours ago</span>
                        </li>
                        <li className="flex justify-between">
                            <p className="text-gray-600">User Jane updated profile.</p>
                            <span className="text-gray-500">1 day ago</span>
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
