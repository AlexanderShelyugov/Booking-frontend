import './App.css';
import { TangramMap } from './Map.js';
import Hud from './Hud.js';
import './tailwind.css';
import './map-layout.css';


function App() {
  return (
    <div className="w-full h-full">
      <TangramMap />
      <Hud />
    </div>
  );
}

export default App;
