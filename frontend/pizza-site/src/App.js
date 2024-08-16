import { BrowserRouter, Routes,
  Route, } from "react-router-dom";
import Header from "./components/UI/Header/Header";
import './variables.css'
import MainPage from "./components/UI/MainPage/MainPage";
import Menu from "./components/menu/Menu";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<MainPage/> } />
            <Route path="/page" element={<MainPage/> } />
            <Route path="/menu" element={<Menu/> } />
          </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
