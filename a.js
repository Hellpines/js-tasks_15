// 1. На странице расположен маркированный список. Пользователь кликает на
// каждый item списка. Необъодимо отловить на какой из элементов нажал
// пользователь и отобразить

// document.querySelector('div').addEventListener('click', (event) =>{
//     const p = document.querySelector('p');
//     p.textContent = event.target.textContent;
// })

// 2. Создайте несколько элементов (например, кнопок) на странице. При клике на
// элемент, используйте event.target для определения на какой из элементов
// производилось действие и измените цвет.

// const colors = [
//     "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#33FFF5",
//     "#F5FF33", "#A133FF", "#FF3333", "#33FFA1", "#5733FF",
//     "#33FF33", "#FF8333", "#3383FF", "#FF33F5", "#33FF83",
//     "#8333FF", "#FF3383", "#33F5FF", "#FF5733", "#33FF57"
// ];
// document.querySelector('div').addEventListener('click', (event) =>{
//     event.target.style.background = colors[Math.floor(Math.random()*colors.length - 1)];
// })

// 3. Создайте блок текста с кнопкой "Показать/Скрыть". При клике на кнопку текст
// должен показываться или скрываться.

// let flag = false;
// const p = document.querySelector('p')
// document.querySelector('button').addEventListener('click' , function (){
//     if(flag == false){
//         p.style.display = 'none';
//         flag = true;
//     }
//     else{
//         p.style.display = 'block';
//         flag = false;
//     }
// })

// 4. По наведению на кнопку вывести сообщение «Hi». Когда мышка выходит за
// границы кнопки сновка скрывать

// const p = document.querySelector('p')
// p.style.display = 'none';

// document.querySelector('button').addEventListener('mouseover', function (){
//     p.style.display = 'block';
// })
// document.querySelector('button').addEventListener('mouseout', function (){
//     p.style.display = 'none';
// })

// 5. По двойному клику на кнопку изменить цвет кнопки

// const button = document.querySelector('button')
// document.querySelector('button').addEventListener('dblclick', function(){
//     button.style.background = 'red';
// })

// 6. Создайте форму для регистрации с полями ввода имени, email и пароля.
// Реализуйте валидацию полей и отображение сообщений об ошибках при
// некорректном вводе.

// const name_ = document.querySelector('.name')
// const email = document.querySelector('.email')
// const password = document.querySelector('.password')

// document.querySelector('button').addEventListener('click', function (){
//     try{
//         if(!isNaN(name_.value.trim()) || !name_.value.trim()){
//             throw new Error('Введите имя')
//         }
//         else if(!/^[\w\.]+@[\w]+\.[\w]{2,6}$/.test(email.value.trim()) || !email.value.trim()){
//             throw new Error('Введите корректную электронную почту');
//         }
//         else if(password.value.trim().length < 8 || !password.value.trim()){
//             throw new Error('Введите больше восьми символов');
//         }
//         else{
//             console.log('Регистрация прошла успешно')
//         }
//     }
//     catch(error){
//         console.log(error.message)
//     }
// })

// 7. Создайте форму с выпадающим списком для выбора единицы измерения
// (например, дюймы, сантиметры, метры). При выборе единицы измерения
// отображайте соответствующее значение в консоли.

// const div = document.querySelector('div');
// const p = document.querySelector('.result')
// let flag = false
// document.querySelector('button').addEventListener('click', function (){
//     if(flag == false){
//         div.style.display = 'none';
//         flag = true;
//     }
//     else{
//         div.style.display = 'block';
//         flag = false;
//     }
// })
// document.querySelector('div').addEventListener('click', (event) =>{
//     p.textContent = event.target.textContent;
// })

// 8. Вывести в строчку все вводимые значения через инпут в виде массива. Добавить
// проверку, что поле не пустое. После каждого клика очищать значение input. Если
// вводимое значение не проходит валидацию, то на месте массива вывести
// сообщение об ошибке красным цветом

// const arr = [];
// const input = document.querySelector('input');
// const p = document.querySelector('p');
// document.querySelector('button').addEventListener('click', function (){
//     if(!input.value) {
//         p.style.color = 'red';
//         p.textContent = 'Поле пустое';
//     }
//     else{
//         arr.push(input.value);
//         input.value = '';
//         p.style.color = 'black';
//         p.textContent = arr;
//     }
// })

// 9. Добавьте картинку на страницу. При наведении на картинку мышкой необходимо
// ее изменять на другую картинку. Но как только мышка снова отходит в сторону, то
// возвращается первая картинка

// const img_1 = document.querySelector('.img-1')
// const img_2 = document.querySelector('.img-2')

// img_1.style.display = 'inline'
// img_2.style.display = 'none'

// img_1.addEventListener('mouseover', function (){
//     img_1.style.display = 'none';
//     img_2.style.display = 'inline';
// })
// img_1.addEventListener('mouseout', function (){
//     img_1.style.display = 'inline';
//     img_2.style.display = 'none';
// })

// 10. Вы вводите строку. Проверить является ли это слово палиндром. Добавить
// проверки

// const input = document.querySelector('input');
// const p = document.querySelector('.result')

// document.querySelector('button').addEventListener('click', function (){
//     if(!input.value.trim() || !isNaN(input.value.trim())) console.log('Введите строку')
//     else if(input.value == input.value.split('').reverse().join('')) p.textContent = 'Это палиндром';
//     else p.textContent = 'Это не палиндром';
// })

// 11. *Дана таблица c 1 колонкой. Под таблицей
// сделайте форму (инпут и кнопка), с помощью
// которой можно будет добавить нового
// значение в таблицу. 

const input = document.querySelector('input');
const add = document.querySelector('.add');
document.querySelector('button').addEventListener('click', function (){
    add.innerHTML = `<tr><td>${input.value}</td></tr>`
})
