function solution(n, s) {
  let answer = [];
  const div = Math.floor(s / n),
    mod = n - (s % n);
  if (!div) {
    answer.push(-1);
  } else {
    for (i = 0; i < mod; i++) answer.push(div);
    for (i = mod; i < n; i++) answer.push(div + 1);
  }
  return answer;
}
