/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import './styles/agile-css.css';
import Hello from '@/components/Hello/Hello';
import GithubCorners from 'react-gh-corners';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App c:red'>
      {/* {process.env.VITE_TEST} */}
      <Hello />
      {/* <div>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p> */}

      <GithubCorners position='right' href='https://github.com/hunghg255/agile-css' />
    </div>
  );
}

export default App;
