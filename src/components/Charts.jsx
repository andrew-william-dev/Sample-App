import { Line, Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import "../styles/dashboard.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

export default function Charts() {
  const barData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Visitors",
        data: [120, 190, 300, 250, 220],
        backgroundColor: "#4facfe",
        borderRadius: 6,
      },
    ],
  };

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Sales",
        data: [3000, 5000, 4000, 6000, 7000],
        borderColor: "#9d50bb",
        backgroundColor: "#e4f0ff",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const doughnutData = {
    labels: ["Chrome", "Firefox", "Edge", "Safari"],
    datasets: [
      {
        data: [55, 20, 15, 10],
        backgroundColor: ["#00f2fe", "#43e97b", "#f7971e", "#9d50bb"],
        hoverOffset: 8,
      },
    ],
  };

  return (
    <div className="chart-section">
      <div className="chart-card fade-in">
        <h3>Weekly Visitors</h3>
        <Bar data={barData} />
      </div>

      <div className="chart-card fade-in delay-1">
        <h3>Monthly Sales</h3>
        <Line data={lineData} />
      </div>

      <div className="chart-card fade-in delay-2">
        <h3>Browser Share</h3>
        <Doughnut data={doughnutData} />
      </div>
    </div>
  );
}
