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

let agePrompt = prompt('Enter age')
checkAge(agePrompt)