function solution(s) {
  if (s[0] === ")" || s[s.length - 1] === "(") return false;
  let twin = 0;
  for (i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      twin++;
      if (twin > s.length / 2) return false;
    } else {
      twin--;
      if (twin < 0) return false;
    }
  }
  return twin !== 0 ? false : true;
}
