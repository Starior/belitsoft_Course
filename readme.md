## Front-End Dev Students Lab G1 from belitsoft

~ 25 Aug 2021 - 24 Jan 2022

# HTML, CSS, SCSS

## HW01. Знакомство с тегами HTML
Сделать html-разметку по образцу

[Finished Page](https://starior.github.io/belitsoft_Course/HW01/index.html)

## HW02. Таблицы
Сделать html-разметку таблицы по образцу. В заголовок таблицы картинки-цветочки добавлять НЕ нужно. 

[Finished Page](https://starior.github.io/belitsoft_Course/HW02/index.html)

## HW03. Знакомство с основными свойствами CSS
Выполнить согласно заданию.

[Finished Page](https://starior.github.io/belitsoft_Course/HW03/index.html)

## HW04. Блочная модель верстки
Сделать html-разметку [макета](https://www.figma.com/file/QHlzXGVZh1J0m7XySRkRb2/belitsoft-HW04_Lemon)
- header
- footer
- 2 первых блока content

## HW05. Фиксированная верстка макета
Прописать css-свойства для следующих блоков:
- footer
- 3-й блок content (блок Recipe)

## HW06. Позиционирование элементов в CSS
- Доделать верстку согласно макету.
- Добавить кнопку-стрелку, ведущую всегда на верх страницы. Кнопка должна быть в правом нижнем углу и не прокручиваться.
- Сделать для второго пункта меню выпадающее сабменю на 3-4 пункта, оформить на свой вкус

[Finished Page (HW04-HW06)](https://starior.github.io/belitsoft_Course/HW04-HW06/index.html)

## HW07. Верстка макета (блочная модель)
1. Сделать фиксированную верстку макета с использованием блочной модели
2. Кто уверенно освоил материал и чувствует в себе силы для новых испытаний, может попробовать сделать отзывчивую верстку, т.е. задавать размеры не в пикселях, а в процентах (это касается ширины)
3. [Макет](https://www.figma.com/file/PmlVCACDkfFXnsHcJbZ0qU/belitsoft-HW07-MMG)

[Finished Page](https://starior.github.io/belitsoft_Course/HW07/index.html)

## HW08. Что такое GIT и для чего он нужен. Работа с формами HTML
- https://tproger.ru/translations/difference-between-git-and-github/
- https://tproger.ru/translations/beginner-git-cheatsheet/
- https://developer.mozilla.org/ru/docs/Learn/Common_questions/Using_Github_pages 
- https://medium.com/nuances-of-programming/%D0%BA%D0%B0%D0%BA-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D1%82%D1%8C-%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D1%8B%D0%B9-%D1%81%D0%B0%D0%B9%D1%82-%D0%BD%D0%B0-github-pages-e0f3c258ee22
- https://losst.ru/kak-polzovatsya-github
- Forms.pdf

## HW09. Flexbox
Разобраться, как работает CSS Flexbox. Статьи и игра для понимания в прикрепленных ссылках.
- https://tproger.ru/translations/how-css-flexbox-works/
- https://medium.com/@stasonmars/%D0%B2%D0%B5%CC%88%D1%80%D1%81%D1%82%D0%BA%D0%B0-%D0%BD%D0%B0-flexbox-%D0%B2-css-%D0%BF%D0%BE%D0%BB%D0%BD%D1%8B%D0%B8%CC%86-%D1%81%D0%BF%D1%80%D0%B0%D0%B2%D0%BE%D1%87%D0%BD%D0%B8%D0%BA-e26662cf87e0  
- https://flexboxfroggy.com/#ru

## HW10. Отзывчивая верстка на Flexbox
1. Доделать верстку первого макета #Frame1
2. Сделать верстку макета [#Frame1](https://www.figma.com/file/MzVWyx61C5H5U0pNO9KIdC/belitsoft-HW10-ResponsiveLayout). 
3. Сделать отзывчивую верстку на Flexbox макета [#Frame2](https://www.figma.com/file/MzVWyx61C5H5U0pNO9KIdC/belitsoft-HW10-ResponsiveLayout). 
Хедер должен быть отдельным блоком, не входящим в 'content-top'.
Подсказка: хедер расположить в нужном месте позиционированием.

[Finished Page](https://starior.github.io/belitsoft_Course/HW10/index0.html)

## HW11.1. Верстка на Flexbox и SCSS
1. Почитать про SCSS (материалы по ссылке)
2. Доделать по макету блок с фоновой картинкой
3. Выделить этот блок в отдельный html-документ (например header.html). Вместо index.html создать документ index.kit и подключить в него header.html. Программка Prepros сама скомпилирует index.html (аналогично тому, как scss компилируется в css)

[Макет](https://www.figma.com/file/UvnvsYwUKAVa0MPg0VTz0s/belitsoft-HW11-Berlin)

/* ---Код файла index.kit---*/
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1.0">
<link rel="preconnect" href="https://fonts.googleapis.com"&gt;
<link rel="preconnect" href="https://fonts.gstatic.com&quot; crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Open+Sans:wght@300;400&family=Playfair+Display:wght@400;700;900&display=swap&quot; rel="stylesheet">
<link rel="stylesheet" href="css/style.css">
<title>Lemon</title>
</head>
<body>
<!-- @import "header.html" -->
</body>
</html>
```
## HW11.2. Верстка макета на CSS Flexbox
Сделать адаптивную верстку макета, постараться выделить визуально одинаковые блоки и сделать их глобальными элементами (как мы делали с кнопками).

[Макет](https://www.figma.com/file/UvnvsYwUKAVa0MPg0VTz0s/belitsoft-HW11-Berlin)

[Finished Page](https://starior.github.io/belitsoft_Course/HW11/index.html)

# JavaScript

## HW12. JavaScript 1. Введение. Основы JS
Создать html файл, в котором добавить тег `<script>`
В файле JS (путь к которому вы укажете в теге `<script>`), выполнить следующие задания и написать код : 
1) Вывести в алерт "Привет, это работа (Ваша Фамилия и Имя)"
2) Объявите переменные для : Названия нашей планеты, Своего возраста; задав им корректные имена, и выведите их в алерт
3) Объявить переменные своего имени, фамилии, возраста и вывести в алерт запись "Привет, меня зовут ИМЯ ФАМИЛИЯ, мне ВОЗРАСТ лет"
4) С помощью промпт узнайте имя проверяющего вашу работу, а потом выведите надпись "Мою работу проверяет ИМЯ"
5) Написать ответы на следующие вопросы (прямо в коде) и закомментировать их : 
   5.1) Чему будут равны переменные (a, b, c и d) в примере ниже?
```js
let a = 1, b = 1;
let c = ++a; 
let d = b++;
```
   5.2) Чему будут равны переменные (a, b, x, у) после исполнения кода в примере ниже?
```js
let a = 3;
let b = 2;
let x = 1 + (a += 2);
let у = 1 + (b *= 2);
```
## HW13. JavaScript 2. Основы JS
В файле JS выполнить следующие задания: 
1) Будем выводить чемпионов Англии по футболу, в зависимости от года (с 2011 по 2021) 
Через prompt получить год, в который хотим узнать чемпиона. При выводе добавить несколько условий: 
   
   1.1 Если год меньше 2011 - вывести надпись "Статистика еще не велась"

   1.2 Если год 2022 - "Сезон еще идет"
   
   1.3 Если год больше 2022 - "Все лучшее впереди!"
   
   1.4 Если год был введен корректно - работаем с командами. 
   
      1.4.1 Для годов 2015, 2017 вывести надпись - "Победитель ФК Челси"
   
      для 2012, 2014, 2018, 2019, 2021 - "Победитель ФК Манчестер Сити"
   
      для 2011, 2013 -  "Победитель ФК Манчестер Юнайтед"
   
      для 2020 - "Победитель ФК Ливерпуль"
   
      для 2016 - "Победитель ФК Лестер Сити"
   
Можно использовать конструкцию if..else, можно и условный оператор "?" + || (&&)

2) При помощи цикла for выведите нечётные числа от 7 до 15
        Как только дойдет до числа 12 - прервать цикл и вывести "12. Цикл прерван"

3) Перепишите на while:
```js  
for (let j = 0; j < 5; j++) { 
  alert( `number ${j}!` ); 
}
```

## HW14. JavaScript 3. Основы JS (функции)
1)   Завершите функцию `howManyDays`. Функция принимает 1 параметр - месяц (означает месяц года). В разных месяцах разные дни (таблица 1). Функция возвращает число, указывающее, сколько дней в этом месяце. (здесь default можно не писать)

Таблица 1
| Month           | Days     | 
| :-              |    :-:   | 
| 1,3,5,7,8,10,12 | 31       |  
| 4,6,9,11        | 30       | 
| 2               | 28       | 

```js
function howManyDays(month) {
  let days;
  switch (){
  }
  return days;
}
```

2) Напишите функцию `max(a, b)`, которая возвращает большее из чисел a и b. (через тернарный оператор)

3) Напишите функцию `pow(x, n)`, которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат. ( n > 0 )

4) Создать функцию, которая получает 2 числа, считает их произведение, и проверяет четное число или нечетное и выводит текст в consol.log.

```js
function calcMultiplication(numOne, numTwo, oddNum, evenNum);
```

addNum, evenNum - функции колбэки )

## HW15. JavaScript 4. Объект: основы. Objects
1) Создайте функцию, которая рассчитает длину поезда
```js
let train = {
     isLocomotive : true,
     locomotiveLength  : 25,
     locomotiveColor  : black, 
     isFreightCar  : false,
     freightСarLength  : 30,
     isCoachCar  : true,
     totalCoachCars : 9,
     coachLength  : 20,
 };
 ```
Длина поезда складывается из имеющихся вагонов и их количества )

2) Создайте объект своей любимой машины, у которой будут свойства 
(Марка, цвет, кол-во дверей, лошадиные силы, объем двигателя, механика\автомат) 
и клонируете этот объект в другой объект с помощью двух способов, которые мы разбирали )

3) В объекте книга вывести в консоль ключи, если значение имеет булевский тип данных
```js
let book = {
     numberOfPages : 545,
     cover  : true,
     isTheAuthorAlive  : false, 
     isBestseller  : true,
     booksEditions  : 20000000,
 };
```

## HW16. JavaScript 5. Объекты
1) 
```js
function animal(obj){
  return ?
} 
```
Напишите код, который возвращает строку..

`"This 
black cat has 4 legs"`
..из объекта 
`{name:"cat", legs:4, color:"black"}`

2) Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:
read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму введённых свойств.
mul() возвращает произведение введённых свойств.

## HW17. JavaScript 6. Строки. Массивы. Методы работы со строками, массивами
1) Напишите функцию `funcName(loremString)` , которая будет возвращать "true" если строка "loremString" содержит подстроки "lorem", "ipsum" и "amet"
- Строку loremString я буду вводить вручную при вызове функции
- Учтите случайное нажатие на CapsLock и случайный пробел в начале ;)

2) Напишите функцию `funcName(str)`, возвращающую строку str с заглавным первым символом.

3) Напишите функцию `funcName(str, maxLength)`, которая будет проверять длину строки, и если длина превышает максимальное значение длины, сокращать до этого значения + "..."

4) Задание - сделать так, чтобы девиз стал правдивым
```js 
let myLifeMotto = ["Я", "ничего", "не", "понимаю", "в", "JavaScript"];
``` 

5) Перебрать массив. Имена, содержащие подстроку "а", добавить в новый массив "teamA"; подстроку "H" в новый массив "teamH"
```js
let harryPotterTeam = ["Albus", "Hermione", "Ronald", "Draco", "Neville"] 
```

6) Получите и выведите в консоль сумму и произведение всех числовых значений данного массива
```js
let arr = [6, 3, "ten", 12, true, "4"]
```


7) Получить новый массив с квадратами этих чисел
```js
let numArr = [1, 3, 5, 7, 9]
```

## HW18. JavaScript 7. Методы работы с массивами
1) Даны два массива: `[1, 2, 3, 4, 5]` и `['Text', 'Audio', 'Video']`. Объедините два массива в один
В полученном массиве измените порядок на обратный

2) 2.1 Получите средний возраст всех участников(!) отряда 
   
      2.2 Преобразовать только в массив имен
