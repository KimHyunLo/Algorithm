function solution(n) {
  let answer = 0,
    sum = 0;
  for (i = 1; i <= Math.ceil(n / 2); i++) {
    sum = 0;
    for (j = i; j <= Math.ceil(n / 2); j++) {
      sum += j;
      if (sum == n) {
        answer++;
        break;
      } else if (sum > n) break;
    }
  }
  return n == 1 ? 1 : answer + 1;
}
