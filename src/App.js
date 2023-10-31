import Home from "./views/home/home";
import Navbar from "./shared/components/navbar";
import About from "./views/about/about";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomerServices from "./views/customerServices/customerServices";
import VehicleModels from "./views/vehicleModels/vehicleModels";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <CustomerServices />
      <VehicleModels />
    </div>
  );
}

export default App;
