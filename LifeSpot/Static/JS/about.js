
// ----------------------------------------------------------------------------------------------------------
// Функция сохранения отзыва в объект
function getReview() {
    // создадим объект
    let review = {}

    review["userName"] = prompt("Пожалуйста, введите свое имя.");

    if (review["userName"] == null) {
        return
    }

    // Сохраним текст отзыва
    review["comment"] = prompt("Оставьте Ваш комментарий.");

    if (review["comment"] == null) {
        return
    }

    // Сохраним текущее время
    review["date"] = new Date().toLocaleString();

    // Добавим на страницу
    writeReview(review)
}

// ----------------------------------------------------------------------------------------------------------
// Функция записи отзыва
const writeReview = review => {
    document.getElementsByClassName('reviews')[0].innerHTML += '    <div class="review-text">\n' +
        `<p> <i> <b>${review['userName']}</b>  ${review['date']}</i></p>` +
        `<p>${review['comment']}</p>` +
        '</div>';
}
