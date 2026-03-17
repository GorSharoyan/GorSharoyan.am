// services imports
import { getData, postData } from "./fetch.service";

//API imports
import { API_BASE_URL } from "../config/api";

export async function loginFunction(values) {
  //#Step 1 Using Fetch Post Service we access backend adn verify oru credentials
  postData(`${API_BASE_URL}/admin/login`, values);
  //#Step 2 We rescive backends answer
  const backendPromise = await postData(`${API_BASE_URL}/admin/login`, values);
  //#Step 3 we get seccionToken
  const importedSeccionToken = backendPromise.sessionToken;
  //#Step 4 We store Seccion token
  const token = localStorage.setItem("token", importedSeccionToken);

  // Syntax below is dedicated in order to test if connection between forntend and backend is working
  // Tips : don't forget to restart bakcend server or run it via nodemoon before posting data in frontend
  //   postData("http://localhost:5000/test", { hello: "world" })
  //     .then((res) => console.log(res))
  //     .catch((err) => console.error(err));
  // };
}
