import { Suspense } from 'react'
import Main from './pages/Main'
import './App.css';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div></div>}>
        <Main />
      </Suspense>
    </div>
  );
}

export default App;
