function solution(n, words) {
    let alreadySaid= [words[0]],
        person = n;
    for(i=1; i<words.length; i++) {
        if(alreadySaid[i-1].charAt(alreadySaid[i-1].length-1) !== words[i].charAt(0)) {
            return [Math.floor((i+1)%n)==0?n:Math.floor((i+1)%n), Math.ceil((i+1)/n) ];
        }
        if(alreadySaid.includes(words[i])) {
            return [Math.floor((i+1)%n)==0?n:Math.floor((i+1)%n), Math.ceil((i+1)/n)];
        } else {
            alreadySaid.push(words[i]);
        }
    }
    return [0,0];
}