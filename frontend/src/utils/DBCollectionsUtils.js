const findParsedCollection = (schemaName, schemasArray) => {
  let collectionFieldArray = [];
  for (let i = 0; i < schemasArray.length; i++) {
    if (schemasArray[i].collection === schemaName) {
      collectionFieldArray = schemasArray[i].fields; // grab fields
      break; // stop after first match
    }
  }
  console.log("parsed colleciton is", collectionFieldArray);
  return collectionFieldArray;
};

export default findParsedCollection;

const filterArchivesCollections = (schemasOfCollections = []) => {
  return schemasOfCollections.filter(
    (collection) => collection.collection !== "schemas"
  );
};

const filterCollectionNames = (collectionsArray) => {
  const collectionNames = collectionsArray.map((item) => item.collection);
  return collectionNames;
};
export { filterArchivesCollections, filterCollectionNames };
