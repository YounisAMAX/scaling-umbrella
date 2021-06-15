# Scaling Umbrella

## Problem
Return a one-dimensional array arranged from elements of a square matrix in a clockwise spiral motion towards the center, starting from the top-left position.

## Proposed solution
Initialize an array and construct a movement cursor. Initialize the movement counter as the matrix edge length. Do a while loop to fill the one-dimensional array with elements from the square matrix. Within it, construct a for loop which increments each step to the cursor and pushes the corresponding matrix element to the new array. Rotate clockwise after finishing the number of steps. Do this for every direction, and decrement the movement counter by 1 every 2 rotations starting after the first direction.

### Example
- Initial matrix
    ```
    1 > 2 > 3
            V
    4 > 5   6
    ^       V
    7 < 8 < 9
    ```
- Expected output
    ```
    [1, 2, 3, 6, 9, 8, 7, 4, 5]
    ```

## Method
- Initialize an array ```newArray```
- Set ```move``` to the number of rows
- Initialize ```switchMove``` and ```moveY``` flags to ```false```
- Initialize ```cursor``` as ```{ x: -1, y: 0 }```
    - The initial ```cursor.x``` position will be incremented to ```0``` at the start of the loop while maintaining the ```move``` value
- Do a while loop until the number of elements in the ```newArray``` reaches the number of elements from the source matrix
- Inside the while loop, nest a for loop which adds a step to the cursor and pushes a new element to ```newArray```
    - To facilitate DRY, ```switchMove``` and ```moveY``` are used, the ```switchMove``` flag allows to decrement the cursor position, and the ```moveY``` flag indicates the vertical movement, in this case, the outer index of the matrix. This allows only one value to be manipulated at a time:
        ```JavaScript
        for(let i = 0; i < move; i++){
            cursor.x += (1 - (2*switchMove)) * !moveY;
            cursor.y += (1 - (2*switchMove)) *  moveY;

            newArray.push(array[cursor.y][cursor.x]);
        }
        ```
- After the for loop, if ```moveY``` is set, then toggle ```switchMove```. Otherwise, decrement ```move```

- Return ```newArray``` after the while loop ends

## What could have been done differently
- This assumes that the parameter is a square 2-dimensional array (square 2D matrix) with equal side lengths. This code should have taken into account different lengths:
    ```JS
    const rows = Array.isArray(array)    ? array.length    : 0;
    const cols = Array.isArray(array[0]) ? array[0].length : 0;
    ```
- Should have attempted the recursive approach.