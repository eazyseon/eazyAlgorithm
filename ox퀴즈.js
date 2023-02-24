function solution(quiz) {
    let answer = [];
    let num = 0;

    for(let i=0; i<quiz.length; i++){
        let miniQuiz = quiz[i].split(' ')
        for(let j=0; j<miniQuiz.length; j++){
            if(miniQuiz[j]==='+'){
                num = Number(miniQuiz[j-1]) + Number(miniQuiz[j+1])
            }
            if(miniQuiz[j]==='-'){
                num = Number(miniQuiz[j-1]) - Number(miniQuiz[j+1])
            }
            if(miniQuiz[j]==='='){
                num===Number(miniQuiz[j+1])?answer.push('O'):answer.push('X')
            }
        }
    }
    return answer;
}