// ДЗ JS 1 со звездочками с 1-го по 3-й
// 1* Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61

function checkAge(age) {
    let age_2 = 18;
    let age_3 = 60;
    if (age < age_2) {
        console.log("You don't have acces cause your age is " + age + " It's less then")
    } else if (age >= age_2 && age < age_3) {
        console.log("Welcome  !")
    } else if (age > age_3) {
        console.log("Keep calm and look Culture channel")
    } else console.log("Technical work");
}

checkAge(17);
checkAge(18);
checkAge(61);

//2* Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

function checkAge(age) {
    if(typeof age == 'number') {

    let age_2 = 18;
    let age_3 = 60;
    if (age < age_2) {
        console.log("You don't have acces cause your age is " + age + " It's less then")
    } else if (age >= age_2 && age < age_3) {
        console.log("Welcome  !")
    } else if (age > age_3) {
        console.log("Keep calm and look Culture channel")
    } else console.log("Technical work");
} else {console.log('Not integer value')}
}

checkAge('150');
checkAge(18);
checkAge(61);

//3** Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

function checkAge(age) {
    age = Number(age)

    if(!isNaN(age)) {

    let age_2 = 18;
    let age_3 = 60;
    if (age < age_2) {
        console.log("You don't have acces cause your age is " + age + " It's less then")
    } else if (age >= age_2 && age < age_3) {
        console.log("Welcome  !")
    } else if (age > age_3) {
        console.log("Keep calm and look Culture channel")
    } else console.log("Technical work");
} else {console.log('Not integer value')}
}

checkAge(17);
checkAge('18');
checkAge('22fff');