```js
let dumbledoresArmy  = [
   {age: 15, name: "Harry", wasThere: true},
   {age: 16, name: "Draco", wasThere: false},
   {age: 15, name: "Ronald", wasThere: true},
   {age: 17, name: "Luna", wasThere: true},
   {age: 16, name: "Crabbe", wasThere: false},
   {age: 16, name: "Hermione", wasThere: true},
   {age: 15, name: "Neville", wasThere: true},
 ];
```
      

3)    3.1 Скопировать в переменную arrCopy и отсортировать массив в порядке возрастания
   
      3.2 Отсортировать массив так, чтобы остались только отрицательные числа. Затем расположить их в порядке убывания 
   
      3.3 Возвести в квадрат каждый элемент массива, затем расположить по возрастанию, а потом вывести все строкой 
```js
 let arr = [14, 15, 1, -10, -8, 0, 12, -11];
```

4)    4.1 Вывести значения всех элементов массива и их индексы:
Индекс 0 - число 44
   
      4.2 Вывести на экран максимальное число массива
   
      4.3 Определить индекс максимального числа массива (или индексы, если число встречается более одного раза)
```js
let numbers = [44, 35, 76, 2, 65, 71, 3, 55, 76];
```
5)    5.1 Выведите масииив имен в верхнем регистре

      5.2 Создайте массив, куда будут добавлены только оценки стедентов, а затем посчитайте их средний балл
