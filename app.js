const button = document.querySelector(".submit"); 
const day = document.querySelector("#day"); 
const month = document.querySelector("#month"); 
const year = document.querySelector("#year"); 

function alertDate(){
    let dayVal = day.value;
    let monthVal = month.value;
    let yearVal = year.value;

    let yearNum = yearToNumber(`"${monthVal} ${dayVal}, ${yearVal}"`)
    alert(yearNum);
 }

 button.addEventListener('click', alertDate)

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
    return date.toString();
}

/*Returns the day month and year from a given date*/
function dayMonthYear(fullDate){
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", 
"Septmeber", "October", "November", "December"]
    const date = fullDate;
    const newDate = new Date(date)
    const day = newDate.getDate()
    console.log(day);
    const month = newDate.getMonth()
    console.log(months[month]);
    const year = newDate.getFullYear();
    console.log(year)
}

/* Checks a given date against the Monarchs array and pushes to a new array */
function checkDate(date, obj){
    const currentMonarchs = [];

    for(let i = 0; i < obj.length; i++){

        let startNum = obj[i].start;
        let endNum = obj[i].end;
        let givenDate = yearToNumber(date)
        let start = yearToNumber(startNum)
        let end = yearToNumber(endNum)
        
        if(givenDate >= start && givenDate <= end){
            currentMonarchs.push(obj[i]);
        }
    }
    return currentMonarchs;
}

function inputToDate(day, month, year){
   return `"${month} ${day}, ${year}"`;
}

const test = yearToNumber("August 22, 1485")

console.log(dayMonthYear(test))
/*
console.log(yearToNumber("December 25, 1066"))
console.log(numberToDate(-28496534325000))


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