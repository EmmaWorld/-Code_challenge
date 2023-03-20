let grade=document.getElementById('grade')
let speed=document.getElementById('speed')
let salary=document.getElementById('salary')


grade.addEventListener('click', (e)=>{
e.preventDefault()
let inputGrade=parseInt(document.getElementById('input-grade').value)
console.log(inputGrade)
let finalOutput
// write Code For the Code challenge

// the variable marks prompts a pop up to indicate the student marks!
let marks = parseInt(prompt("Enter your student marks from 0-100:"));

// this is an if statement used for implementing the code coditionally.
if (inputGrade > 79) {
  marks = "Grade: A";
} else if (marks >= 60 && marks <= 79) {
  marks = "Grade: B";
} else if (marks >= 50 && marks <= 59) {
  marks = "Grade: C";
} else if (marks >= 40 && marks <= 49) {
  marks = "Grade: D";
} else if (marks >= 30 && marks <= 39) {
  marks = "Grade: E";
}else {
  marks = "Failed, You need to repeat it!";
}

finalOutput= marks
document.getElementById('marks-id').append(marks)

})


speed.addEventListener('click', (e)=>{
    e.preventDefault()
    let inputSpeed=parseInt(document.getElementById('input-speed').value)
    console.log(inputSpeed)
    let finalOutput
// write Code For the Code challenge
// Challenge 2: Speed Detector

let speed = parseInt(prompt("Enter car speed (km/h):"));
let points = 0; 

if (inputSpeed < 70) {
  speed = "Ok";
} else {
  points = Math.floor((inputSpeed - 70) / 5);
  speed = ("Points: " + points);
  if (points >= 12) {
    speed = "License suspended";
  }
  else {
    speed = `Points: ${points}`
  }
}

finalOutput = speed
    document.getElementById('speed-id').append(speed)
})

// Challenge 3: Net Salary Calculator
//This program takes in the basicSalary and benefits and returns the net salary 
//after nssf,nhif and PAYE deductions.

salary.addEventListener('click', (e)=>{
        e.preventDefault()
        let inputSalary=parseInt(document.getElementById('input-salary').value)
        console.log(inputSalary)
let finalOutput
// write Code For the Code challenge

const basicSalary = parseInt(prompt("Enter your basic salary: "));
const benefits = parseInt(prompt("Enter your benefits: "));

// KRA tax rates
const taxRates = [
  { rate: 0.1, min: 0, max: 12298 },
  { rate: 0.15, min: 12299, max: 23885 },
  { rate: 0.2, min: 23886, max: 35472 },
  { rate: 0.25, min: 35473, max: 47059 },
  { rate: 0.3, min: 47060, max: 58646 },
  { rate: 0.325, min: 58647, max: 70233 },
  { rate: 0.35, min: 70234, max: 1000000 }
];

// NHIF rates
const nhifRates = [
  { rate: 150, min: 0, max: 5999 },
  { rate: 300, min: 6000, max: 7999 },
  { rate: 400, min: 8000, max: 11999 },
  { rate: 500, min: 12000, max: 14999 },
  { rate: 600, min: 15000, max: 19999 },
  { rate: 750, min: 20000, max: 24999 },
  { rate: 850, min: 25000, max: 29999 },
  { rate: 900, min: 30000, max: 34999 },
  { rate: 950, min: 35000, max: 39999 },
  { rate: 1000, min: 40000, max: 44999 },
  { rate: 1100, min: 45000, max: 49999 },
  { rate: 1200, min: 50000, max: 59999 },
  { rate: 1300, min: 60000, max: 69999 },
  { rate: 1400, min: 70000, max: 79999 },
  { rate: 1500, min: 80000, max: 89999 },
  { rate: 1600, min: 90000, max: 99999 },
  { rate: 1700, min: 100000, max: 109999},
];

// NSSF rates
const nssfRates = { employee: 0.06, employer: 0.06 };

// calculate gross salary
const grossSalary = basicSalary + benefits;

// calculate payee tax
let tax = 0;
for (let i = 0; i < taxRates.length; i++) {
  if (grossSalary > taxRates[i].max) {
    tax += (taxRates[i].max - taxRates[i].min) * taxRates[i].rate;
  } else {
    tax += (grossSalary - taxRates[i].min) * taxRates[i].rate;
    break;
  }
}

finalOutput = grossSalary; 
document.getElementById('salary-id').append(grossSalary)
        
})