async function fetchData(method, api, body = null) {
  try {
    const response = await fetch(api, {
      method: method,
      headers: {
        "Content-Type": "application/json"
      },
      body: body ? JSON.stringify(body) : null // only send body if provided
    });

    if (!response.ok) {
      throw new Error("Problem with fetching data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// GET fetch function
export function getData(api) {
  return fetchData("GET", api);
}

// POST fetch function
export function postData(api, body) {
  return fetchData("POST", api, body);
}
