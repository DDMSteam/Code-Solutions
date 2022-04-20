// https://www.hackerrank.com/challenges/2d-array/problem?xsFullScreen=true

const arrOne = [[-9, -9, -9,  1, 1, 1],  
                [ 0, -9,  0,  4, 3, 2], 
                [-9, -9, -9,  1, 2, 3], 
                [ 0,  0,  8,  6, 6, 0],
                [ 0,  0,  0, -2, 0, 0],
                [ 0,  0,  1,  2, 4, 0] ];       
            //                                   y
            //   -63, -34, -9, 12,           x [-9, -9, -9]
            //   -10,   0, 28, 23,             [ 0, -9,  0]
            //   -27, -11, -2, 10,             [-9, -9, -9]
            //     9,  17, 25, 18

function getsum (arr) {
    let sums = []; //initialize an array to store the sums for each hourglass.
    
    for (let x = 0; x < 4; x++) { //after completing initial looping operation within the nested for loop, shift to the next row.
        // [-9, -9, -9,  1, 1, 1] x[0] first row; next iteration will be [ 0, -9,  0,  4, 3, 2] or x[1]
        for (let y = 0; y < 4; y++) { //iterates through the y-axis from left to right, completes 4 iterations since maximum hourglass in each row is 4

            let hourGlassSum = (arr[x][y] + arr[x][y+1] + arr[x][y+2]) +  //get the sum of the hourglass shape
                                (arr[x+1][y+1]) + 
                                (arr[x+2][y] + arr[x+2][y+1] + arr[x+2][y+2]);
            sums.push(hourGlassSum); //push the hourGlassSum into the sum array.
        };
    };
    return Math.max(...sums); //return the maximum value stored in the array. (... (called a spread) is used to get the max value of an array)
};

console.log(getsum(arrOne));

//time complexity: O(n²) because of two nested for loops. 
//space complexity: O(n) because we are using a data structure in the form of an array to store values in the function.