import { useEffect } from 'react';
import './App.css';

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
        <button onClick={close}>Close</button>
      </div>
    </div>
  );
}

export default App;
