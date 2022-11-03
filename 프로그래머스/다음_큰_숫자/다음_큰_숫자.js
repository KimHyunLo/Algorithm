function solution(n) {
  let count = 0;
  [...n.toString(2)].map((e) => {
    if (e == 1) count++;
  });

  let ansCount = 0;
  for (i = n + 1; ; i++) {
    ansCount = 0;
    [...i.toString(2)].map((e) => {
      if (e == 1) ansCount++;
    });
    if (ansCount == count) return i;
  }
}
