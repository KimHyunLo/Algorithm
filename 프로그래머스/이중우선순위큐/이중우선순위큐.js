function solution(operations) {
  let answer = [];
  for(i=0;i<operations.length;i++){
      if(operations[i].charAt(0) === "I") {
          answer.push(parseInt(operations[i].substring(2,operations.length)));
      } else if (operations[i] === "D 1") {
          answer.sort((a,b)=>{return a-b;}).pop();
      } else {
          answer.sort((a,b)=>{return a-b;}).shift();
      }
  }
  answer.sort((a,b)=>{return a-b;});
  return answer.length==0?[0,0]:[answer[answer.length-1],answer[0]];
}