function solution(s){
    let answer = '';
    let stack = [];

    for(let x of s){
        if(x === ')'){
            while(stack.pop()!=='(');
        }else stack.push(x);
    }
    return stack.join('')
}