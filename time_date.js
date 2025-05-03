let mydate = new Date()

//  date is a object in js

/*console.log(mydate.toISOString());
console.log(mydate.getTime());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate);
*/

//let date = new Date (2025,0,21)

let date = new Date ("01,14,2025")

console.log(date.toLocaleString());

console.log(date.getTime());

let newDate = new Date()


newDate.toLocaleString('default' , {
    weekday: "long"
})

console.log(newDate);