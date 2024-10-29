// var firstName = "Timothy"; //string
// var surName = "Omamegbe"; //string
// var age = 80; //number
// var isStudent = true; //boolean
// var a = 40;
// var b = 25;
// var c = a - b
// var d = null

// var car = {
//     brand: "Toyota",
//     year: 2020,
//     colour: "blue",
// } //object

// var nigeriaBanks = ["Firstbank","","orange"]




// console.log(age);
// console.log(firstName + surName);
// // alert ("This is the substraction answer"+ " " + c);

// console.log(car.brand)

// function greetings(name,age) {
//     return "Hello" + "       " + name + "You are " + age + "Years today"
// }

// //Conditional Statements

// function checkingAge(age) {
//     if (age >= 18) {
//         return "Congratulation, You're an adult"
//     } else {
//         return "oopss, You're a minor. You can't register to vote"
//     }

// }
// let personAge = prompt("Please enter your age")
// let message = checkingAge(personAge)
// console.log(message)

// function credit(bal,transfer) {
//     if (transfer < bal) {
//         return bal + transfer
//     } else {
//         return "Insufficient Fund"
//     }
// }

// const bal = Number('5000.55')
// const transfer = Number(prompt("How much naira are you transfering"))
// const accountBal = credit(bal,transfer);
// console.log(accountBal)

// for (let i = 1; i <= 5; i++) {
//     console.log(i)
// }

let participants = [
    "Abby Quadri",
    "Adebisi Horlarmhidey",
    "Afeni Damilola",
    "Aweda Abdulsamod",
    "Edidong Umoren",
    "Fareedah Muheeb",
    "Shodiya",
    "Grace",
    "Janet Kehinde",
    "Mariam",
    "Afolayan",
    "Dawodu",
    "Odetola Seun",
    "Oyedele Ibrahim",
    "Salawu Joseph",
    "Tomola Oke",
    "Zulikha Yetunde",
    "Daniel"
]

for (let i=0; i < 1; i++) {
    let randomize = Math.floor(Math.random()*participants.length);
    let randomWinner = participants[randomize];
    console.log("Our Third Winner is : " + randomWinner)
}

