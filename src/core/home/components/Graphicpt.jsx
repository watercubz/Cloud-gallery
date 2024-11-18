import GraphicptChart from '../../../charts/components/ChartGraph';
import LineChart from '../../../charts/components/LineChart';
import PieChart from '../../../charts/components/PieChart';

export default function Graphicpt() {
  let name = 'Charlie Howse';
  return (
    <div className="p-6 dark:bg-gray-950 min-h-screen">
      <div className="text-black dark:text-white mt-10 font-bold text-2xl m-2">
        Welcome: {name}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4">
          <GraphicptChart />
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4">
          <GraphicptChart />
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4">
          <GraphicptChart />
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4">
          <GraphicptChart />
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4">
          <LineChart />
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4">
          <LineChart />
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4">
          <LineChart />
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4">
          <LineChart />
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4">
          <PieChart />
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4">
          <PieChart />
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4">
          <PieChart />
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4">
          <PieChart />
        </div>
      </div>
    </div>
  );
}
