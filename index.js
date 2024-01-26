// 1. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ერთ მთელ რიცხვს და
//  დააბრუნებს true -ს თუ რიცხვი  არის 3ის ჯერადი , ხოლო თუ არაა მაშნ false-ს

// function numChecker(num){
//     if(num % 3 === 0 && num !== 0){
//         return true
//     }else{
//         return false
//     }
// }

// console.log(numChecker(3))
// console.log(numChecker(4))
// console.log(numChecker(9))
// console.log(numChecker(0))

// 2. დაწერეთ ფუნქცია, getCurrencySymbolFromCode რომელიც პარამეტრად მიიღებს
//  ვალუტის კოდს (USD ან EUR ან GEL) სტრინგის სახით და დააბრუნებს ამ კოდის შესაბამის
// სიმბოლოს ($, €, ლ) თუ ისეთი კოდს გადავცემ რომლის სიმბოლოც არ მაქვს დააბრუნოს კოდი.

// function getCurrencySymbolFromCode(currency) {
//   switch (currency) {
//     case "USD":
//       return "$";
//     case "EUR":
//       return "€";
//     case "GEL":
//       return "ლ";
//     default:
//       return "Error";
//   }
// }

// console.log(getCurrencySymbolFromCode("EUR"));
// console.log(getCurrencySymbolFromCode("USD"));
// console.log(getCurrencySymbolFromCode("GEL"));
// console.log(getCurrencySymbolFromCode("CAD"));

// 3. დაწერეთ ფუნქცია, რომელიც მიიღებს lowerCase სტრინგს მაგ (my name is joe)
//  და დააბრუნებს UpperCase (MY NAME IS JOE) სტრინგს.

// function toUpper(string) {
//   if (typeof(string) === "string") {
//     return string.toUpperCase();
//   }

//   return "invalid input"
// }

// console.log(toUpper("heloooouu"));
// console.log(toUpper([1,2,3]));

// 4.  დაწერეთ ფუნქცია, რომელიც არგუმენტად მიიღებს გასაყიდ და ასაღებ ფასს,
//  დათვლის მოგებას  და დააბრუნებს გასაყიდი ფასის რა პროცენტს შეადგენს მოგება.

// function profitCounter(purchasePrice,sellPrice){
//     const difference = sellPrice - purchasePrice

//     return (difference * 100 / purchasePrice).toFixed(2)
// }

// console.log(profitCounter(100,120))
// console.log(profitCounter(58,283))

// 5. დაწერეთ ფუნქცია, რომელიც მიიღებს რიცხვების მასივს და დააბრუნებს
//  გაფილტრულ მასივს .filter სადაც მხოლოდ ლუწი რიცხვები იქნება.

// function filterEvens(arr){
//     return arr.filter(item =>{
//         return item % 2 === 0
//     })
// }

// console.log(filterEvens([1,2,3,4,5,6,7,8,9]))

// 6. დაწერეთ ფუნქცია, რომელიც მიიღებს ობიექტების მასივს (ობიექტს უნდა ქონდეს ველი name)
// და მეორე პარამეტრად მიიღებს სტრინგს და ამ მასივში
//  .find ით მოვძებნოთ ობიექტის name === ფუნქციის მეორე პარამეტრს და დავაბრუნოთ ნაპოვნი ობიექტი.

// const arr = [
//   { name: "ilia" },
//   { name: "bob" },
//   { name: "jonas" },
//   { name: "max" },
// ];

// function findName(objsArr, name) {
//   let result = objsArr.find((item) => {
//     return item.name === name;
//   });
//   return result || "NO such name";
// }

// console.log(findName(arr, "ilia"));


// დავალება 1
// შექმნით div;
//      div ტეგის შიგნითაც დაამატეთ p ტეგი;
//      p ტეგს დამაატეთ კლასი text;
//      p ტეგის შიგნით დაამატეთ ტექსტი "hello world"
//      საბოლოოდ  html-ში ასეთი სტრუქტურა უნდა მიიღოთ

// <div>
// <p class="text">hello world</p>
// </div>

// const div = document.createElement("div")
// const p = document.createElement("p")
// div.appendChild(p)
// p.classList ="text"
// p.textContent ="hello world"

// დავალება 2 
// შექმენით 5 ელემენტიანი მასივი, რომელსაც ჯავასკრიპტით  li ტეგების შიგნით დაარენდერებთ:

// საბოლოოდ  html-ში ასეთი სტრუქტურა უნდა მიიღოთ
// <ul>
// <li>მასივის ელემენტი</li>
// <li>მასივის ელემენტი</li>
// <li>მასივის ელემენტი</li>
// <li>მასივის ელემენტი</li>
// <li>მასივის ელემენტი</li>
// </ul>



// const arr = ["element-1","element-2","element-3","element-4","element-5"]

// const ul = document.createElement("ul")

// const lists = arr.map(element =>{
//     return `<li>${element}</li>`
// }).join(" ")

// ul.innerHTML = lists

// document.body.appendChild(ul)