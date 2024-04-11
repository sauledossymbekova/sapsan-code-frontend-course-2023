import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Layout from "./pages/Layout";
import NewsPage from "./pages/NewsPage";
import DetailedNewsPage from "./pages/DetailedNewsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:newsId" element={<DetailedNewsPage />} />
        </Route>

        <Route path="/event" element={<>Hello World!</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
