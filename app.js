function pensionCheck() {
    let name = prompt('Ваше имя?'),
        familyName = prompt('Ваша фамилия?'),
        gender = prompt('Ваш пол?', 'М-Ж'),
        age = prompt('Сколько вам лет?'),
        pension = 'Нет',
        id;

    let emptyOrSpaces = (input) => input === null || input.match(/^ *$/) !== null;
    let genderCheck = (input) => !/[МмЖж]/.test(input) || input.length > 1;
    let ageCheck = (input) => input <= 0 || isNaN(input);

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
        pension = 'Да';
    } else if(age >= 55 && gender.toUpperCase() === 'Ж'){
        pension = 'Да';
    }

    id = `Полное имя: ${name} ${familyName} \nПол: ${gender} \nНа пенсии: ${pension}`;
    alert(id);
}

pensionCheck();