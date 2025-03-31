import DashBord from "./pages/DashBord";
import { SharePage } from "./pages/SharePage";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return <BrowserRouter >
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/home" element={<DashBord />} />
      <Route path="/share" element={<SharePage />} />
    </Routes>
  </ BrowserRouter > 
}

export default App
