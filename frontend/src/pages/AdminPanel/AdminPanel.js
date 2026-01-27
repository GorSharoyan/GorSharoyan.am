// components imports
import LoginForm from "../../components/LoginForm/LoginForm";
// services imports
import { postData } from "../../services/fetch.service";
//config imports
import { API_BASE_URL } from "../../config/api";

export default function AdminPanel() {
  const loginFunction = (values) => {
    console.log(API_BASE_URL);
    console.log(values);
    postData(`${API_BASE_URL}/admin/login`, values);

    // Syntax below is dedicated in order to test if connection between forntend and backend is working
    // Tips : don't forget to restart bakcend server or run it via nodeboon before posting data in frontend
    //   postData("http://localhost:5000/test", { hello: "world" })
    //     .then((res) => console.log(res))
    //     .catch((err) => console.error(err));
    // };
  };
  return (
    <main>
      <h1>This is My Admin Panel Space</h1>
      <LoginForm loginSubmitFunciton={loginFunction} />
    </main>
  );
}
