//library imports
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider.js";

// components imports
import LoginForm from "../../components/Forms/LoginForm/LoginForm";
// services imports
import { loginFunction } from "../../services/auth.service.js";

export default function AdminPanel() {
  const navigate = useNavigate();
  const { login } = useAuth();

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
