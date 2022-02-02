
// You should implement your task here.

module.exports = function towelSort(matrix = []) {
  matrix.forEach((el, ind) => {
    if (ind % 2 !== 0) el.reverse();
  });
  return (matrix) ? matrix.flat() : [];
}
