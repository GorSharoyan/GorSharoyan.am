export default function collectPlaceholders(inputArray) {
  console.log("collectedPlacehodlers are", inputArray);
  const placeholders = [];

  for (let i = 0; i < inputArray.length; i++) {
    placeholders.push(inputArray[i].name);
  }

  return placeholders;
}
