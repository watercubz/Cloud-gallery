import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// Registra los componentes de Chart.js
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

const DoughnutChart = () => {
  // Datos para el gráfico de dona
  const data = {
    labels: ['Rojo', 'Azul', 'Amarillo', 'Verde'],
    datasets: [
      {
        label: 'Colores',
        data: [300, 50, 100, 150], // Los valores de cada sector de la dona
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)', // Colores para cada sección
        ],
        hoverOffset: 4, // Desplazamiento cuando pasas el ratón sobre la dona
      },
    ],
  };

  // Opciones del gráfico
  const options = {
    responsive: true, // El gráfico es sensible al tamaño de la pantalla
    plugins: {
      legend: {
        position: 'top', // La leyenda estará en la parte superior
      },
      title: {
        display: true, // Título visible
        text: 'Gráfico de Dona', // Título del gráfico
      },
    },
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-[400px] h-[400px]">
      <Doughnut data={data} options={options} /> {/* Renderiza el gráfico */}
    </div>
  );
};

export default DoughnutChart;
