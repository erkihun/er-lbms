import StatsCards from "../components/dashboard/StatsCards";
import QuickActions from "../components/dashboard/QuickActions";
import RecentBorrows from "../components/borrows/RecentBorrows";
import PopularGenres from "../components/genres/PopularGenres";

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h1>
        <p className="text-gray-600">
          Welcome back! Here's what's happening today.
        </p>
      </div>

      <StatsCards />
      <QuickActions />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <RecentBorrows />
        <PopularGenres />
      </div>
    </div>
  );
};

export default Dashboard;
