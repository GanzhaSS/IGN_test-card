// Выбираем кнопку
const btn = document.querySelector('.btn_mode');
// Отслеживаем щелчок по кнопке
btn.addEventListener('click', function () {
    // Затем переключаем (добавляем/удаляем) класс .dark-theme для body
    document.body.classList.toggle('dark-theme');
    if (document.body.classList == 'dark-theme') {
        btn.innerHTML = "Светлая тема";
    } else {
        btn.innerHTML = "Темная тема";
    }
})


//  Замена checkbox на radiobutton
const btn_check = document.querySelector('.btn_check');


btn_check.addEventListener('click', function () {
    var els = document.getElementsByClassName("checkbox");
    var elsNew = document.getElementsByClassName("radio");

    if (btn_check.innerHTML == "Radio") {
        btn_check.innerHTML = "Checkbox"
        Array.from(document.getElementsByClassName("checkbox")).forEach(
            function (el, index, array) {
                el.style.display = 'none';
            }
        );
        Array.from(document.getElementsByClassName("radio")).forEach(
            function (el, index, array) {
                el.style.display = 'inline';
            }
        );
    }
    else {
        btn_check.innerHTML = "Radio"
        Array.from(document.getElementsByClassName("checkbox")).forEach(
            function (el, index, array) {
                el.style.display = 'inline';
            }
        );
        Array.from(document.getElementsByClassName("radio")).forEach(
            function (el, index, array) {
                el.style.display = 'none';
            }
        );
    }





})
