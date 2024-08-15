import { BrowserRouter } from "react-router-dom";
import Header from "./components/UI/Header/Header";
import './variables.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
