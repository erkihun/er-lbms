import {
  FaPlus,
  FaBook,
  FaUserPlus,
  FaExchangeAlt,
  FaHistory,
} from "react-icons/fa";

const QuickActions = () => {
  const actions = [
    {
      icon: <FaBook className="text-white text-lg" />,
      title: "Add New Book",
      color: "bg-indigo-600",
    },
    {
      icon: <FaUserPlus className="text-white text-lg" />,
      title: "Register Member",
      color: "bg-green-600",
    },
    {
      icon: <FaExchangeAlt className="text-white text-lg" />,
      title: "Process Borrow",
      color: "bg-yellow-600",
    },
    {
      icon: <FaExchangeAlt className="text-white text-lg" />,
      title: "Process Return",
      color: "bg-blue-600",
    },
    {
      icon: <FaHistory className="text-white text-lg" />,
      title: "View Overdues",
      color: "bg-red-600",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {actions.map((action, index) => (
          <button
            key={index}
            className={`${action.color} rounded-lg py-4 px-2 flex flex-col items-center justify-center text-white hover:opacity-90 transition-opacity`}
          >
            <div className="mb-2">{action.icon}</div>
            <span className="text-sm font-medium">{action.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
