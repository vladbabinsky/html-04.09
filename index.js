// // ---------------Task 1 -------------------
// let userName = prompt("Введіть ваше ім'я:");
// alert(`Привіт, ${userName}!`);

// // ---------------Task 2 -------------------

// const now = 2024;
// let birthday = prompt("Введіть ваш рік народження:");
// let age = now - birthday;
// alert(`Вам ${age} років.`);

// // ---------------Task 3 -------------------

// let oneSide = prompt("Введіть довжину сторони квадрата: ");
// let perimeter = 4 * oneSide;
// alert(`Периметр квадрата: ${oneSide}`);

// // ---------------Task 4 ------------------

// var radius = Number(prompt("Введіть радіус кола:"));
// var area = Math.PI * radius * radius;
// alert("Площа кола: " + area);


// // ---------------Task 5 ------------------
// let km = prompt("Введіть відстань між містами (в км):");
// let time = prompt("За скільки годин ви хочете дістатися?");
// let speed = km / time;
// alert(`Вам потрібно рухатися зі швидкістю: ${speed} км/год.`);

// // ---------------Task 6 ------------------

// const curse = 0.90;
// let dollars = prompt("Введіть суму в доларах:");
// let euros = dollars * curse;
// let finalPrice = Math.round(euros * 100) / 100;
// console.log(finalPrice);

// // ---------------Task 7 ------------------

// let flashDrive = prompt("Введіть обсяг флешки (в ГБ):");
// let fileSize = 820;
// let numberOfFiles = Math.floor((flashDriveSize * 1024) / fileSizeMB);
// alert(`На флешку вміститься ${numberOfFiles} файлів розміром 820 МБ.`);


// // ---------------Task 8 ------------------

// let cash = prompt("Скільки у вас грошей?");
// let price = prompt("Вартість однієї шоколадки:");

// let chocolates = Math.floor(cash / price);
// let remnant = cash % price;

// alert(`Ви можете купити ${chocolates} шоколадок і у вас залишиться ${remnant} грн.`);

// // ---------------Task 9 ------------------

let number = parseInt(prompt("Введіть тризначне число:"));

if (number >= 100 && number <= 999) {
    let hundreds = Math.floor(number / 100);
    let tens = Math.floor((number % 100) / 10);
    let units = number % 10;
    let palindrome = units * 100 + tens * 10 + hundreds;
    alert("Паліндром цього числа: " + palindrome);
} else {
    alert("Будь ласка, введіть тризначне число.");
}


// ---------------Task 10 ------------------
// let evenNumber = prompt("Введіть ціле число:");
// alert(evenNumber % 2 === 0 ? "Число парне" : "Число непарне");

