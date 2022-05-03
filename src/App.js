import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./SharedComponent/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
