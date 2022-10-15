window.onload = ()=> {
    let board = document.getElementById("board");
    let squares = [...board.children];
    let game_state = new Array(9).fill(" ");
    var turn_tracker = 0

    squares.forEach( (square) => {
        square.classList.add('class','square');

        // Add Hover Effect
        square.addEventListener('mouseover', () => {
            square.classList.add('hover');
        });

        // Remove Hover Effect
        square.addEventListener('mouseout',() => {
            square.classList.remove('hover');
        });

        // Add Alternating X's or O's to the Board
        square.addEventListener('click', () => {
            if (square.innerHTML === "") {
                if (turn_tracker % 2 === 0) {
                    square.innerHTML = "X";
                    square.classList.add("square", "X");
                    turn_tracker += 1;
                } else {
                    square.innerHTML = "O";
                    square.classList.add("square", "O");
                    turn_tracker += 1;
                }
            }
        })


    })

}
