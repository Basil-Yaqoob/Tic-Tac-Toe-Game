let buttons = document.querySelectorAll(".box");
let turn = document.querySelector("#hed");
let reset = document.querySelector(".reset");
let i=0;

let winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const checkWinner=()=>{
    for(patterns of winPattern){
        const [a,b,c]=patterns;
        if(buttons[a].innerText!==""&&buttons[a].innerText===buttons[b].innerText&&buttons[b].innerText===buttons[c].innerText){
            if(i%2==0){
            turn.innerText="Player 2 Wins";
            buttons.forEach(btn => btn.disabled = true);
            reset.innerText="New Game";
           }
           else{
            turn.innerText="Player 1 Wins"; 
            buttons.forEach(btn => btn.disabled = true);
            reset.innerText="New Game";
           }
        }
    }
}

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        
        if(i==8){
            turn.innerText="Its a Tie Start Again :)";
            btn.innerText = "O";
            reset.innerText="New Game";
        }
        
        else if(i%2===0){
            btn.innerText = "O";
            turn.innerText="Player 2's turn Symbol 'X'";
        }
        else{
            btn.innerText = "X";
            turn.innerText="Player 1's turn Symbol 'O'";
        }
        btn.disabled=true;
        i++;
        checkWinner();
        
    });
});