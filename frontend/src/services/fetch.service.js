async function fetchData(method, api, body) {
  try {
    const response = await fetch(api, {
      method: method,
      headers: {
        "Content-Type": "application/json"
      },
      body: body ? JSON.stringify(body) : null // only send body if provided
    });
    console.log(`Api Response on ${method} request`, response);

    if (!response.ok) {
      throw new Error("Problem with fetching data");
    }

    const data = await response.json();
    console.log(response);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// GET fetch function to get data from the DB trought Backend
export function getData(api) {
  console.log("get Data is here!! ");
  return fetchData("GET", api);
}

// POST fetch function to uplaod  data to the DB trought Backend
export function postData(api, body) {
  console.log("api", api);
  return fetchData("POST", api, body);
}

//PUT fetch function to change data in the DB trought Backend
export function editData(api, body) {
  console.log("api", api);
  console.log("edited body", body);
  return fetchData("PUT", api, body);
}
