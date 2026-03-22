//library imports
import { useNavigate } from "react-router-dom";

// components imports
import LoginForm from "../../components/Forms/LoginForm/LoginForm";
// services imports
import { loginFunction } from "../../services/auth.service.js";
//config imports
import { API_BASE_URL } from "../../config/api";

export default function AdminPanel() {
  const navigate = useNavigate();
  // loginFunction();
  const handleLogin = async (values) => {
    console.log("handle Login values", values);
    const data = loginFunction(values);
    console.log("handle login data", data);
    login(data.token);
    navigate("/adminDashboard");
  };
  return (
    <main>
      <h1>This is My Admin Panel Space</h1>
      <LoginForm loginSubmitFunciton={handleLogin} />
    </main>
  );
}
