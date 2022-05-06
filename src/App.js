import { Route, Routes } from "react-router-dom";
import AddProduct from "./Pages/AddProduct/AddProduct";
import Home from "./Pages/Home/Home";
import Inventory from "./Pages/Home/Inventory/Inventory";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import ManageInventory from "./Pages/ManageInventory/ManageInventory";
import MyProducts from "./Pages/MyProducts/MyProducts";
import NotFound from "./Pages/NotFound/NotFound";
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
        <Route
          path="/addproduct" element={
            <RequireAuth>
              <AddProduct />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/myProducts" element={
            <RequireAuth>
              <MyProducts />
            </RequireAuth>
          }
        ></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
