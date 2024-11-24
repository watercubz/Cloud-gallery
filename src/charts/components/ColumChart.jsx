import { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

export default function ColumChart() {
  const chartRef = useRef(null);

  const options = {
    colors: ['#1A56DB', '#FDBA8C'],
    series: [
      {
        name: 'Organic',
        color: '#1A56DB',
        data: [231, 122, 63, 421, 122, 323, 111],
      },
      {
        name: 'Social media',
        color: '#FDBA8C',
        data: [232, 113, 341, 224, 522, 411, 243],
      },
    ],
    chart: {
      type: 'bar',
      height: '100%',
      width: '100%',
      fontFamily: 'Inter, sans-serif',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '70%',
        borderRadius: 8,
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    grid: {
      strokeDashArray: 4,
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      labels: {
        style: {
          fontSize: '12px',
          fontFamily: 'Inter, sans-serif',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: '12px',
          fontFamily: 'Inter, sans-serif',
        },
      },
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '90%',
            },
          },
        },
      },
    ],
  };

  useEffect(() => {
    if (chartRef.current) {
      const chart = new ApexCharts(chartRef.current, options);
      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, []);

  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
      <div className="mb-4">
        <h5 className="text-2xl font-bold text-gray-900 dark:text-white">
          ColumChart
        </h5>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Resumen semanal
        </p>
      </div>
      <div ref={chartRef} className="w-full h-64"></div>
    </div>
  );
}
