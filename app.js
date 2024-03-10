// const title = document.getElementById("title");
// let second = 10;
// title.textContent = "hello";

// const counterInterval = setInterval(() => {
//   second--;
//   if (second > 7) {
//     title.style.color = "blue";
//   } else if (second <= 7 && second > 4) {
//     title.style.color = "green";
//   } else {
//     title.style.color = "red";
//   }

//   if (second == 0) {
//     console.log(1);
//     clearInterval(counterInterval);
//   }

//   title.textContent = second;
// }, 1000);
// const title = document.getElementById("title");
// const ism = prompt("Ismingizni kiriting");
// const vazn = prompt("Vaznizi  kiriting");
// const boy = prompt("Boyingizni kiriting");
// const BMI = vazn / boy ** 2;
// if (BMI == 18.5) {
//   title.textContent = "siz ozginsiz";
// } else if (BMI >= 18.5 && BMI <= 24.9) {
//   title.textContent = "siz ozginsiz";
// } else BMI >= 25 && BMI <= 29.9;
// title.textContent = "siz semisiz";

let myNumber = prompt("Son kiriting");
let randomNamber = Math.trunc(20 * Math.random()) + 1;

if (myNumber == randomNamber) {
  title.textContent = "Qoyil siz kiritgan raqam tori ";
} else
  title.textContent = `Afsuski siz kiritgan raqam notori  u ${randomNamber} edi qaytadan urinib ko'ring`;
