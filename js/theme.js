// Выбираем кнопку
const btn = document.querySelector('.btn_mode');
// Отслеживаем щелчок по кнопке
btn.addEventListener('click', function () {
    // Затем переключаем (добавляем/удаляем) класс .dark-theme для body
    document.body.classList.toggle('dark-theme');
    if (document.body.classList == 'dark-theme') {
        btn.innerHTML = "Light mode";
    } else {
        btn.innerHTML = "Dark mode";
    }
})
