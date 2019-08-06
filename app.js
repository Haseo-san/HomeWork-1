function pensionCheck() {
    let name = prompt('Ваше имя?'),
        familyName = prompt('Ваша фамилия?'),
        id,
        gender = prompt('Ваш пол?', 'М-Ж'),
        age = prompt('Сколько вам лет?'),
        pension = 'Нет';

    while (name == null || name === '') {
        alert('Введите имя');
        name = prompt('Ваше имя?');
    }

    while (familyName == null || familyName === '') {
        alert('Введите фамилию');
        familyName = prompt('Ваша фамилия?');
    }

    while (gender !== 'М' && gender !== 'Ж' && gender !== 'м' && gender !== 'ж'){
        gender = prompt('Ваш пол?', 'М-Ж');
    }

    while (age <= 0 || isNaN(age)){
        age = prompt('Ошибка в возрасте');
    }

    if (age >= 60 && (gender === 'М' || gender === 'м')){
        pension = 'Да';
    } else if(age >= 55 && (gender === 'Ж' || gender === 'ж')){
        pension = 'Да';
    }

    id = 'Полное имя: ' + name + ' ' + familyName + '\nПол: ' + gender + '\nНа пенсии: ' + pension;
    alert(id);
}

pensionCheck();