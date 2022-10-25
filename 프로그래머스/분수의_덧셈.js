function solution(denum1, num1, denum2, num2) {
  let answer = [denum1 * num2 + denum2 * num1, num1 * num2],
    i = 2;
  while (i <= answer[0]) {
    if (answer[0] % i == 0 && answer[1] % i == 0) {
      answer[0] = answer[0] / i;
      answer[1] = answer[1] / i;
      i = 2;
      continue;
    }
    i++;
  }
  return answer;
}
