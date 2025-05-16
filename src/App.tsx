import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import "./styles/dashboard.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
