import Navbar from "./Routes/Navbar";
import Allroutes from "./Routes/Allroutes";
import Bestselling from "./components/Bestselling";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Bestselling />
      <Allroutes/>
    </div>
  );
}

export default App;
