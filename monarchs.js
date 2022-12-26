const button = document.querySelector(".output"); 
const day = document.querySelector("#day"); 
const month = document.querySelector("#month"); 
const year = document.querySelector("#year"); 
const output = document.querySelector('#output');

/* Array to hold objects of each monarch */
 const monarchs = [
    {
        name: "William I",
        start: "December 25, 1066",
        end: "September 9, 1087",
        family: "Norman"
    },
    {
        name: "William II", 
        start: "September 26, 1087",
        end: "August 2, 1100",
        family: "Norman"
    },
    {
        name: "Henry I",
        start: "August 5, 1100",
        end: "December 1, 1135",
        family: "Norman"
    },
    {
        name: "Stephen I",
        start: "December 22, 1135",
        end: "October 25, 1154",
        family: "Plantagenet"
    },
    {
        name: "Henry II",
        start: "December 19, 1154",
        end: "July 6, 1189",
        family: "Plantagenet"
    },
    {
        name: "Richard I",
        start: "September 3, 1189",
        end: "April 6, 1199",
        family: "Plantagenet"
    },
    {
        name: "John I",
        start: "May 27, 1199",
        end: "October 19, 1216",
        family: "Plantagenet"
    },
    {
        name: "Henry III",
        start: "October 28, 1216",
        end: "November 16, 1272",
        family: "Plantagenet"
    },
    {
        name: "Edward I",
        start: "November 20, 1272",
        end: "July 7, 1307",
        family: "Plantagenet"
    },
    {
        name: "Edward II",
        start: "July 7, 1307",
        end: "January 25, 1327",
        family: "Plantagenet"
    },
    {
        name: "Edward III", 
        start: "January 25, 1327",
        end: "June 21, 1377",
        family: "Plantagenet"
    },
    {
        name: "Richard II",
        start: "June 22, 1377",
        end: "September 29, 1399",
        family: "Plantagenet"
    },
    {
        name: "Henry IV",
        start: "September 30, 1399",
        end: "March 20, 1413",
        family: "Plantagenet"
    },
    {
        name: "Henry V",
        start: "March 21, 1413",
        end: "August 31, 1422",
        family: "Plantagenet"
    },
    {
        name: "Henry VI",
        start: "September 1, 1422",
        end: "March 4, 1461",
        family: "Plantagenet"
    },
    {
        name: "Edward IV",
        start: "March 4, 1461",
        end: "October 3, 1470",
        family: "Plantagenet"
    },
    {
        name: "Henry VI",
        start: "October 3, 1470",
        end: "April 11, 1471",
        family: "Plantagenet"
    },
    {
        name: "Edward IV",
        start: "April 11, 1471",
        end: "April 9, 1483",
        family: "Plantagenet"
    },
    {
        name: "Edward V",
        start: "April 9, 1483",
        end: "June 25, 1483",
        family: "Plantagenet"
    },
    {
        name: "Richard III",
        start: "June 26, 1483",
        end: "August 22, 1485",
        family: "Plantagenet"
    },
    {
        name: "Henry VII",
        start: "August 22, 1485",
        end: "April 21, 1509",
        family: "Tudor"
    },
    {
        name: "Henry VIII",
        start: "April 22, 1508",
        end: "January 28, 1547",
        family: "Tudor"
    },
    {
        name: "Edward VI",
        start: "January 28, 1547",
        end: "July 6, 1553",
        family: "Tudor"
    },
    {
        name: "Jane I",
        start: "July 10, 1553",
        end: "July 19, 1553",
        family: "Tudor"
    },
    {
        name: "Mary I",
        start: "July 20, 1553",
        end: "November 17, 1558",
        family: "Tudor"
    },
    {
        name: "Elizabeth",
        start: "November 17, 1558",
        end: "March 24, 1603",
        family: "Tudor"
    },
    {
        name: "James I",
        start: "March 24, 1603",
        end: "March 27, 1625",
        family: "Stuart"
    },
    {
        name: "Charles I",
        start: "March 27, 1625",
        end: "January 30, 1649",
        family: "Stuart"
    },
    {
        name: "Oliver Cromwell",
        start: "January 31, 1649",
        end: "May 29, 1660",
        family: "Interregnum"
    },
    {
        name: "Charles II",
        start: "May 29, 1660",
        end: "February 6, 1685",
        family: "Stuart"
    },
    {
        name: "James II",
        start: "February 6, 1685",
        end: "December 23, 1688",
        family: "Stuart"
    },
    {
        name: "William III",
        start: "December 24, 1688",
        end: "March 8, 1702",
        family: "Orange"
    },
    {
        name: "Anne I",
        start: "March 8, 1702",
        end: "May 1, 1707",
        family: "Orange"
    },
    {
        name: "Mary II",
        start: "December 24, 1688",
        end: "December 28, 1694",
        family: "Stuart"
    },
    {
        name: "George I",
        start: "August 1, 1714",
        end: "June 11, 1727",
        family: "Hanover"
    },
    {
        name: "George II",
        start: "June 12, 1727",
        end: "October 25, 1760",
        family: "Hanover"
    },
    {
        name: "George III",
        start: "October 26, 1760",
        end: "January 29, 1820",
        family: "Hanover"
    },
    {
        name: "George IV",
        start: "January 30, 1820",
        end: "June 26, 1830",
        family: "Hanover"
    },
    {
        name: "William IV",
        start: "June 27, 1830",
        end: "June 20, 1837",
        family: "Hanover"
    },
    {
        name: "Victoria",
        start: "June 21, 1837",
        end: "January 22, 1901",
        family: "Hanover"
    },
    {
        name: "Edward VII",
        start: "January 23, 1901",
        end: "May 6, 1910",
        family: "Saxe-Coburg"
    },
    { name: "George V",
        start: "May 7, 1910",
        end: "January 20, 1936",
        family: "Windsor"
    },
    { name: "Edward VIII",
    start: "January 21, 1936",
    end: "December 11, 1936",
    family: "Windsor"
    },
    { name: "George VI",
        start: "December 12, 1936",
        end: "February 6, 1952",
        family: "Windsor"
    },
    { name: "Elizabeth II",
    start: "February 7, 1952",
    end: "September 8, 2022",
    family: "Windsor"
},
{ name: "Charles III",
start: "September 9, 2022",
end: "January 1, 2023",
family: "Windsor"
}
]


/* Converts a date (Month Day, Year) to a number in milliseconds */
function yearToNumber(date){
    let newYear = new Date(`"${date}"`)
    let num = newYear.getTime();
    return num;
}

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
    if(currentMonarchs.length === 1){
    return `The Monarch on this date was ${currentMonarchs[0].name}`
    }
    else if (currentMonarchs.length === 2){
        return `The Monarchs on this date were ${currentMonarchs[0].name} and ${currentMonarchs[1].name}`
    }

}

/* Event Listener on the button which takes date from the input and returns the Monarch in an alert */
button.addEventListener('click', () => {
    console.log("CLicked!")
    let dayVal = day.value;
    let monthVal = month.value;
    let yearVal = year.value;
    console.log(dayVal, monthVal, yearVal)
    const result = checkDate(`${monthVal} ${dayVal}, ${yearVal}"`, monarchs)
    output.innerHTML = result;
    console.log("Done!")
})