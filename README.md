# Scaling Umbrella

## Problem
Return a one-dimensional array arranged from elements of a square matrix in a spiral motion towards the center, starting from the top-left position.

## Method
- Initialize an array ```newArray```
- Set ```move``` to the number of rows
- Initialize ```switchMove``` and ```moveY``` flags to ```false```
- Initialize ```curX``` and ```curY``` as ```-1``` and ```0``` respectively
    - The initial X position will be incremented at the start of the loop
- Do a while loop until the number of elements in the ```newArray``` reaches the number of elements from the source matrix
- Inside the while loop, nest a for loop which adds a step to the cursor and pushes a new element to ```newArray```
    - To facilitate DRY, ```switchMove``` and ```moveY``` are used, the ```switchMove``` flag allows to decrement the cursor position, and the ```moveY``` flag indicates the vertical movement, in this case, the outer index of the matrix
        ```
        for(let i = 0; i < move; i++){
            curX += (1 - (2*switchMove)) * !moveY;
            curY += (1 - (2*switchMove)) * moveY;

            newArray.push(array[curY][curX]);
        }
        ```
- After the for loop, if ```moveY``` is set, then toggle ```switchMove```. Otherwise, decrement ```move```

- Return ```newArray``` after the while loop ends

## What could have been done differently
- This assumes that the parameter is a 2-dimensional array with equal side lengths