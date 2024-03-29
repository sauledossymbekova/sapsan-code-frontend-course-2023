import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Info from "./components/Info";
import Layout from "./components/Layout";
import Services from "./components/Services";
import News from "./components/News";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route path={"/"} element={<Main />} />
          <Route path={"/info"} element={<Info />} />
          <Route path={"/info/:id"} element={<News />} />
        </Route>

        <Route path={'/services'} element={<Services/>}/>
        {/* <Route path={'/'} element={<Main/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
