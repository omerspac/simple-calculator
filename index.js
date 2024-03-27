#! /usr/bin/env node
import inquirer from "inquirer";
const userAnswer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "pehlaNumber" },
    { message: "Enter Second Number", type: "number", name: "doosraNumber" },
    {
        message: "Select One Of The Operators To Perform Operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Substraction", "Multiplication", "Division", "Exit"],
    },
]);
let printAddition = userAnswer.pehlaNumber + userAnswer.doosraNumber;
let printSubstraction = userAnswer.pehlaNumber - userAnswer.doosraNumber;
let printMultiplication = userAnswer.pehlaNumber * userAnswer.doosraNumber;
let printDivision = userAnswer.pehlaNumber / userAnswer.doosraNumber;
if (userAnswer.operator === "Addition") {
    console.log(`The Addition Of Given Numbers are: ${printAddition}`); 
}
else if (userAnswer.operator === "Substraction") {
    console.log(`The Substraction Of Given Numbers are: ${printSubstraction}`);
}
else if (userAnswer.operator === "Multiplication") {
    console.log(`The Multiplication Of Given Numbers are: ${printMultiplication}`);
}
else if (userAnswer.operator === "Division") {
    console.log(`The Division Of Given Numbers are: ${printDivision}`);
}
else {
    console.log("Calculator Program Exited");
}
