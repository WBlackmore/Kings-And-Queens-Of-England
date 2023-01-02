import { monarchs } from "./modules/list.js";

const button = document.querySelector(".output"); 
const day = document.querySelector("#day"); 
const month = document.querySelector("#month"); 
const year = document.querySelector("#year"); 
const output = document.querySelector('#output');



/* Converts a date (Month Day, Year) to a number in milliseconds. Or returns Nan whre invalid date given */
function yearToNumber(date){
    let newYear = new Date(`"${date}"`)
    let num = newYear.getTime();
    return num;
}

function checkDate(date, obj){
    const currentMonarchs = [];
    let givenDate = yearToNumber(date)
    console.log(givenDate)
   

    for(let i = 0; i < obj.length; i++){

        let startNum = obj[i].start;
        let endNum = obj[i].end;

        let start = yearToNumber(startNum)
        let end = yearToNumber(endNum)
        
        if(givenDate >= start && givenDate <= end){
            currentMonarchs.push(obj[i]);
        }
    }
    if(currentMonarchs.length === 1){
    return `The Monarch on this date was ${currentMonarchs[0].name}`
    }
    else if (currentMonarchs.length === 2){
        return `The Monarchs on this date were ${currentMonarchs[0].name} and ${currentMonarchs[1].name}`
    }

}


/* Event Listener on the button which takes date from the input and returns the Monarch in an alert */
button.addEventListener('click', () => {
    console.log("Clicked!")
    let dayVal = day.value;
    let monthVal = month.value;
    let yearVal = year.value;
    const result = checkDate(`${monthVal} ${dayVal}, ${yearVal}"`, monarchs)
    output.innerHTML = result;
})

