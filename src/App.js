import { useEffect, useState } from 'react';
import './App.css';

import "./styles/output.css";

const tg = window.Telegram.WebApp;

function App() {
  const [data, setData] = useState({
    firstName: '',
    lastName: ''
  });

  const handleChangeData = e => {
    const _data = {...data};
    _data[e.target.name] = e.target.value;
    setData(_data);
  }

  const close = () => {
    tg.close();
  }

  const sendData = () => {
    // tg.sendData(data)
    tg.MainButton.setParams({
      text: 'Hello'
    });
    if(tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
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
        <div className=''>
          <div className='w-full mt-2'><input className='border w-full p-2 rounded-md border-slate-300 ring-0 outline-none' type="text" name='firstName' value={data.firstName} onChange={handleChangeData} placeholder='First Name'/></div>
          <div className='w-full mt-2'><input className='border w-full p-2 rounded-md border-slate-300 ring-0 outline-none' type="text" name='lastName' value={data.lastName} onChange={handleChangeData} placeholder='Last Name'/></div>
          <div className='w-full mt-2'><button className='bg-slate-600 hover:bg-slate-500 active:bg-slate-700 text-gray-200 w-full rounded-md p-2 ring-0 outline-none' onClick={sendData}>Send</button></div>
        </div>
      </div>
    </div>
  );
}

export default App;
