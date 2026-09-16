const scenes = {
start: {
    chapter: "Пролог",
    bg: "assets/bg/apartment.jpg",
    character: null,
    speaker: "Валера",
    text: "Так. Всё. Я сделал это. Квартира в Москва-Сити. Ремонт — загляденье. Фикус стоит. Жизнь удалась.",
    next: "prologue_2"
},
prologue_2: {
    chapter: "Пролог",
    bg: "assets/bg/apartment.jpg",
    speaker: "Валера",
    text: "Раньше я жил с родителями и мечтал о своём санузле. Теперь у меня свой санузле. Красота.",
    next: "prologue_3"
},
prologue_3: {
    chapter: "Пролог",
    bg: "assets/bg/apartment.jpg",
    speaker: "Валера",
    text: "Итак, первый вечер в новой квартире. Что делаем?",
    choices: [
     { text: "☕ Сварить кофе и полюбоваться видом", next: "prologue_coffee" },
     { text: "📦 Разобрать коробки", next: "prologue_boxes" },
     { text: "🛁 Проверить, как работает санузел", next: "prologue_bathroom" }
    ]
},
prologue_coffee: {
    chapter: "Пролог",
    bg: "assets/bg/apartment.jpg",
    speaker: "Валера",
    text: "Кофе, вид на Эмпайр-стейт-билдинг... стоп, это же Москва-Сити. Ну, почти то же самое. Главное — свой.",
    next: "chapter1_knock"
},
prologue_boxes: {
    chapter: "Пролог",
    bg: "assets/bg/apartment.jpg",
    speaker: "Валера",
    text: "Коробки, коробки... Где мой фикус? А, вот он. Живой. Уже достижение.",
    next: "chapter1_knock"
},
prologue_bathroom: {
    chapter: "Пролог",
    bg: "assets/bg/apartment.jpg",
    speaker: "Валера",
    text: "Санузел работает. Вода течёт куда надо. Пока что.",
    next: "chapter1_knock"
},
chapter1_knock: {
    chapter: "Глава 1: Сосед снизу",
    bg: "assets/bg/apartment.jpg",
    speaker: "???",
    text: "Тук-тук-тук.",
    next: "chapter1_marat"
},
chapter1_marat: {
    chapter: "Глава 1: Сосед снизу",
    bg: "assets/bg/apartment.jpg",
    speaker: "Марат Ильдарович",
    text: "Извините. Я снизу. Только ремонт закончил. Итальянская плитка. Если что — я не скандальный, но у меня всё записано. Камеры. Шутка. Или нет.",
    next: "chapter1_valera_think"
},
chapter1_valera_think: {
    chapter: "Глава 1: Сосед снизу",
    bg: "assets/bg/apartment.jpg",
    speaker: "Валера (про себя)",
    text: "Какие камеры? Что он имеет в виду? Он милый. Наверное.",
    next: "chapter1_choice"
},
chapter1_choice: {
    chapter: "Глава 1: Сосед снизу",
    bg: "assets/bg/apartment.jpg",
    speaker: "Валера",
    text: "Что ответить Марату?",
    choices: [
     { text: "«Да ладно, у меня всё новое!»", next: "chapter1_bad", sanity: -10 },
     { text: "«Спасибо, что зашли. Я подумаю о защите»", next: "chapter1_good", sanity: +10 },
     { text: "«А я тут при чём?»", next: "chapter1_neutral", sanity: -20 }
    ]
},
chapter1_bad: {
    chapter: "Глава 1: Сосед снизу",
    bg: "assets/bg/apartment.jpg",
    speaker: "Марат Ильдарович",
    text: "...Ну, дело ваше. Я предупредил.",
    next: "chapter1_end"
},
chapter1_good: {
    chapter: "Глава 1: Сосед снизу",
    bg: "assets/bg/apartment.jpg",
    speaker: "Марат Ильдарович",
    text: "Вот это по-человечески. Слышал, есть система «Нептун». Говорят, реально спасает.",
    next: "chapter1_end"
},
chapter1_neutral: {
    chapter: "Глава 1: Сосед снизу",
    bg: "assets/bg/apartment.jpg",
    speaker: "Марат Ильдарович",
    text: "При том, что я под вами живу. Ладно. Всего доброго.",
    next: "chapter1_end"
},
chapter1_end: {
    chapter: "Глава 1: Сосед снизу",
    bg: "assets/bg/apartment.jpg",
    speaker: "Валера",
    text: "Так. Кажется, надо что-то решать. Но сначала — спать. Утро вечера мудренее.",
    next: "end_demo"
},
end_demo: {
    chapter: "Конец демо",
    bg: "assets/bg/apartment.jpg",
    speaker: "Автор",
    text: "Это демо-версия. Дальше будут: мини-игра «Найди протечку», ночная авария, сборка системы «Нептун» и три концовки.",
    choices: [
     { text: "🔄 Начать заново", next: "start" }
    ]
}
};
