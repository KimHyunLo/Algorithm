function solution(brown, yellow) {
  let full = brown + yellow,
    width = 0;
  for (i = 3; i <= full / 2; i++) {
    if (full % i == 0) {
      width = full / i;
      if ((width - 2) * (full / width - 2) == yellow) {
        return [width, full / width];
      }
    }
  }
}
