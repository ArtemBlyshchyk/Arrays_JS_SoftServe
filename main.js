// // TASK #1.
// // Дано три цілих числа: a, b, c. Перевірте істинність висловлювання:
// //  a < b < c
// let a = 5;
// let b = 7;
// let c = 9;
// console.log(a < b < c);

// TASK #2.
// Є такий код:

// let x = 1;
// let y = 2;

// let res1 = String(x) + String(y); // Допишіть код, необхідно використовувати змінні x і y
// console.log(res1); // ""12""
// console.log(typeof res1); // ""string""

// let res2 = String(x < y) + String(y); // Допишіть код, необхідно використовувати змінні x і y
// console.log(res2); // ""true2""
// console.log(typeof res2); // ""string""

// let res3 = x < y; // Допишіть код, необхідно використовувати змінні x і y
// console.log(res3); // true
// console.log(typeof res3); // ""boolean""

// let res4 = parseInt(x < y); // Допишіть код, необхідно використовувати змінні x і y
// console.log(res4); // NaN
// console.log(typeof res4); // ""number""

// Допишіть код, щоб в консолі браузера з'явилися рядки, які написані в коментарях, оперуючи при цьому змінними х і у.

// TASK #3.
// Використовуючи функцію prompt() задайте користувачу питання про досягнення ним повнолітнього віку. Результат запишіть в змінну isAdult. В залежності від отриманого значення виведіть відповідне повідомлення про статус особи. Наприклад: при виконанні умови вік більше 18 вивести “Ви досягли повнолітнього віку”. Якщо вік менше 18 років вивести “Ви ще надто молоді”,

// let isAdult = +prompt("Введіть свій повний вік");

// if (isNaN(isAdult)) {
//   console.log("Ви можете ввести тільки цифри"); // або isAdult = "NaN" isNaN(isAdult)
// } else if (!isAdult) {
//   console.log("Ви ввели пусте значення");
// } else if (isAdult >= 18) {
//   console.log("Ви досягли повнолітнього віку");
// } else if (isAdult < 18) {
//   console.log("Ви ще надто молоді");
// }

// console.log(typeof isAdult);
// console.log(isAdult);

// // TASK #4
// // Задано масив чисел, знайти число яке найбільш часто входить в масив, занести це число в новий масив і видалити всі входження цього числа із поточного масиву.
// // let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5]
// // let data = ... // 5
// // ...
// // console.log(arr) // [4, 2, 1, 6, 3, 2]

// let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
// let data = [];
// let counts = {};

// for (let i = 0; i < arr.length; i++) {
//   let elem = arr[i];
//   counts[elem] = counts[elem] ? counts[elem] + 1 : 1;
// }
// console.log(counts);

// let mostFrequentNumber;
// let maxCount = 0;

// for (let elem in counts) {
//   if (counts[elem] > maxCount) {
//     mostFrequentNumber = elem;
//     maxCount = counts[elem];
//   }
// }
// console.log(mostFrequentNumber);
// data.push(mostFrequentNumber);
// console.log(data);

// // видалити всі входження цього числа із поточного масиву
// arr = arr.filter((element) => element !== 5);
// console.log(arr);

// TASK 5
// Користувач вводить три довжини сторін трикутника (використовуйте prompt () три рази для введення кожної сторони).
// Необхідно
//     a) визначити і вивести в консоль площу трикутника
//     b) перевірити чи цей трикутник є прямокутним і вивести в консоль результат перевірки.
// Здійснювати перевірку чи введені користувачем значення коректні, в іншому випадку вивести 'Incorrect data‘. Результат обчислення площі трикутника виводити в консоль з точністю 3 знаки після коми (наприклад:  8.42355465 =>  8.424).
// [20:04]

// let firstSide = +prompt("Введіть розмір першої сторони");
// let secondSide = +prompt("Введіть розмір другої сторони");
// let thirdSide = +prompt("Введіть розмір третьої сторони");
// let semiPerimeter = (firstSide * secondSide * thirdSide) / 2;
// let areaOfTriangle = Math.sqrt(
//   semiPerimeter *
//     (semiPerimeter - firstSide) *
//     (semiPerimeter - secondSide) *
//     (semiPerimeter - thirdSide)
// );
// console.log("Площа трикутника: " + areaOfTriangle.toFixed(3));

// if (firstSide < 0 || secondSide < 0 || thirdSide < 0) {
//   console.log("You can not type negative numbers");
// } else if (isNaN(areaOfTriangle) || !areaOfTriangle) {
//   console.log("Incorrect data");
// } else if (
//   firstSide ** 2 + secondSide ** 2 === thirdSide ** 2 ||
//   firstSide ** 2 + thirdSide ** 2 === secondSide ** 2 ||
//   secondSide ** 2 + thirdSide ** 2 === firstSide ** 2
// ) {
//   console.log("Це прямокутний трикутник");
// } else {
//   console.log("Це не прямокутний трикутник");
// }

// Task #6
// Напишіть функцію calc(a, b, op), яка виконує над числами a і b одну із арифметичних операцій та повертає її результат. Вид операції визначається цілим числом op: 1 – віднімання, 2 – добуток, 3 – ділення, інші значення – додавання.

// function calc(a, b, op) {
//   let output;
//   switch (op) {
//     case 1:
//       output = a - b;
//       break;
//     case 2:
//       output = a * b;
//       break;
//     case 3:
//       output = a / b;
//       break;
//     default:
//       output = a + b;
//   }
//   return output;
// }

// console.log(calc(8, 4, 3));

// Task #7
// Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи. Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.
// findUnique([1, 2, 3, 5, 3]);  // => false
// findUnique([1, 2, 3, 5, 11]); // => true

// let arr = new Array();
// function findUnique(arr) {
//   let count = {};
//   for (i = 0; i < arr.length; i++) {
//     let element = arr[i];

//     count[element] = (count[element] || 0) + 1; // перевіряємо кожен елемент на унікальність, якщо значення елемента повторюється, то він збільшується на одиницю
//   }
//   for (let index in count) {
//     if (count.hasOwnProperty(index) && count[index] > 1) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(findUnique([1, 2, 3, 5, 3]));
// console.log(findUnique([1, 2, 3, 5, 11]));

// // SECOND VARIANT OF SOLUTION

// function findUnique(arr) {
//   let uniqueElements = new Set(arr);
//   if (uniqueElements.size < arr.length) {
//     return false;
//   }
//   return true;
// }
// console.log(findUnique([1, 2, 3, 5, 3]));
// console.log(findUnique([1, 2, 3, 5, 11]));

// TASK #7 ************************
// ******
// (Ускладнене. Задача не оцінюється. Для тих, кому хочеться поробити ще щось)
// Створити функцію create() , яка приймає один аргумент у вигляді рядка. Ця функція повертає анонімну функцію, яка перевіряє чи переданий в неї аргумент збігається з аргументом зовнішньої функції.
// const tom = create("pass_for_Tom");
// tom("pass_for_Tom"); //повертає true
// tom("pass_for_tom"); //повертає false

// function create(argument) {
//   return function (secondArgument) {
//     return secondArgument === argument;
//   };
// }
// const tom = create("pass_for_Tom");
// console.log(tom("pass_for_Tom")); //повертає true
// console.log(tom("pass_for_tom")); //повертає false
