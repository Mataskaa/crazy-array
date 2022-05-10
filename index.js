let crazyArray = [
  'Elon Musk',
  'Bootcamp',
  3,
  5,
  { a: 2, b: 8 },
  '#',
  { language: 'Japanese', greeting: '#' },
  767,
  34,
  '#',
  ['#', '#', '#'],
  ['Tomato', '#', 'PineApple'],
  { sports: '#' },
  { students: '#' },
];

// TODO: Loop through crazy array and replace hash as the following:
// hash in array as -> "HASH" , 7, 11
// hash in object as -> "BOOM", 8, 14,15
// hash in nested array as -> "YEAH" , 12 ,13

//dyanmically, bracket notation, for in, type of, conditions



for(let i=0; i < crazyArray.length; i++) {
  if(crazyArray[i] == '#') {
    crazyArray[i] = 'Hash';
  }
  else if(Array.isArray(crazyArray[i]) == true) {
    for(let j=0; j < crazyArray[i].length; j++) {
      if(crazyArray[i][j] == '#') {
        crazyArray[i][j] = 'Yeah';
      }
    }
  }
  else if(typeof crazyArray[i] == 'object') {
    for(let k=0; k < crazyArray.length; k++) {
      for(const key in crazyArray[i]) {
        if(crazyArray[i][key] == '#') {
          crazyArray[i][key] = 'Boom';
        }
      }
    }
  }
}


console.log(crazyArray)

