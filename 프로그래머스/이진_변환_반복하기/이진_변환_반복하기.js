function solution(s) {
  let answer = [0, 0],
    arr = s;
  while (arr !== "1") {
    answer[0] += 1;
    for (i = 0; i < arr.length; i++) {
      if (arr[i] == "0") answer[1] += 1;
    }
    arr = arr.replace(/0/gi, "");
    arr = parseInt(arr.length).toString(2);
  }
  return answer;
}
