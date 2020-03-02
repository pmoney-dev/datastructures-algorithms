var myArray = require('./myarray');


function main() {
    var arr = new myArray.MyArray();
    arr.insertAt(0, 'A');
    arr.insertAt(1, 'D');
    arr.insertAt(1, 'B');
    arr.insertAt(3, 'C');
    
    console.log(arr.length());
}

main();