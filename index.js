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

// ---------------Task 9 ------------------

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
