//2.4.1 Intro to Arrays

//create
let students = ['Alan,Barry,Cage,Dave'];
let values = [1,2,3,4];

//accessing items in an array
console.log(students);
console.log(students[0]);  //Beginning item has index 0
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);
console.log(students[4]);  //ERROR , AS there is no 5th person

//formatting in an array
console.log('Student: ' + students[0]);
console.log('Student 2: ' + students[1]);

//changing an item
students[1] = 'Jonathan';
console.log(students);

//push adds to the end
students.push('Richie');
console.log(students);
students.push('Justice,Joseph');
console.log(students);

//pop removes the last item
students.pop();
console.log(students);

//shift removes the beginning item
students.shift();
console.log(students);

//unshift adds an item to the beginning
students.unshift('Juan Diego');
console.log(students);
students.unshift('Vicente' , 'Reme');
console.log(students);

//length of array = # of items in it
numStudents = students.length;
console.log(lastStudents);

//how to access the LAST item
let laststudent = students[students.length - 1];
console.log(laststudent);

//slice up a piece or original array
let fruits = ['apple' , 'banana', 'orange','lemon','grape'];
let citrus = fruits.slice(2,4);
console.log(citrus);