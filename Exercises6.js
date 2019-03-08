/*No 1*/

/*LOOPING PERTAMA*/

console.log('LOOPING PERTAMA')
var total = 2;

while(total <= 20) {
  console.log(total + ' - I love coding ');
  total = total + 2;
}

/*LOOPING KEDUA*/

console.log('LOOPING KEDUA')
var total = 20;

while(total >= 2) {
  console.log(total + ' - I will become fullstack developer');
  total = total - 2;
}


/*No 2*/

/*LOOPING PERTAMA*/

console.log('LOOPING PERTAMA')

for(var total = 1; total <= 20; total++)
{
  console.log(total + ' - I love coding ');
}

/*LOOPING KEDUA*/

console.log('LOOPING KEDUA')

for(var total = 20; total >= 1; total--)
{
  console.log(total + ' - I will become fullstack developer');
}


/*No 3*/

console.log('No 3 Part 1')

for(var counter = 1; counter <= 100; counter++)
{
  if(counter % 2 == 0){
    console.log('GENAP');
  }
  else{
    console.log('GANJIL');
  }

}

console.log('No 3 Part 2');
console.log('Pertambahan 2');

for(var counter = 1; counter <= 100; counter = counter + 2)
{
  if(counter % 3 == 0){
    console.log(counter + ' KELIPATAN 3');
  }
  else{
    console.log(' ');
  }
}

console.log('Pertambahan 5');

for(var counter = 1; counter <= 100; counter = counter + 5)
{
  if(counter % 6 == 0){
    console.log(counter + ' KELIPATAN 6');
  }
  else{
    console.log(' ');
  }
}

console.log('Pertambahan 9');

for(var counter = 1; counter <= 100; counter = counter + 9)
{
  if(counter % 10 == 0){
    console.log(counter + ' KELIPATAN 10');
  }
  else{
    console.log(' ');
  }
}


