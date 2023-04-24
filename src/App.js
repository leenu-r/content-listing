import { BrowserRouter,Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import ImageGrid from "./components/ImageGrid/ImageGrid";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <HomePage></HomePage> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/romanticcomedy" element={<ImageGrid/>}/>  
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
