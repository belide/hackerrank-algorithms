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

function timeConversion(s) {
    hour = parseInt(s.substring(0, s.indexOf(":")));
    dayTime = s.substring(8);
    if (hour === 0 && dayTime === "AM"){
        hour = "00";
    }else if ( dayTime === "PM" && hour === 12){
        hour = hour;
    }else if (dayTime === "AM" && hour === 12){
        hour = "00";
    }else if (dayTime === "PM"){
        hour += 12;
    }else{
        hour = "0" + hour;
    }
    s = s.replace(/[AP]M/, "");
    s = s.replace(s.substring(0, s.indexOf(":")), hour);
    return s;
}

function main() {
    var s = readLine();
    var result = timeConversion(s);
    process.stdout.write("" + result + "\n");

}
