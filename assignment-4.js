function calculateMoney(ticketSale){

    if(ticketSale < 0){
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


function checkName(name){

    if(typeof name !== 'string'){
        return 'invalid';
    }

    const lastLettersOfGoodNames = ['A','y','i','e','o','u','w'];

    for(const word of lastLettersOfGoodNames){

        if(name[name.length-1].toLowerCase() === word.toLowerCase()){
            return 'Good Name';
        }

    }
    return 'Bad Name';
}

// console.log(checkName('BappY'));

function deleteInvalids(array){

    if(!Array.isArray(array)){
        return 'Invalid Array';
    }

    let numbersOfArray = [];

    for(const item of array){

        if(typeof item === 'number'){
            numbersOfArray.push(item);
        }

    }
    return numbersOfArray;

}

console.log(deleteInvalids(['1', {num:2} , NaN ]));
