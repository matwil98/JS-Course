let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23)

let firstName = 'Mateusz'
console.log(firstName)

let me = {
    name: 'Jan',
    surname: 'Kowalski',
    age: 23,
    militaryRank: 'sierż. pchor.',
    company: {
        companyName: '11. kompania',
        battalion: '3. BS',
        commander: 'por. Jan Nowak'
    }
}

console.log(me.militaryRank + ' ' + me.name + ' ' + me.surname + ' ')

console.log("Test of my knowledge: " + me.company.battalion)
let year = 1998
console.log(typeof (year))
console.log(typeof (null))
console.log(typeof (me))

function BMI(mass, height) {
    let bmi = mass / (height ** 2);
    return bmi;
}

let MarkWeight = 78
let MarkTail = 1.69
let JohnWeight = 92
let JohnTail = 1.95

let MarksBMI = BMI(MarkWeight, MarkTail);
let JohnBMI = BMI(JohnWeight, JohnTail);
console.log('Marks BMI is: ' + MarksBMI + ' ' + 'John BMI is: ' + JohnBMI);

let markHigherBMI = MarksBMI > JohnBMI
console.log(markHigherBMI)

let fName = 'Jonas';
let sName = 'Blue';
let y = 2022;

const age = 19;
const isOldEnough = age >= 18;
if (isOldEnough) {
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years:)`);
}

if (MarksBMI > JohnBMI) {
    console.log('Marks BMI ' + '(' + MarksBMI + ') is greater than John BMI (' + JohnBMI + ')')
} else {
    console.log('Johns BMI ' + '(' + JohnBMI + ') is greater than Mark BMI (' + MarksBMI + ')')
}

const inputYear = '1991';
console.log(inputYear + 10)
console.log(Number(inputYear))


//Dolphins and Coalas

let DolphinsTD = [97, 102, 101]
let KoalasTD = [109, 95, 96]
let dAverage = 0;
let cAverage = 0;
let dWin = 0;
let cWin = 0;
for (let i = 0; i < 3; i++) {
    cAverage += KoalasTD[i];
    dAverage += DolphinsTD[i];
    if (DolphinsTD[i] > KoalasTD[i]) {
        dWin++;
    } else if (DolphinsTD[i] < KoalasTD[i]) {
        cWin++;
    } else {
        dWin++;
        cWin++;
    }
}

//BONUS 1
if (dWin > cWin && (dAverage) / 3 >= 100) {
    console.log('Dolphins wins')
} else if (dWin < cWin && (cAverage) / 3 >= 100) {
    console.log("Coalas wins")
} else {
    console.log('Nobody wins. Coalas average: ' + (cAverage / 3) +
        'Dolphins Average: ' + (dAverage / 3))
}

//BONUS 2
if ((dAverage / 3) === (cAverage / 3) && (dAverage / 3) >= 100 && (cAverage / 3) >= 100) {
    console.log('Draw is now')
} else {
    console.log('Nobody wins')
}

console.log('Dolphins average: ' + dAverage / 3, 'Coalas average: ' + cAverage / 3)


//switch statement


//let test = prompt('Enter one of week day')
/*
const day = 'tuesday';
switch (test) {
    case 'monday':
        console.log('The first day of week');
        break;
    default:
        console.log('Different day than Monday');
}
*/
const a = 15
const drink = a >= 18 ? console.log('Wine 🍷') : console.log('Water 🥛')

//Coding challenge


let bill = prompt('Enter a bill')
const tip = bill >= 50 && bill <= 300 ? 1.15 * bill : 1.2 * bill;
console.log('Bill equals: ' + bill);
console.log('Bill + tip = ' + tip);