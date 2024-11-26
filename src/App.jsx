
import './App.css'
import Favorite from './pages/Favorites';
import Home from './pages/Home';
import { Route ,Routes } from 'react-router-dom';
function App() {

  return  (
    <main className='main-content'>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/favorites" element ={<Favorites/>}/>
      </Routes>
    </main>

  );
}

export default App
