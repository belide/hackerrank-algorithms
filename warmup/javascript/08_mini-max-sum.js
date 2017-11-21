process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    arr = readLine().split(' ');
    arr = arr.map(Number);
    sums(arr);
}

const sums = function (arr) {
    let maxSum = 0;
    let minSum;
    let sum = 0;
    for (let j = 0; j < arr.length; j++){
        sum += arr[j];
    }
    minSum = sum;
    for (let i = 0; i < arr.length; i++) {
        let tempSum = sum - arr[i];
        if(tempSum > maxSum){
            maxSum = tempSum;
        }
        if (tempSum < minSum){
            minSum = tempSum;
        }
    }
    console.log(minSum + " " + maxSum);
};