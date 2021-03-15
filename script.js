/*
NOTES

let a = prompt("enter your age")
 if (a >= 75) {
  console.log(`You old sir`)
}
 else if (a < 18) {
  console.log(`${a} years?, You still be pikin`)
} else if (a >=18 ) {
  console.log(`${a} years!!, you're now an adult`)
} else {
  console.log(`${a} is not a valid number`)
}


let day = "wednesday"
switch (day) {
  case 'monday':
    console.log('Today is Monday')
    break
  case 'tuesday':
    console.log('Today is Tuesday')
    break
  case 'wednesday':
    console.log('Today is Wednesday')
    break
  case 'thursday':
    console.log('Today is Thursday')
    break
  case 'friday':
    console.log('Today is Friday')
    break
  case 'saturday':
    console.log('Today is Saturday')
    break
  case 'sunday':
    console.log('Today is Sunday')
    break
  default:
    console.log('It is not a week day.')
}
*/
//	EXERCISE

//LEVEL 1
/*
1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he neds to turn 18.

Enter your age: 30
You are old enough to drive.

Enter your age:15
You are left with 3 years to drive.
*/
let age = prompt("enter your age", "Your age goes here")
let ageLeft = 18 - age
 
 if (age >= 75) {
  alert(`You too old to drive.`)
}
 else if (age < 18) {
  alert(`you are left with ${ageLeft} years to drive `)
}
 else if (age >=18 ) {
  alert(`${age} years!!, you're old enough to drive`)
 }
else {
  alert(`${age} is not a valid age value`)
};
/*
2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

Enter your age: 30
You are 5 years older than me.
*/
 
let date = new Date(), yourAge = prompt('Enter your age'), myAge = date.getFullYear() - 1995, yourAgeOlder =yourAge - myAge, myAgeOlder = myAge - yourAge ;

if(yourAge==myAge){
	console.log(`We're age mates`)
}
else if (yourAge > myAge){
	console.log(`You're ${yourAgeOlder} years older than me`)
}
else if(yourAge < myAge){
	console.log(`I am ${myAgeOlder} years older than you `)
}
else{
	console.log(`${yourAge} isn't an age value`)
};

/*
3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

using if else
ternary operator.
  let a = 4
  let b = 3
  4 is greater than 3
*/
let a = 4, b = 3;
if (a>b){
	console.log(`${a} is greater than ${b}`)
}
else{
	console.log(`${b} is greater than ${a} `)
};

a > b
 ?
 console.log(`${a} is greater than ${b}`)
 :
console.log(`${b} is greater than ${a} `);

/*
4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

Enter a number: 2
2 is an even number

Enter a number: 9
9 is is an odd number.
*/
let numberInput = prompt(`ENTER a number value`)/2;
numberInput % 0
?
console.log(`${numberInput} is an even number `)
:
console.log(`${numberInput} is an odd number `);

// LEVEL2
/*
1. Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/
let grades = prompt(`Input your grade value`);
grades = parseInt(grades)

  if (grades>=0 && grades<=49){
	console.log(`You got an "F"`)
	}
	else if(grades>=50 && grades<=59){
			console.log(`You got an "D"`)
	}
	else if(grades>=60 && grades<=69){
	console.log(`You got an "C"`)
	}
else if(grades>=70 && grades<=79){
console.log(`You got an "B"`)
} 
else if(grades>=80 && grades<=100){
		console.log(`You got an "A"`)
}
else{
	console.log(`Invalid`)
};
/*
2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer
*/
let season = prompt(`Enter the month`).toLowerCase();
let season1 = `Autumn`;
let season2 = `Winter` ;
let season3 =`Spring` ;
let season4 = `Summer`;

if (season ==`september`||season ==`october`||season==`november`){
console.log(`The season is ${season1} `)
}
else if (season == `december`|| season == `january`|| season == `february`){
	console.log(`The season is ${season2} `)
}
else if(season == `march`||season==`april`||season==`may`){
	console.log(`The season is ${season3}`)
}
else if(season == `june`||season==`july`||season==`august`){
	console.log(`The season is ${season4} `)
}
else{
	console.log(`Invalid month`)
}

/*
3. Check if a day is weekend day or a working day. Your script will take day as an input.
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.
		*/
		let day = prompt(`What is the day today?`).toUpperCase();
		if (day==`SATURDAY`|| day==`SUNDAY`){
			console.log(`${day} is a weekend`)
		} 
		else if(day == `MONDAY`||day ==`TUESDAY`|| day == `WEDNESDAY`||day == `THURSDAY`||day == `FRIDAY`){
			console.log(`${day} is a working day`)
		};

		else{
			alert(`Invalid`)
		}
/*
Write a program which tells the number of days in a month.
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.
Write a program which tells the number of days in a month, now consider leap year.
*/
let enterMonth = prompt(`Enter a month`,`Note full month name required`).toLowerCase();

if (enterMonth == `january`||enterMonth == `march`||enterMonth == `may`||enterMonth == `july`||enterMonth == `august`|| enterMonth == `october`||enterMonth == `december`){
	console.log(`${enterMonth} has 31 days`)
}

else if(enterMonth == `april`||enterMonth == `june`||enterMonth == `september`||enterMonth == `november`){
	console.log(`${enterMonth} has 30 days`)
}
else if(enterMonth==`february`){
	console.log(`${enterMonth} has 28 days or 29 days at leap year`)
}
else{
	console.log('invalid')
};