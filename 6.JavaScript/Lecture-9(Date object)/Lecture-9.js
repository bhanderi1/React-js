/*java script date objects */
/*
new Date()
new Date(date string)
new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(milliseconds)
*/
{
  //1.
  // {
  //   let date1 = new Date()
  //   console.log(date1)
  // }
  // {
  //   let date2 = new Date("10-12-2050")
  //   console.log(date2)
  // }
  // {
  // let date3 = new Date(2023 , 4)
  // console.log(date3)
  // }
  // {
  // let date4 = new Date(2023 , 4 ,26)
  // console.log(date4)
  // }
  // let date5 = new Date(2023, 4 ,26)
  // console.log(date5)
  // {
  //   let date6 = new Date(2023 , 4 ,26 ,16)
  //   console.log(date6)
  // }
  // {
  // let date7 = new Date(2023 , 4 , 26 , 16 ,12)
  // console.log(date7)
  // }
  // {
  //   let date8 = new Date(120000)
  //   console.log(date8)
  // }
}

{
  //2.
  {
    let date1 = new Date();
    console.log(date1);
  }
  {
    let date2 = new Date("2-19-2004");
    console.log(date2);
  }
  {
    let date3 = new Date(2024, 2);
    console.log(date3);
  }
  {
    let date4 = new Date(2024, 2, 9);
    console.log(date4);
  }
  {
    let date6 = new Date(2024, 2, 9, 15);
    console.log(date6);
  }
  {
    let date7 = new Date(2023, 4, 26, 15, 17);
    console.log(date7);
  }
  {
    let date8 = new Date(150000);
    console.log(date8);
  }
}

/* javascript ISO standard time */

{
  // const dates = new Date(2023 ,  3 , 16 , 6 , 15 , 20)
  // console.log(dates);
  // console.log(dates.toString());
  // console.log(dates.toDateString());
  // console.log(dates.toUTCString());
  // console.log(dates.toISOString());
}

/* JavaScript Date Formats */

/* ISO Date , Short Date  , Long Date */
{
  const dates = new Date("2024");
  console.log(dates); //Mon Jan 01 2024 05:30:00
}
{
  const dates = new Date("2025");
  console.log(dates);
}

/* ShortDate */

// {
//   const dates = new Date("19/02/2004");
//   console.log(dates);
// }
// {
//   const date = new date("15/01/2001")
//   console.log(date)
// }

/* LongDate */

{
  const dates = new Date("march 23 2023");
  console.log(dates);
}

{
  const dates = new Date("23 march 2023");
  console.log(dates);
}

/*  Date Input - Parsing Dates */
{
  let msec1 = Date.parse("february 08, 2024");
  console.log(msec1);
}
{
  let msec = Date.parse("february 19, 2004");
  console.log(msec);
}
{
  let msec = Date.parse("January 15, 2001");
  console.log(msec);
}

// Javascript Get Date Methods

/*
getFullYear()	Get year as a four digit number (yyyy)
getMonth()	Get month as a number (0-11)
getDate()	Get day as a number (1-31)
getDay()	Get weekday as a number (0-6)
getHours()	Get hour (0-23)
getMinutes()	Get minute (0-59)
getSeconds()	Get second (0-59)
getMilliseconds()	Get millisecond (0-999)
getTime()	Get time (milliseconds since January 1, 1970)
*/
{
let Date1 = new Date();
console.log(Date1);

let Date2 = Date1.getFullYear();
console.log(Date2);

let Date3 = Date1.getMonth();
console.log(Date3);

let Date4 = Date1.getDate();
console.log(Date4);

let Date5 = Date1.getDay();
console.log(Date5);

let Date6 = Date1.getHours();
console.log(Date6);

let Date7 = Date1.getMinutes();
console.log(Date7);

let Date8 = Date1.getSeconds();
console.log(Date8);

let Date9 = Date1.getMilliseconds();
console.log(Date9);

let Date10 = Date1.getTime();
console.log(Date10);
}
/*  JavaScript Set Date Methods */

/*
setDate()	Set the day as a number (1-31)
setFullYear()	Set the year (optionally month and day)
setHours()	Set the hour (0-23)
setMilliseconds()	Set the milliseconds (0-999)
setMinutes()	Set the minutes (0-59)
setMonth()	Set the month (0-11)
setSeconds()	Set the seconds (0-59)
setTime()	Set the time (milliseconds since January 1, 1970)
*/

{
  let Date1 = new Date();
  console.log(Date1);

  let Date2 = Date1.setFullYear(2020);
  console.log(Date2);
  console.log(Date1);

  let Date3 = Date1.setDate(29);
  console.log(Date1);

  let Date4 = Date1.setHours(45);
  console.log(Date1);

  let Date5 = Date1.setMonth(12);
  console.log(Date1);
}

{
  let Date1 = new Date();
  console.log(Date1);

  let Date2 = Date1.setFullYear(2024);
  console.log(Date2);
  console.log(Date1);

  let Date3 = Date1.setDate(9);
  console.log(Date1);

  let Date4 = Date1.setHours(15);
  console.log(Date1);

  let Date5 = Date1.setMonth(2);
  console.log(Date1);
}