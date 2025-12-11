let titleX = document.querySelector('.titleX');
let titleY = document.querySelector('.titleY');
let turn = 'x';
let gameIsFinish = false;
let arrOfItems = [];

function winner(){
    for(let i = 1; i < 10; i++){
        arrOfItems[i] = document.getElementById('item' + i).innerHTML;
    }
    
    // Draw
    let isDraw = true;
    for(let i = 1; i < 10; i++){
        if(arrOfItems[i] != "x" && arrOfItems[i] != "o"){
            isDraw = false;
        }
    }
    if(isDraw){
        gameIsFinish = true;
        titleX.innerHTML = 'X = O';
        titleY.innerHTML = 'X = O';
        document.getElementById('restartButton').innerHTML = 'NEW GAME';
    }

    // 
    if( 
        // check rows 
        (arrOfItems[1] == arrOfItems[2] && arrOfItems[2] == arrOfItems[3] && arrOfItems[1] != '') ||
        (arrOfItems[4] == arrOfItems[5] && arrOfItems[5] == arrOfItems[6] && arrOfItems[4] != '') ||
        (arrOfItems[7] == arrOfItems[8] && arrOfItems[8] == arrOfItems[9] && arrOfItems[7] != '') ||

        // check columens 
        (arrOfItems[1] == arrOfItems[4] && arrOfItems[4] == arrOfItems[7] && arrOfItems[4] != '') ||
        (arrOfItems[2] == arrOfItems[5] && arrOfItems[5] == arrOfItems[8] && arrOfItems[5] != '') ||
        (arrOfItems[3] == arrOfItems[6] && arrOfItems[6] == arrOfItems[9] && arrOfItems[6] != '') ||

        // check X
        (arrOfItems[1] == arrOfItems[5] && arrOfItems[5] == arrOfItems[9] && arrOfItems[5] != '') ||
        (arrOfItems[3] == arrOfItems[5] && arrOfItems[5] == arrOfItems[7] && arrOfItems[5] != '') 
    ){
        if(turn == 'x'){
            titleY.innerHTML = 'O > Winner';
            document.getElementById('restartButton').innerHTML = 'NEW GAME';
            titleX.innerHTML = 'X'
            gameIsFinish = true;
            
        } else if( turn == 'o'){
            titleX.innerHTML = 'X > Winner';
            document.getElementById('restartButton').innerHTML = 'NEW GAME';
            titleY.innerHTML = 'O';
            gameIsFinish = true;
            
        }
     }


}


// Game
function game(id){
    if(gameIsFinish){
        return;
    }

    let element = document.getElementById(id);
    
    if(turn === 'x' && element.innerHTML == ''){
        element.innerHTML = 'x';
        turn = 'o';
        titleY.innerHTML = 'O > turn';
        titleX.innerHTML = 'X';
    } else if(turn === 'o' && element.innerHTML == ''){
        element.innerHTML = 'o';
        turn = 'x';
        titleX.innerHTML = 'X > turn';
        titleY.innerHTML = 'O'
    }

    winner();
    
}



// Restart Function
function restart(){
    location.reload();
}