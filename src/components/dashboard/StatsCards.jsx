import { useEffect, useState } from "react";
import { FaBook, FaUsers, FaExchangeAlt, FaClock } from "react-icons/fa";
import {
  getBooksCount,
  getMembersCount,
  getActiveBorrows,
  getOverdueBorrows,
} from "../../api";

const StatsCards = () => {
  const [stats, setStats] = useState({
    totalBooks: 0,
    totalMembers: 0,
    activeBorrows: 0,
    overdueBooks: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [booksRes, membersRes, borrowsRes, overdueRes] =
          await Promise.all([
            getBooksCount(),
            getMembersCount(),
            getActiveBorrows(),
            getOverdueBorrows(),
          ]);

        setStats({
          totalBooks: booksRes.data.count,
          totalMembers: membersRes.data.count,
          activeBorrows: borrowsRes.data.count,
          overdueBooks: overdueRes.data.count,
        });
      } catch (error) {
        console.error("Error fetching statistics:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="bg-gray-100 rounded-xl shadow-md p-6 animate-pulse"
          >
            <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
            <div className="h-6 bg-gray-300 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    );
  }

  const statsData = [
    {
      title: "Total Books",
      value: stats.totalBooks,
      icon: <FaBook className="text-blue-500" />,
      color: "bg-blue-100",
    },
    {
      title: "Total Members",
      value: stats.totalMembers,
      icon: <FaUsers className="text-green-500" />,
      color: "bg-green-100",
    },
    {
      title: "Active Borrows",
      value: stats.activeBorrows,
      icon: <FaExchangeAlt className="text-yellow-500" />,
      color: "bg-yellow-100",
    },
    {
      title: "Overdue Books",
      value: stats.overdueBooks,
      icon: <FaClock className="text-red-500" />,
      color: "bg-red-100",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {statsData.map((stat, index) => (
        <div
          key={index}
          className={`${stat.color} rounded-xl shadow-md p-6 flex items-center`}
        >
          <div className="mr-4 text-3xl">{stat.icon}</div>
          <div>
            <p className="text-gray-600 text-sm">{stat.title}</p>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
