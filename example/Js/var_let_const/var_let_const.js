let i = 1;

for(let i = 0 ; i < 5; i++) {
    console.log(i); // 0 to 4
}

console.log(i); // 1

////////////////////////////////////////
const PI;           // ERROR

const PI = 3.14;

PI = 3.141592;      // ERROR

const PI = 3.141;   // ERROR

console.log(PI);    // 3.14

var PI = 3.1415;    // ERROR
let PI = 3.14159;   // ERROR

if(PI == 3.14){
    const PI = 3.141592;

    console.log(PI);  // 3.141592
}

