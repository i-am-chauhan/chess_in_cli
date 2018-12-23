const getAllCombinations = function (firstList, secondList) {
  return firstList.reduce(function (allCombinations, element) {
    return allCombinations.concat(secondList.map(x => [element, x]));
  }, []);
}

exports.getAllCombinations = getAllCombinations;