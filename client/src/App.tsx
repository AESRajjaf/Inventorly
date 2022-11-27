// App Principal
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/layouts/Home/Home";
import Login from "./pages/auth/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
