// Coding Challenge #1
var heightMark = 1.95;
var weightMark = 78;
var heightJohn = 1.95;
var weightJohn = 92;

// heightMark = 1.88;
// weightMark = 95
// heightJohn = 1.76
// weightJohn = 85
var BMIofMark = weightMark / (heightMark * heightMark)
var BMIofJohn = weightJohn / (heightJohn * heightJohn)

const markHigherBMI = BMIofMark > BMIofJohn
console.log(BMIofMark, BMIofJohn)
console.log(markHigherBMI)

// Coding Challenge #2
if (markHigherBMI) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("John's BMI is higher than Mark's!")
}

if (markHigherBMI) {
    console.log(`Mark's BMI ( ${BMIofMark}) is higher than John's( ${BMIofJohn})`);
} else {
    console.log(`Mark's BMI ( ${BMIofMark}) is lower than John's( ${BMIofJohn})`);
}

// Data 1
// Coding Challenge #3
// const scoreDol1 = 96
// const scoreDol2 = 108
// const scoreDol3 = 89

// const scoreKoa1 = 88
// const scoreKoa2 = 91
// const scoreKoa3 = 110

// Data 2
// const scoreDol1 = 97
// const scoreDol2 = 112
// const scoreDol3 = 101

// const scoreKoa1 = 109
// const scoreKoa2 = 95
// const scoreKoa3 = 123

// Data 3
const scoreDol1 = 97
const scoreDol2 = 112
const scoreDol3 = 101

const scoreKoa1 = 109
const scoreKoa2 = 95
const scoreKoa3 = 106

const avgDol = (scoreDol1 + scoreDol2 + scoreDol3) / 3
const avgKoa = (scoreKoa1 + scoreKoa2 + scoreKoa3) / 3

console.log(`Dolphins team: ${avgDol} || Koalas team: ${avgKoa}`)
if (avgDol > avgKoa && avgDol < 100) {
    console.log("Dolphins team win")
} else if (avgDol < avgKoa && avgKoa < 100) {
    console.log("Koalas team win")
} else if (avgDol == avgKoa && avgDol < 100) {
    console.log("Draw")
}

if (avgDol > avgKoa && avgDol >= 100) {
    console.log("Dolphins team win with bonus 1")
} else if (avgDol < avgKoa && avgKoa >= 100) {
    console.log("Koalas team win with bonus 1")
} else if (avgDol == avgKoa && avgDol >= 100) {
    console.log("Draw with bonus 2")
}

// Coding Challenge #4
const bill = 275
    // const bill = 40
    // const bill = 430

const total = (bill >= 50 && bill <= 300) ? bill + (bill * 0.15) : bill + (bill * 0.2)
console.log(`The bill was ${bill}, the tip was ${total-bill}, and the total value ${total}`)

// Coding Challenge #5

// Data 1
// const Dol1 = 44
// const Dol2 = 23
// const Dol3 = 71

// const Koa1 = 65
// const Koa2 = 54
// const Koa3 = 49

// Data 2
const Dol1 = 85
const Dol2 = 54
const Dol3 = 41

const Koa1 = 23
const Koa2 = 34
const Koa3 = 27

function calcAverage(a, b, c) {
    return (a + b + c) / 3;
}
const avgDolhins = calcAverage(Dol1, Dol2, Dol3)
const avgKoalas = calcAverage(Koa1, Koa2, Koa3)

function checkWinner(avgDolhins, avgKoalas) {
    if (avgDolhins >= 2 * avgKoalas) {
        console.log(`Dolhins win (${avgDolhins} vs ${avgKoalas})`)
    } else if (avgKoalas >= 2 * avgDolhins) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolhins})`)
    } else {
        console.log("Draw")
    }
}
checkWinner(avgDolhins, avgKoalas)

// Coding Challenge #6
function calcTip(bill) {
    let tip = 0;
    if (bill >= 50 && bill <= 300) {
        tip = bill * 0.15
    } else {
        tip = bill * 0.2
    }
    return tip;
}
console.log(calcTip(100))

const data = [125, 555, 44]
const tip = [calcTip(data[0]), calcTip(data[1]), calcTip(data[2])]
console.log(data, tip)

// Coding Challenge #7

const mark = {
    fullName: 'Mark Miller',
    mass: 78, // kg
    height: 1.69, // meters,
    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92, // kg
    height: 1.95, // meters,
    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${john.fullName}'s (${john.bmi.toFixed(1)})!`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi.toFixed(1)}) is higher than ${mark.fullName}'s (${mark.bmi.toFixed(1)})!`);
} else {
    console.log(`${mark.fullName} and ${john.fullName} have the same BMI (${mark.bmi.toFixed(1)})!`);
}

// Coding Challenge #8
const testData = [22, 295]