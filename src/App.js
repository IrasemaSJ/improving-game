import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import './App.css';
import CustomizeScreen from './pages/CustomizeScreen';
import GameScreen from './pages/GameScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/customize' element={<CustomizeScreen/>}/>
        <Route path='/game' element={<GameScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