```js
let students = [ 
{name: 'John', id: 123, marks : 9 }, 
{name: 'Kate', id: 101, marks : 5 }, 
{name: 'Olya', id: 200, marks : 7 }, 
{name: 'Dan', id: 115, marks : 10 }
]
```
      
6) Определить сколько первых элементов нужно сложить, чтобы сумма была больше 10
```js
let arr = [1, 2, 3, 0, 12, 1, 3]
```

## HW19-HW20. JavaScript 8-9. DOM
1. https://learn.javascript.ru/document 
2. https://www.youtube.com/watch?v=DuWyc76lYC4&t=3608s 
https://www.youtube.com/watch?v=TEeKr2ON66A&t=15s

# HTML-CSS-JS-project

## HW21

ТЗ (техническое задание) по верстке: 
- Адаптивная верстка
- Верстка на Flexbox
- HTML, SCSS (можно использовать любой сборщик)
- БЭМ
- Мобильная версия
- Страница должна быть размещена на Github Pages

ТЗ по JS:
- При прокрутке вниз header остается фиксированным вверху экрана. А также меняет цвет на #F4EC98. При возврате назад (прокрутке в самый верх) снова на исхдный цвет.
- Кликабельность кнопок и изменение их стиля (через JS).
- При наведении на некоторые элементы должна появляться тень.
- Кнопка send должна быть кликабельна. Если Одно из полей name email phone не заполнено, она не должна нажииматься.
- Сделать бургер.
- При нажатии кнопки view all должны показываться все карточки.
- Также должны быть показаны все элементы (вся информация) при нажатии на галочку (мини view all).

