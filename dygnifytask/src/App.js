
import Home from "./Home";
import Form from "./Form";
import {Route,Routes,BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/loans" element={<Form/>} />
          <Route path="*" element={<main style={{ padding: "1rem" }}><p>Error ! Nothing Here !</p></main>} />  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
