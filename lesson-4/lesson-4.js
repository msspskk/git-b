//1
let n = -3 ;
let b = -10 ; 
let count = 42 ;
let min = Math.min (n,b)
let max = Math.max (b,n)
let array = []

if (min > max) {
    [min, max] = [max, min]; 
}

for (let i = 0; i < count; ++i) {
   let randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
        array.push(randomValue);
 }
console.log ('array')
 

//2
let normalWord = 'Привет, мир!' ;

let rewersedWord = normalWord.split('').reverse().join('');

console.log (rewersedWord);

//3
let roadMines = [true, false, false, false, false, false, false, false, false, true];
let tankPosition = 0;
let tankDamage = 0;

 do {
    tankPosition++
    console.log(`Танк переместился на ${tankPosition}`);
    if (roadMines[tankPosition - 1]) {
        tankDamage++
        if (tankDamage === 1 ){
            console.log ('Ваш танк поврежден')
         }
         else  {
            console.log ('Ваш танк уничтожен')
            break;
         }
    }
 }
 while (tankPosition < roadMines.length && tankDamage < 2);
 console.log ('Движение танка завершено')


 //4
 let numberOfDay = 1 ;
 let day = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
 for (; numberOfDay <= 31; numberOfDay++) {
    let currentDay = day[(numberOfDay - 1) % 7];
    console.log( `${numberOfDay} ${currentDay}, января`)
    if (numberOfDay > 31) {
        break
    }
 }
