const findParsedCollection = (schemaName, schemasArray) => {
  let collectionFieldArray = [];
  for (let i = 0; i < schemasArray.length; i++) {
    if (schemasArray[i].collection === schemaName) {
      collectionFieldArray = schemasArray[i].fields; // grab fields
      break; // stop after first match
    }
  }
  return collectionFieldArray;
};

export default findParsedCollection;
