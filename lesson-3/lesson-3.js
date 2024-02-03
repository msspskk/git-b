let password = '1234-'; 

if (password.length >= 4 && password.includes ('-') || password.includes ('_')) 
{console.log ('Это надежный пароль');}
else {
    console.log ('Это не надёжный пароль');
}



let name = 'mAShA'
let surname = 'BRatAnoVa'
 
let correctName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
let correctSurname = surname.charAt(0).toUpperCase() + surname.slice(1).toLowerCase();

console.log("Имя с первой буквой в верхнем регистре:", correctName);
console.log("Фамилия с первой буквой в верхнем регистре:", correctSurname);