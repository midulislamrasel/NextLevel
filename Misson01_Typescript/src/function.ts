// Normal Function

// function add(num1: number, num2: number) {
//   let total = num1 + num2;
//   console.log(total);
// }
// add(10, 22);

// const addArrow = (num1:number,num2:number){
//     console.log(num1+ num2)
// }

// const arr:number[] = [22,55,11];
// const newArray = arr.map( item => item * item)

// const person:{
//     name:string,
//     balance:number
//     // addBlance(money:number):string
//     // addBlance(money:number):number
//     addBlance(money:number):void
// } = {
//     name:"midul",
//     balance:5,
//     addBlance (money:number){
//         const totalmoney = this.balance + money
//         // return `my new Balance is ${totalmoney}`
//         // return totalmoney
//         // console.log(totalmoney)
//     }
// }

//difolt perapitam
// function add2(num1: number, num2: number = 10): void {
// console.log(num1 + num2)
// }

// add2(12);

//#####spread Opearator#####
// const friends = ["midul", "rasel", "Tanvir", "Rock", "any"];
// const newFriends = ["Anika", "Rachel", "Pheobe"];

// friends.push(...newFriends);
// console.log(friends);

//######### rest oparesotr #########
const greetFriend = (...friends1: string[]) =>
  friends1.map((friends1) => console.log(`hi ${friends1}`));

greetFriend("midul", "rasle", "islam", "md", "osam");

// array or object
