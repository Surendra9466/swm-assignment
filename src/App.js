import './App.css';
import { Route, Routes } from "react-router-dom"
import Categories from './components/Categories';
import Quotes from './components/Quotes';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/:id" element={<Quotes />} />
      </Routes>
    </div>
  );
}

export default App;
