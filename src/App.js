import Home from "./views/home/home";
import Navbar from "./shared/components/navbar";
import About from "./views/about/about";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
