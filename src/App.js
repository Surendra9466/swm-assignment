import './App.scss';
import { Route, Routes, Link } from "react-router-dom"
import './styles/categories.scss';
import Categories from './components/Categories';
import Quotes from './components/Quotes';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <header className='header'>
      <Link to="/"><Header text="Made with &hearts;"/></Link>
      </header>
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/:id" element={<Quotes />} />
      </Routes>
      <footer className='footer'>
      </footer>
    </div>
  );
}

export default App;
