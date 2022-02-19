export function createDataTree(dataset) {
  let hashtable = Object.create(null);
  dataset.forEach((arr) => {
    hashtable[arr.id] = { ...arr, childNodes: [] };
  });
  let dataTree = [];
  dataset.forEach((arr) => {
    if (arr.parentId === '0') {
      dataTree.push(hashtable[arr.id]);
    } else {
      hashtable[arr.parentId].childNodes.push(hashtable[arr.id]);
    }
  });
  return dataTree;
}
