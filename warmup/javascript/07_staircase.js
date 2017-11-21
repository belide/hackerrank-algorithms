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
    staircase(n);
}

const staircase = function (n) {

    for (let i = 1; i <= n; i++) {
        let space = "";
        let hash = "";
        for (let z = 0; z < (n-i); z++){
            space += " ";
        }
        for (let j = 0; j < i; j++){
            hash += "#";
        }
        console.log(space+hash);
    }
};