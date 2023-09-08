let todayText = document.querySelector(".today");
let utcTime = document.querySelector(".utcDate");

let date = new Date();
let today = date.getDay();

let test;

switch (today) {
   case 1:
      text = "Monday";
      break;
   case 2:
      text = "Tuesday";
      break;
   case 3:
      text = "Wednesday";
      break;
   case 4:
      text = "Thursday";
      break;
   case 5:
      text = "Friday";
      break;
   case 6:
      text = "Saturday";
      break;
   case 7:
      text = "Sunday";
      break;

   default:
      text = "Random day 😊";
}

todayText.innerText = `Today is ${text}`;

let timeInMilliseconds = () => {
   const mainTime = Date.now();
   utcTime.innerText = mainTime;
};
console.log(setInterval(timeInMilliseconds, 1));
