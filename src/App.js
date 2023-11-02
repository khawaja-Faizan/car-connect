import Home from "./views/home/home";
import Navbar from "./shared/components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomerServices from "./views/customerServices/customerServices";
import VehicleModels from "./views/vehicleModels/vehicleModels";
import Subscription from "./views/subscription/subscription";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <CustomerServices />
      <Subscription />
      <VehicleModels />
    </div>
  );
}

export default App;
