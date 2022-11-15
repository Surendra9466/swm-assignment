import './App.scss';
import { Route, Routes } from "react-router-dom"
import './styles/categories.scss';
import Categories from './components/Categories';
import Quotes from './components/Quotes';
import HeaderFooter from './components/HeaderFooter';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <HeaderFooter text="Made with &hearts;"/>
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
