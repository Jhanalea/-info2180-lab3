window.onload = ()=> {
    let board = document.getElementById("board");
    let status = document.getElementById("status")
    let squares = [...board.children];
    let game_state = new Array(9).fill(" ");
    let winner = false
    let turn_tracker = 0

    squares.forEach( (square,position) => {
        square.classList.add('class','square');
        square.id = `${position}`

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
            if (square.innerHTML === "" && winner === false) {
                if (turn_tracker % 2 === 0) {
                    square.innerHTML = "X";
                    square.classList.add("square", "X");
                    game_state[(square.id)]="X";
                    checkWin();
                    turn_tracker += 1;
                } else {
                    square.innerHTML = "O";
                    square.innerHTML = "O";
                    square.classList.add("square", "O");
                    game_state[(square.id)]="O";
                    checkWin();
                    turn_tracker += 1;
                }
            }
        })

    })

    // Check Player position combinations
    const checkCombos = (str) => {
        let game_state_string = game_state.join("")
        let rows = game_state_string.slice(0, 3).includes(str) || game_state_string.slice(3, 6).includes(str) || game_state_string.slice(6, 9).includes(str)
        let columns = (game_state[0] + game_state[3] + game_state[6]).includes(str) || (game_state[1] + game_state[4] + game_state[7]).includes(str) || (game_state[2] + game_state[5] + game_state[8]).includes(str)
        let diagonals = (game_state[0] + game_state[4] + game_state[8]).includes(str) || (game_state[2] + game_state[4] + game_state[6]).includes(str)

        return rows || columns || diagonals
    }

    //Check if Winning Combination is Found
    const checkWin = () => {
        if(checkCombos("XXX")){
            status.classList.add("you-won")
            status.innerHTML = "Congratulations! X is the Winner!"
            winner = true
        } else if(checkCombos("OOO")){
            status.classList.add("you-won")
            status.innerHTML = "Congratulations! O is the Winner!"
            winner = true
        }
    }

    // Button to start a new game
    let new_game = document.getElementsByClassName("btn")[0];
    new_game.addEventListener("click", () => {
        window.location.reload();

    });

}
