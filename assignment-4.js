function calculateMoney(ticketSale) {

    if (ticketSale < 0) {
        return 'Invalid Number';
    }

    const perTicket = 120;
    const dailyCostOfDarwan = 500;
    const numberOfStaff = 8;
    const perStaffLunchCost = 50;

    const dailyTotalCost = dailyCostOfDarwan + (numberOfStaff * perStaffLunchCost);
    const perDaySavings = (ticketSale * perTicket) - dailyTotalCost;
    return perDaySavings;
}

// console.log(calculateMoney(-1));


function checkName(name) {

    if (typeof name !== 'string') {
        return 'invalid';
    }

    const lastLettersOfGoodNames = ['A', 'y', 'i', 'e', 'o', 'u', 'w'];

    for (const word of lastLettersOfGoodNames) {

        if (name[name.length - 1].toLowerCase() === word.toLowerCase()) {
            return 'Good Name';
        }

    }
    return 'Bad Name';
}

// console.log(checkName('BappY'));

function deleteInvalids(array) {

    if (!Array.isArray(array)) {
        return 'Invalid Array';
    }

    let numbersOfArray = [];

    for (const item of array) {

        if (typeof item === 'number') {

            if (isNaN(item) === false) {
                numbersOfArray.push(item);
            }

        }

    }
    return numbersOfArray;
}

// console.log(deleteInvalids([1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]));

function password(obj) {

    if (!('name' in obj) || !('birthYear' in obj) || !('siteName' in obj)) {
        return 'invalid';
    }
    else if ((String(obj['birthYear']).length !== 4)) {
        return 'invalid';
    }

    const siteNameOfObj = obj['siteName'];
    const capitalize = siteNameOfObj[0].toUpperCase() + siteNameOfObj.slice(1).toLowerCase();
    const result = capitalize + '#' + obj['name'] + '@' + obj['birthYear'];
    return result;
}

// console.log(password({ name: 'rahat' , birthYear: 2002, siteName: 'faCebooK' }));

function monthlySavings(arr, livingCost) {

    if (!Array.isArray(arr) || typeof livingCost !== 'number') {
        return 'invalid input';
    }

    let totalIncome = 0;
    for (const item of arr) {

        if (item >= 3000) {
            const tax = item * 20 / 100;
            const mainAmount = item - tax;
            totalIncome += mainAmount;
        } else {
            totalIncome += item;
        }

    }

    const totalSavings = totalIncome - livingCost;
    if (totalSavings >= 0) {
        return totalSavings;
    } else if (totalSavings < 0) {
        return 'earn more';
    }
}

// console.log(monthlySavings([ 3000 , 3000 , 3000 ] , 5400));