function scope() {
 if(true) {
     var a = "hello my baby "
     let b = "yes my baby ";
 }
 console.log(a);
 console.log(b);
}
scope();