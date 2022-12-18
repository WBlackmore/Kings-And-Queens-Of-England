/* const button = document.querySelector("button"); */

/*Function to convert any date (day/month/year) into a number. Accepts a 
  date string in the format "month day, year". Exmaple: "December 25, 1066"*/
function yearToNumber(date){
    let newYear = new Date(`"${date}"`)
    let num = newYear.getTime();
    return num;
}

/*Function to convert a number in milliseconds to a date. The reverse of yearToNumber */
function numberToDate(num){
    const milliseconds = num;
    const date = new Date(milliseconds)
    console.log(date)
    return date.toString();
}

/* Checks a given date againsgt the Monarchs array and pushes to a new array */
function checkDate(){

}

numberToDate(-28496534325000)
console.log(yearToNumber("December 25, 1066"))
console.log(numberToDate(-28496534325000))

/*
{
    name:
    start:
    end:
    family:
},

Test dates
June 13, 1956
September 3, 789
December 25, 1066
March 30, 1688
*/