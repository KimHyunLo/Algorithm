function solution(s) {
  let answer = s.split(" ").map((e) => {
    if (e == "") return;
    let arr = [
      ...e.split("").map((e) => {
        return e.toLowerCase();
      }),
    ];
    if (arr[0] !== parseInt(arr[0])) {
      arr[0] = arr[0].toUpperCase();
    }
    return arr.join("");
  });
  return answer.join(" ");
}
