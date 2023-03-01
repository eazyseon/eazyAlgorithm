function solution(keyinput, board) {
    let x = 0;
    let y = 0;
    let boundary = [Math.floor(board[0]/2),Math.floor(board[1]/2)]

    for(key of keyinput){

        if(key==='left'){
            x--;
        }
        if(key==='right'){
            x++;
        }
        if(key==='up'){
            y++;
        }
        if(key==='down'){
            y--;
        }

        if(Math.abs(x)>boundary[0]){
            x=x>0? boundary[0] : boundary[0]*-1
        }
        if(Math.abs(y)>boundary[1]){
            y=y>0? boundary[1] : boundary[1]*-1
        }

    }
    return [x,y];
}