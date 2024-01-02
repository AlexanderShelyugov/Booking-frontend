import { TangramMap } from 'views/map/Map'
import Hud from 'views/hud/Hud'

import 'styles/App.css'

function App() {
  return (
    <div className="w-screen h-screen">
      <TangramMap />
      <Hud />
    </div>
  );
}

export default App;
