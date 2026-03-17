// components imports
import LoginForm from "../../components/Forms/LoginForm/LoginForm";
// services imports
import { loginFunction } from "../../services/auth.service.js";
//config imports
import { API_BASE_URL } from "../../config/api";

export default function AdminPanel() {
  // loginFunction();
  return (
    <main>
      <h1>This is My Admin Panel Space</h1>
      <LoginForm loginSubmitFunciton={loginFunction} />
    </main>
  );
}
