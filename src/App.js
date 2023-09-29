import Home from "./views/home/home";
import Navbar from "./shared/components/navbar";
import About from "./views/about/about";
import Reservation from "./views/reservation/reservation";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Reservation />
      <About />
    </div>
  );
}

export default App;
