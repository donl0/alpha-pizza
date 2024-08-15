import { BrowserRouter } from "react-router-dom";
import Header from "./components/UI/Header/Header";
import './variables.css'
import MainPage from "./components/UI/MainPage/MainPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header/>
          <MainPage></MainPage>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
