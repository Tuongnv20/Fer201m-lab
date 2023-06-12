
import './App.css';
import Film from './component/Films';
import Navigation from './component/Navigation';
import { Routes, Route } from "react-router-dom";
import Detail from "./component/Detail";




function App() {
  return (
    <div className='App'>
      <div className='App-header'>
        <Navigation />

      </div>
      <div className="App-content">
        <Routes>

          <Route path='/' element={<Film />}>
          </Route>
          <Route path='/detail/:id' element={<Detail />}></Route>

        </Routes>

      </div>

    </div>

  );
}

export default App;
