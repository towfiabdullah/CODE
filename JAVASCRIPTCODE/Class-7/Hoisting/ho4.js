var x = 10;
console.log(x);
 
function test() {
    var x = 20;
    console.log(x);
 
    if (x > 10) {
        let x = 30;
        console.log(x);
    }
    console.log(x);
}
 
test();
console.log(x);