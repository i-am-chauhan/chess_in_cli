const getAllCombinations = function (firstList, secondList) {
  return firstList.reduce(function (allCombinations, element) {
    return allCombinations.concat(secondList.map(x => [element, x]));
  }, []);
}

const zip = function (firstList, secondList) {
  return firstList.map((element, index) =>
    [element, secondList[index]]
  );
}

module.exports = {
  getAllCombinations,
  zip
}