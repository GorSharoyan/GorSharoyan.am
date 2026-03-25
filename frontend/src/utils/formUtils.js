export default function collectPlaceholders(inputArray) {
  //debug
  console.log("collectedPlacehodlers are", inputArray);
  const placeholders = [];

  for (let i = 0; i < inputArray.length; i++) {
    placeholders.push(inputArray[i].name);
  }

  return placeholders;
}

// this function is created in order to create a backend like schema in order to pass it to the form and push data to the backend

export function collectSchemas(inputArray) {
  const schema = {};

  for (let i = 0; i < inputArray.length; i++) {
    const field = inputArray[i];

    // create a new object for each field (not sharing reference)
    schema[field.name] = "";
  }

  return schema;
}
