import GraphicptChart from '../../../charts/components/ChartGraph';
import ColumChart from '../../../charts/components/ColumChart';

export default function Graphicpt() {
  return (
    <div className="p-4 space-y-6">
      {/* Bienvenida */}

      {/* Gráficas */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <GraphicptChart />
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <GraphicptChart />
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <GraphicptChart />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <ColumChart />
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <ColumChart />
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <ColumChart />
        </div>
      </div>
    </div>
  );
}
