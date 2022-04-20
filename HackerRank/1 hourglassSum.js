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

    let sums = [];

    for (let x = 0; x < 4; x++) {
        // [-9, -9, -9,  1, 1, 1]
        for (let y = 0; y < 4; y++) {

            let hourGlassSum = (arr[x][y] + arr[x][y+1] + arr[x][y+2]) + 
                                (arr[x+1][y+1]) + 
                                (arr[x+2][y] + arr[x+2][y+1] + arr[x+2][y+2]);
            sums.push(hourGlassSum);
        };
    };
    return Math.max(...sums);
};

console.log(getsum(arrOne));