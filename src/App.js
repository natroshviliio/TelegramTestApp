import { useEffect } from 'react';
import './App.css';

import "./styles/output.css";

const tg = window.Telegram.WebApp;

function App() {

  const close = () => {
    tg.close();
  }

  useEffect(() => {
    tg.ready();
  }, [])

  return (
    <div className="App">
      <div>Hello</div>
      <div>
        <button className='px-2 py-1 bg-orange-500 text-gray-200' onClick={close}>Close</button>
      </div>
    </div>
  );
}

export default App;
