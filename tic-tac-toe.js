window.onload = ()=> {
    let board = document.getElementById("board");
    let squares = [...board.children];

    // Write the necessary JavaScript event-handling code so that when the page loads,
    // each square in the 3x3 grid game board is styled appropriately:

    squares.forEach((square) => {
        square.classList.add('class','square');

        // Add Hover Effect
        square.addEventListener('mouseover', () => {
            square.classList.add('hover');
        });

        // Remove Hover Effect
        square.addEventListener('mouseout',() => {
            square.classList.remove('hover');
        });

    })

}
