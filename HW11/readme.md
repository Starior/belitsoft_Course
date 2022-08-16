# ДЗ 11.1. Верстка на Flexbox и SCSS
2 окт. 2021 г.

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

# ДЗ 11.2. Верстка макета на CSS Flexbox
5 окт. 2021 г.
Сделать адаптивную верстку макета, постараться выделить визуально одинаковые блоки и сделать их глобальными элементами (как мы делали с кнопками)
[Макет](https://www.figma.com/file/UvnvsYwUKAVa0MPg0VTz0s/belitsoft-HW11-Berlin)