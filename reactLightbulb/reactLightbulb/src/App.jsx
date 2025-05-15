import { useState } from 'react'
import './App.css'
import LightbulbSvg from "./components/Lightbulb.jsx";

function App() {
  const [light, setLight] = useState(0);
  let color;

  if (light === 0) {
      color = 'black';
  } else {
      color = 'yellow';
  }

  return (
    <>
      <h1>React Lightbulb</h1>
      <LightbulbSvg fillColor={color} />
      <div className="card">
        <button onClick={() => setLight(
            light === 0 ? 1 : 0)
        }>
          Light is {light % 2 === 0 ? 'Off' : 'On'}
        </button>
      </div>
    </>
  )
}

/*light % 2 === 0 ? 1 : 0)*/

export default App
