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
    <div className="container p-2">
      <div className='bg-slate-300 py-3 px-3 text-slate-600 text-center rounded-md'>
        <div className='font-semibold'>My SuperMarket</div>
      </div>
      <div>
        <button className='px-2 py-1 bg-orange-500 text-gray-200' onClick={close}>Close</button>
      </div>
    </div>
  );
}

export default App;