[Layout on Figma](https://www.figma.com/file/k8WLHJBkbZatuCgHXnPY5j/Student-Project)

[Finished Page](https://starior.github.io/belitsoft_Course/HW21_Project_HTML-CSS-JS/index.html)

# Node.js

## HW22
1. Инициализировать package.json
2. Установить nodemon
3. Создать server.js (добавить server в секцию scripts, запуск будет осуществляться через npm run server):

    1. Создать сервер (http модуль, 3000 порт)
    
    2. Обработать маршрут /json, который будет возвращать JSON соответственно (Content-Type: application/json)
    
    3. Создать 3 html файла (about, index, services) произвольного содержания и обработать соответствующие маршруты (/ -> index.html, /about -> about.html, /services -> services.html). В качестве response необходимо использовать содержимое файлов.
    
    4. Все остальные маршруты (например /contacts ...) должны возвращать 404 ошибку (Необходимо использовать соответствующий status code, текст ошибки произвольный)
    
    5. Работа с типами (методами) запросов POST, PUT, DELETE, PATCH:
    Необходимо обработать соответствующие маршруты (/post, /put, /delete, /patch).
    В качестве response можно использовать произвольный текст (например название метода).
  

# Node.js Miniproject

## HW23
В рамках ДЗ давайте придерживаться след. структуры - у вас будет 2 папки client и server

### **SERVER PART**
Необходимые пакеты: express, body-parser, mongoose, nodemon
Entry point приложения: index.js
Необходимо добавить script "start" c запуском index.js через nodemon

1. Сущности + структура и связи:

  1.1 Post
- name (required)
- body (required)
- excerpt
- categories (required + one to many relation)
- tags (required + one to many relation)
- author (required + one to one relation)
- createdAt
- updatedAt

1.2 Category
- name (required)
- excerpt
- createdAt
- updatedAt

1.3 Tag
- name (required)
- createdAt
- updatedAt

1.4 Author
- name (required)
- email (required)
- createdAt
- updatedAt

P.S. При необходимости можете добавить доп. поля на свое усмотрение

P.S. Поля createdAt и updatedAt должны содержать информацию о дате создания и дате обновления документа соответственно
(см. документацию -> https://mongoosejs.com/docs/guide.html#timestamps)

Необходимо реализовать CRUD для каждой из сущностей
Давайте придерживаться след. нейминга: find, findOne, create, update, remove

2. Требования по структуре:

    2.1. Для каждой из сущностей необходимо создать файл с роутами (routes/posts.js, routes/categories.js ...)

    2.2. Отдельный контроллер под сущность (controllers/posts.js, controllers/categories.js)

    2.3. Отдельная модель под сущность (models/post.js, models/category.js ...)

3. Требования к API:
    3.1 Формат данных: JSON

    3.2 Использование status codes

    3.3 Придерживаться нейминга согласно JSON API Schema

    3.4 Обработка ошибок
(например: попытка удалить или обновить документ, которого не существует)

4. Необходимо добавить middleware (для всех роутов/маршрутов), задачей которого будет логирование запросов пользователя
Данные для лога: маршрут/роут, метод/тип запроса, params (если они есть), body (если есть) и дата + время
Логи необходимо сохранять в файл logs.json

### **CLIENT PART (работа с шаблонизаторами)**
0. Необходимые пакеты: express, nodemon, mongodb, pug?, ejs?, express-handlebars?
1. Необходимо реализовать след. страницы:

   1. Home - список всех постов

   2. Post page - страница поста соответственно

2. В качестве верстки необходимо взять готовый вариант из интернета на свое усмотрение 
(все лишнее можно убрать + необходимо вывести всю доступную информацию, если не предусмотрено шаблоном - выводим как есть, нет смысла тратить время на стилизацию)
3. Общие требования:

    1. Mongoose не используем

    2. MVC структура

    3. Шаблонизатор на ваш выбор

Дополнительное задание:
- SERVER PART:
  - Добавить поле thumbnail для сущности Post (поле не обязательное)
- CLIENT PART:
  - Шаблон для страницы категории (содержит список постов, которые принадлежат данной категории)
  - Шаблон для страницы тега (содержит список постов, которые принадлежат данному тегу)
