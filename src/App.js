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
      <div className='bg-slate-500 py-3 px-3 text-slate-200 text-center font-semibold'>
        My Online Store
      </div>
      <div>
        <button className='px-2 py-1 bg-orange-500 text-gray-200' onClick={close}>Close</button>
      </div>
    </div>
  );
}

export default App;
