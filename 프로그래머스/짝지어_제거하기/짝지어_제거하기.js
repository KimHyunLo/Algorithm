function solution(s) {
  let answer = 0,
    arr = [];
  for (i = 0; i < s.length; i++) {
    arr[arr.length - 1] === s[i] ? arr.pop() : arr.push(s[i]);
  }
  return arr.length === 0 ? 1 : 0;
}
