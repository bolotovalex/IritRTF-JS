const express = require('express');
const app = express();
const port = 3000;
const constructPageBody = require('./checkOrder');


const pageHead = `
<!DOCTYPE html>
<html lang="ru">
<head>
<title>Результат заказа питомца</title>
<link rel="stylesheet" href="/styles.css">
</head>
<body>
<main>
<h1>Результат заказа питомца</h1>
`;

const pageFoot = `
<a href="/">⃪ Вернуться к форме заказа</a>
</main>
</body>
</html>
`;

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }

    console.log(`server is listening on ${port}`);
});


app.use(express.static('static'));
app.use(express.urlencoded({extended: true}));

app.post('/pets/orders', (request, response) => {
    const reqBody = request.body;
    // const pageBody = constructPageBody(reqBody);
    console.log(request.body);
    const wrongFields = getWrongFields(validateForm(request.body));
    const pageBody = wrongFields.length > 0 ? '<div>Поля ' + wrongFields.join(', ') + ' содержат ошибки</div>' : constructPageBody(reqBody);

    response.send(`${pageHead}${pageBody}${pageFoot}`);
});

function validateForm(form) {
    let checkedFields = {}
    checkedFields.petType = ['cat', 'dog', 'tiger'].includes(form.petType);
    checkedFields.gender = ['boy', 'girl'].includes(form.gender);
    checkedFields.eyeColor = /#[\da-fA-F]{6}/.test(form.eyeColor)
    checkedFields.tailLength = form.tailLength <= 50 && form.tailLength >= 0;
    checkedFields.name = form.name.length < 100;
    checkedFields.dateOfBirth = Date.parse(form.dateOfBirth) <= Date.now()
    checkedFields.email = /\S+@\S+.\S+/.test(form.email)
    checkedFields.phone = /(\+7|8){1}\d{7,10}/.test(form.phone)
    checkedFields.rules = form.rules;
    return checkedFields
}

function getWrongFields(fields) {
    let namesFields = {
        petType: 'Тип питомца',
        gender: 'Пол',
        eyeColor: 'Цвет глаз',
        tailLength: 'Длина хвоста',
        name: 'Имя хозяина',
        dateOfBirth: 'Дата рождения',
        email: 'Email@',
        phone: 'Телефон',
        rules: 'Согласие с правилами размещения'
    }

    let wrongFields = []
    Object.keys(fields).forEach((key) => {
        if (fields[key] === false) wrongFields.push(namesFields[key])
    })
    return wrongFields
}
