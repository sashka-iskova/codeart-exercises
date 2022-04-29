function rotateArray(arr, n) {
  if (n > 0) {
    n = n % arr.length;
    return arr.slice(-n).concat(arr.slice(0, -n));
  } else if (n < 0) {
    n *= -1;
    let deletedArray = arr.splice(arr.length - n);
    console.log(deletedArray);
    for (let i = 0; i < deletedArray.length; i++) {
      arr.splice(i, 0, deletedArray[i]);
    }
    return arr;
  }
}
const result_1 = rotateArray(['1', '2', '3'], 2);
const result_2 = rotateArray(['1', '2', '3', '4', '5'], -3);
console.log(result_1, result_2);
