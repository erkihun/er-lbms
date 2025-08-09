import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaBook,
  FaUsers,
  FaExchangeAlt,
  FaTags,
  FaUserCog,
  FaChartBar,
} from "react-icons/fa";

const Sidebar = () => {
  const navItems = [
    { path: "/", name: "Dashboard", icon: <FaHome /> },
    { path: "/books", name: "Books", icon: <FaBook /> },
    { path: "/members", name: "Members", icon: <FaUsers /> },
    { path: "/borrows", name: "Borrows", icon: <FaExchangeAlt /> },
    { path: "/genres", name: "Genres", icon: <FaTags /> },
    { path: "/staff", name: "Staff", icon: <FaUserCog /> },
    { path: "/reports", name: "Reports", icon: <FaChartBar /> },
  ];

  return (
    <div className="sidebar w-64 bg-indigo-800 text-white transition-all duration-300">
      <div className="p-4 border-b border-indigo-700">
        <h1 className="text-xl font-bold">Library Manager</h1>
      </div>
      <nav className="mt-5">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? "bg-indigo-700 text-white"
                  : "text-indigo-200 hover:bg-indigo-700 hover:text-white"
              }`
            }
          >
            <span className="mr-3 text-lg">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
