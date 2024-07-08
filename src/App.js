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

  if(!tg.initDataUnsafe.is_bot) {
    return (
      <div className="container p-2">
        <div className='bg-slate-300 py-3 px-3 text-slate-600 text-center rounded-md'>
          <div className='font-semibold'>Welcome: {tg.initDataUnsafe?.first_name || 'username'}</div>
        </div>
        <div>
          <button className='px-2 py-1 bg-orange-500 text-gray-200' onClick={close}>Close</button>
        </div>
      </div>
    );
  }
}

export default App;
