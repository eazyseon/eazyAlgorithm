function changeBinary(arr, n) {
  let reArr = [];
  for (let i = 0; i < arr.length; i++) {
    let changeNum = arr[i].toString(2);
    if (changeNum.length < n) {
      changeNum = "0".repeat(n - changeNum.length) + changeNum;
    }
    reArr.push(changeNum);
  }
  return reArr;
}

function solution(n, arr1, arr2) {
  let reArr1 = changeBinary(arr1, n);
  let reArr2 = changeBinary(arr2, n);
  const result = [];

  for (let i = 0; i < n; i++) {
    let board = "";
    for (let j = 0; j < n; j++) {
      if (Number(reArr1[i][j]) || Number(reArr2[i][j])) {
        board += "#";
      } else {
        board += " ";
      }
    }
    result.push(board);
  }
  return result;
}
