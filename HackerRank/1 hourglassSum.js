// https://www.hackerrank.com/challenges/2d-array/problem?isFullScreen=true
const arrOne = [[-9, -9, -9,  1, 1, 1],  
                [ 0, -9,  0,  4, 3, 2], 
                [-9, -9, -9,  1, 2, 3], 
                [ 0,  0,  8,  6, 6, 0],
                [ 0,  0,  0, -2, 0, 0],
                [ 0,  0,  1,  2, 4, 0] ];
            //   -63, -34, -9, 12, 
            //   -10,   0, 28, 23, 
            //   -27, -11, -2, 10, 
            //     9,  17, 25, 18
​
function getsum (arr) {
​
    let sums = [];
​
    for (let i = 0; i < 4; i++) {
        // [-9, -9, -9,  1, 1, 1]
        for (let x = 0; x < 4; x++) {
            // -9
            // -9 
            // -9 
            let hourGlassSum = (arr[i][x] + arr[i][x+1] + arr[i][x+2]) + 
                                (arr[i+1][x+1]) + 
                                (arr[i+2][x] + arr[i+2][x+1] + arr[i+2][x+2]);
            sums.push(hourGlassSum);
        };
    };
    return Math.max(...sums);
};
​
console.log(getsum(arrOne));