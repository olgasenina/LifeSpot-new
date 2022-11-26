
// ----------------------------------------------------------------------------------------------------------
// 
const inputParseFunction = function () {
    return document.getElementsByTagName('input')[0].value.toLowerCase();
}

// ----------------------------------------------------------------------------------------------------------
// создадим объект Map для хранения сессии
let session = new Map();

// ----------------------------------------------------------------------------------------------------------
// Функция для фильтрации контента
function filterContent() {

    // Находим контейнеры с видео, которые необходимо фильтровать
    let elements = document.getElementsByClassName('video-container');

    // Пробегаемся по контейнерам
    for (let i = 0; i < elements.length; i++) {

        // Вытаскиваем текст описания видео, которое необходимо отфильтровать
        let videoText = elements[i].querySelector('.video-title').innerText;

        if (!videoText.toLowerCase().includes(inputParseFunction().toLowerCase())) {
            elements[i].style.display = 'none';
        }
        else {
            elements[i].style.display = 'inline-block';
        }
    }
}

// ----------------------------------------------------------------------------------------------------------
// для проверки и сохранения возраста
function checkAge() {
    // сохраним возраст клиента
    session.set("age", prompt("Пожалуйста, введите свой возраст!"));

    // Проверка на возраст
    if (session.get("age") >= 18) {
        alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + new Date().toLocaleString());
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
    }
}

// ----------------------------------------------------------------------------------------------------------
// Функция для проверки и сохранения  данных пользователя
function handleSession() {
    // Сохраним время начала сессии
    session.set("startDate", new Date().toLocaleString())

    // сохраним информацию о браузере клиента
    session.set("userAgent", window.navigator.userAgent);
}

// ----------------------------------------------------------------------------------------------------------
// Логирование сессии (объявлено через function declaration)
let sessionLog = function logSession() {
    // Вывод в консоль
    for (let result of session) {
        console.log(result);
    }
}


// ----------------------------------------------------------------------------------------------------------

