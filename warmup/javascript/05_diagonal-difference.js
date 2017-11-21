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
    var n = parseInt(readLine());
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
        a[a_i] = readLine().split(' ');
        a[a_i] = a[a_i].map(Number);
    }
    console.log(difference(n, a));

}

const difference = function (n, a) {
    let sum1 = 0;
    for (let i = 0; i < n; i++) {
        sum1 += a[i][i];
    }
    let sum2 = 0;
    for (let i = 0; i < n; i++) {
        sum2 += a[i][(n-1)-i];
    }
    let difference = sum1 - sum2;
    if (difference < 0) {
        return -difference;
    }
    return difference;
}
