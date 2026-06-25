async function fetchData(method, api, body) {
  try {
    const options = {
      method,
      headers: {
        "Content-Type": "application/json"
      }
    };

    // only attach body when needed
    if (body && method !== "GET" && method !== "DELETE") {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(api, options);

    console.log(`API Response on ${method}`, response);

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
//Delete fetch function to delete data in the DB trhought Backend

export function deleteData(api) {
  console.log("This is API rescived by Delete method in fetch service", api);
  console.log("This is body/id rescived by delete mthod in fetch service ");
  return fetchData("DELETE", api);
}
