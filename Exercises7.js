/* No 1 */

var rows1 = 5;
var counter = 0;

while(counter < rows1) {
  console.log('*');
  counter++;
}


/* No 2 */

var star = "";
rows3 = 5;
for (var counter = 1; counter <= rows3; counter++){

  for(var counter2 = 1; counter2 <= rows3; counter2++){
    star = star + "*";
    
  }
console.log(star);
star = "";
}


/* No 3 */

var star = "";
rows3 = 5;
for (var counter = 1; counter <= rows3; counter++){

  for(var counter2 = 1; counter2 <= counter; counter2++){
    star = star + "*";
    
  }
console.log(star);
star = "";
}




