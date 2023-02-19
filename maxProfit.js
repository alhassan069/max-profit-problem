// const time1 = Date.now();
const totalTimeUnit = 13;
const data = {
    5: 1500,
    4: 1000,
    10: 3000
};
let maxProfit = 0;
let ansString = "";

function getAllWays(numberOfSteps, psf) {
    if (numberOfSteps <= 0) {
        return 0;
    } else if (numberOfSteps < 4) {
        findMaxProfit(psf.trim().split(" ").map(Number))
        return 1;
    }

    if (numberOfSteps === 5 || numberOfSteps == 4) {
        findMaxProfit(psf.trim().split(" ").map(Number))
    }

    getAllWays(numberOfSteps - 10, psf + "10 ");
    getAllWays(numberOfSteps - 5, psf + "5 ");
    getAllWays(numberOfSteps - 4, psf + "4 ");

}



getAllWays(totalTimeUnit, "");
function findMaxProfit(arr) {
    let m = arr.length;
    let remainingDays = totalTimeUnit;
    let profit = 0;
    let tempAnsObj = {
        5: 0,
        4: 0,
        10: 0
    }

    for (let j = 0; j < m; j++) {
        let timeUnit = arr[j];
        profit += (remainingDays - timeUnit) * data[timeUnit];
        tempAnsObj[timeUnit]++;
        remainingDays = remainingDays - timeUnit;
    }

    if (profit > maxProfit) {
        maxProfit = profit;
        ansString = `T:${tempAnsObj[5]}P:${tempAnsObj[4]}C:${tempAnsObj[10]}`
    }
}
console.log("Time Unit:", totalTimeUnit)
console.log("Earnings:", maxProfit);
console.log("Solution:", ansString);

// console.log("Time Taken for execution", Date.now() - time1);