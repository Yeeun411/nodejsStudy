//1. function

const arr = ["apple", "banana", "orange", "pear"];

let upper = (arr) =>{
  for(let i = 0; i <4; i++){
    arr[i] = arr[i].toUpperCase();
  }
}
upper(arr);
console.log(arr);

// //2. class
// const User = function(name, age){
//   this.name = name;
//   this.age = age;
// }

class User{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  showName(){
    console.log(this.name);
    console.log(this.age);
  }
}

const mike = new User("Mike", 30);
mike.showName()

 //3.
 const readline = require("readline");

 const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
 });

 rl.question("숫자 두 개를 공백을 기준으로 입력하세요.", (input) => {
    const parts = input.split(" ");
    const dividend = parseInt(parts[0]);
    const divisor = parseInt(parts[1]);

    solution(dividend, divisor);

    rl.close();
 });

 function solution(dividend, divisor) {
    try{
      if (divisor === 0){
        throw new Error('Cannot divide by 0')
      }
      console.log(dividend / divisor);
    }
    catch(e){
      console.log(e.message);
    }
 }
