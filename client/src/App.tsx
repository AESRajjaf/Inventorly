// App Principal
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/layouts/Home/Home";
import Login from "./pages/auth/Login/Login";
import Stock from "./pages/layouts/Stock/Stock";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*Authentification*/}
        <Route path="/login" element={<Login />} />

        {/*Pages*/}
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Login />} />
        <Route path="/clients" element={<Login />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/providers" element={<Login />} />
        <Route path="/employees" element={<Login />} />
        <Route path="/settings" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
