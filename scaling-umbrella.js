
function arrange(array){
    let len = array.length;

    let totalLength = len * len;

    // The number of steps to move in an iteration
    let move = len;

    // Switch directions (for negative movement)
    let switchMove = false;

    // Vertical movement flag
    let moveY = false;

    // Starting cursor
    let cursor = {
        x: -1,
        y:  0
    };

    // Initialize array
    const newArray = [];

    // Loop until all the elements are arranged
    while (newArray.length < totalLength) {        
        for(let i = 0; i < move; i++){
            // Add one step to the cursor
            // moveY flag disables cursor.x when set,
            // and disables cursor.y when unset
            cursor.x += (1 - (2*switchMove)) * !moveY;
            cursor.y += (1 - (2*switchMove)) *  moveY;

            // Push the new element from the cursor position
            newArray.push(array[cursor.y][cursor.x]);
        }

        if (moveY)
            // Switch direction if the current vertical
            // movement flag is set
            switchMove = !switchMove;
        else
            // If the movement is horizontal, decrement
            // the number of steps
            move--;

        // Toggle the vertical movement flag
        moveY = !moveY;
    }

    // Return the array
    return newArray;
}

module.exports = { arrange }