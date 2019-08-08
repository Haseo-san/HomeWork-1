function pensionCheck() {
    let name = prompt('Ваше имя?'),
        familyName = prompt('Ваша фамилия?'),
        gender = prompt('Ваш пол?', 'М-Ж'),
        age = prompt('Сколько вам лет?'),
        pension = 'Нет',
        id;

    while (name == null || name === '') {
        alert('Введите имя');
        name = prompt('Ваше имя?');
    }

    while (familyName == null || familyName === '') {
        alert('Введите фамилию');
        familyName = prompt('Ваша фамилия?');
    }

    while (gender.toUpperCase() !== 'М' && gender.toUpperCase() !== 'Ж'){
        gender = prompt('Ваш пол?', 'М-Ж');
    }

    while (age <= 0 || isNaN(age)){
        age = prompt('Ошибка в возрасте');
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