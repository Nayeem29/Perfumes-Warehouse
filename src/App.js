import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Inventory from "./Pages/Home/Inventory/Inventory";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import ManageInventory from "./Pages/ManageInventory/ManageInventory";
import Footer from "./SharedComponent/Footer";
import Header from "./SharedComponent/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/manageInventory" element={
          <RequireAuth>
            <ManageInventory />
          </RequireAuth>
        }></Route>
        <Route
          path="/inventory/:id" element={
            <RequireAuth>
              <Inventory />
            </RequireAuth>
          }
        ></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
