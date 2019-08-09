function pensionCheck() {
    let name = prompt('Ваше имя?'),
        familyName = prompt('Ваша фамилия?'),
        gender = prompt('Ваш пол?', 'М-Ж'),
        age = prompt('Сколько вам лет?'),
        pension = false,
        onPension,
        id;

    let emptyOrSpaces = (input) => input === null || input.match(/^ *$/) !== null,
        genderCheck = (input) => !/[МмЖж]/.test(input) || input.length > 1,
        ageCheck = (input) => input <= 0 || isNaN(input);

    while (emptyOrSpaces(name)) {
        alert('Введите имя');
        name = prompt('Ваше имя?');
    }

    while (emptyOrSpaces(familyName)) {
        alert('Введите фамилию');
        familyName = prompt('Ваша фамилия?');
    }

    while (genderCheck(gender)){
        gender = prompt('Ваш пол?', 'М-Ж');
    }

    while (ageCheck(age)){
        alert('Ошибка в возрасте');
        age = prompt('Сколько вам лет?');
    }

    if (age >= 60 && gender.toUpperCase() === 'М'){
        pension = true;
    } else if(age >= 55 && gender.toUpperCase() === 'Ж'){
        pension = true;
    }

    if (pension = true){
        onPension = 'Да'
    } else {
        onPension = 'Нет'
    }

    id = `Полное имя: ${name} ${familyName} \nПол: ${gender} \nНа пенсии: ${onPension}`;
    alert(id);
}

pensionCheck();