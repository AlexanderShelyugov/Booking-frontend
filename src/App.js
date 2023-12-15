import './App.css';
import { TangramMap } from './Map.js';
import Hud from './Hud.js';
import './tailwind.css';
import './effects.css';


function App() {
  return (
    <div className="w-full h-full">
      <TangramMap />
      {/* <div class="w-full h-full p-2 parallax-effect hologram-effect">
        <Hud />
      </div> */}
    </div>
  );
}

export default App;
