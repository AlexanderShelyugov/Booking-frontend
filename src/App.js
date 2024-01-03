import { TangramMap } from 'views/map/Map'
import Hud from 'views/hud/Hud'

import 'styles/App.css'
import PaperFraming from 'views/framing_paper/PaperFraming';

function App() {
  return (
    <div className="w-screen h-screen">
      <PaperFraming>
        <TangramMap />
      </PaperFraming>
      <Hud />
    </div>
  );
}

export default App;
