function solution(sizes) {
  const arr = sizes
    .map((e) => {
      if (e[1] > e[0]) return [e[1], e[0]];
      return e;
    })
    .sort((a, b) => {
      return b[0] - a[0];
    });
  const w = arr[0][0],
    h = arr.sort((a, b) => {
      return b[1] - a[1];
    });
  return w * h[0][1];
}
