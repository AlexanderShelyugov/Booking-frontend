import './App.css';
import { TangramMap } from './views/map/Map.js';
import Hud from './views/hud/Hud';
import './tailwind.css';
import './map-layout.css';


function App() {
  return (
    <div className="w-screen h-screen">
      <TangramMap />
      <Hud />
    </div>
  );
}

export default App;
