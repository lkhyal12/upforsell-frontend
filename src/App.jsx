import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { Toaster } from "react-hot-toast";
import SignUp from "./pages/SignUp";
import VerifyEmailPage from "./pages/VerifyEmailPage";

const App = () => {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <Routes>
        <Route path="/" element={<h1 className="text-3xl">Home Page</h1>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/verify-email" element={<VerifyEmailPage />} />
      </Routes>
    </div>
  );
};

export default App;
