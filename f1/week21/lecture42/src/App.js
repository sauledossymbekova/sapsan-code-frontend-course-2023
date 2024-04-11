import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NewsPage from './pages/NewsPage';
import DetailedNewsPage from './pages/DetailedNewsPage';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<>Hello!!!</>}/>
        <Route path='/news' element={<NewsPage/>}/>
        <Route path='/news/:id' element={<DetailedNewsPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
