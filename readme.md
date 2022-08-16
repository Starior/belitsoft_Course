## Front-End Dev Students Lab G1 from belitsoft

~ 25 Aug 2021 - 24 Jan 2022

# HTML, CSS, SCSS

## HW01. Introduction to HTML Tags
Create HTML markup according to the sample.

[Finished Page](https://starior.github.io/belitsoft_Course/HW01/index.html)

## HW02. Tables
Create HTML table markup according to the sample. Do NOT add flower images to the table header.

[Finished Page](https://starior.github.io/belitsoft_Course/HW02/index.html)

## HW03. Introduction to Basic CSS Properties
Complete according to the assignment.

[Finished Page](https://starior.github.io/belitsoft_Course/HW03/index.html)

## HW04. Block Layout Model
Create HTML markup for the [layout](https://www.figma.com/file/QHlzXGVZh1J0m7XySRkRb2/belitsoft-HW04_Lemon)
- header
- footer
- first 2 content blocks

## HW05. Fixed Layout
Define CSS properties for the following blocks:
- footer
- 3rd content block (Recipe block)

## HW06. CSS Positioning
- Complete the layout according to the design.
- Add an arrow button that always leads to the top of the page. The button should be in the bottom-right corner and not scroll with the page.
- Add a dropdown submenu of 3-4 items for the second menu item; style as you like.

[Finished Page (HW04-HW06)](https://starior.github.io/belitsoft_Course/HW04-HW06/index.html)

## HW07. Layout (Block Model)
1. Create a fixed layout using the block model.
2. If you have mastered the material and are ready for more, try a responsive layout (use percentages for width instead of pixels).
3. [Layout](https://www.figma.com/file/PmlVCACDkfFXnsHcJbZ0qU/belitsoft-HW07-MMG)

[Finished Page](https://starior.github.io/belitsoft_Course/HW07/index.html)

## HW08. What is GIT and What It Is For. Working with HTML Forms
- https://tproger.ru/translations/difference-between-git-and-github/
- https://tproger.ru/translations/beginner-git-cheatsheet/
- https://developer.mozilla.org/ru/docs/Learn/Common_questions/Using_Github_pages
- https://medium.com/nuances-of-programming/%D0%BA%D0%B0%D0%BA-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D1%82%D1%8C-%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D1%8B%D0%B9-%D1%81%D0%B0%D0%B9%D1%82-%D0%BD%D0%B0-github-pages-e0f3c258ee22
- https://losst.ru/kak-polzovatsya-github
- Forms.pdf

## HW09. Flexbox
Learn how CSS Flexbox works. See the attached links for articles and a game.
- https://tproger.ru/translations/how-css-flexbox-works/
- https://medium.com/@stasonmars/%D0%B2%D0%B5%CC%88%D1%80%D1%81%D1%82%D0%BA%D0%B0-%D0%BD%D0%B0-flexbox-%D0%B2-css-%D0%BF%D0%BE%D0%BB%D0%BD%D1%8B%D0%B8%CC%86-%D1%81%D0%BF%D1%80%D0%B0%D0%B2%D0%BE%D1%87%D0%BD%D0%B8%D0%BA-e26662cf87e0
- https://flexboxfroggy.com/#ru

## HW10. Responsive Flexbox Layout
1. Complete the layout of the first design #Frame1.
2. Create the layout for [#Frame1](https://www.figma.com/file/MzVWyx61C5H5U0pNO9KIdC/belitsoft-HW10-ResponsiveLayout).
3. Create a responsive Flexbox layout for [#Frame2](https://www.figma.com/file/MzVWyx61C5H5U0pNO9KIdC/belitsoft-HW10-ResponsiveLayout). The header must be a separate block, not part of 'content-top'. Hint: position the header where needed.

[Finished Page](https://starior.github.io/belitsoft_Course/HW10/index0.html)

## HW11.1. Flexbox and SCSS Layout
1. Read about SCSS (materials via the link).
2. Complete the block with background image according to the design.
3. Put this block in a separate HTML file (e.g. header.html). Create index.kit instead of index.html and include header.html in it. Prepros will compile index.html (similar to how SCSS compiles to CSS).

[Layout](https://www.figma.com/file/UvnvsYwUKAVa0MPg0VTz0s/belitsoft-HW11-Berlin)

/* ---Code for index.kit file---*/
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
## HW11.2. CSS Flexbox Layout
Create an adaptive layout; try to identify visually similar blocks and make them global elements (as with buttons).

[Layout](https://www.figma.com/file/UvnvsYwUKAVa0MPg0VTz0s/belitsoft-HW11-Berlin)

[Finished Page](https://starior.github.io/belitsoft_Course/HW11/index.html)

# JavaScript

## HW12. JavaScript 1. Introduction. JS Basics
Create an HTML file with a `<script>` tag. In the JS file (path specified in `<script>`), complete the following and write code:
1) Show an alert "Hello, this is the work of (Your Last Name and First Name)".
2) Declare variables for: the name of our planet, your age; give them proper names and show them in an alert.
3) Declare variables for your first name, last name, age and show in an alert: "Hello, my name is FIRSTNAME LASTNAME, I am AGE years old".
4) Use prompt to get the name of the person checking your work, then show "My work is checked by NAME".
5) Write answers to the following (in code) and comment them out:
   5.1) What will variables (a, b, c, d) equal in the example below?
```js
let a = 1, b = 1;
let c = ++a;
let d = b++;
```
   5.2) What will variables (a, b, x, y) equal after the code below runs?
```js
let a = 3;
let b = 2;
let x = 1 + (a += 2);
let y = 1 + (b *= 2);
```
## HW13. JavaScript 2. JS Basics
In the JS file complete:
1) Output English football champions by year (2011–2021). Use prompt to get the year. Add conditions:
   1.1 If year < 2011 — show "Statistics were not kept yet".
   1.2 If year 2022 — "Season is still in progress".
   1.3 If year > 2022 — "The best is yet to come!"
   1.4 If year is valid — use the teams:
      1.4.1 For 2015, 2017 — "Winner: Chelsea FC"
      for 2012, 2014, 2018, 2019, 2021 — "Winner: Manchester City FC"
      for 2011, 2013 — "Winner: Manchester United FC"
      for 2020 — "Winner: Liverpool FC"
      for 2016 — "Winner: Leicester City FC"
   You can use if..else or the "?" operator with || (&&).

2) Using a for loop, output odd numbers from 7 to 15. When you reach 12, break and show "12. Loop broken".
3) Rewrite using while:
```js
for (let j = 0; j < 5; j++) {
  alert( `number ${j}!` );
}
```

## HW14. JavaScript 3. JS Basics (Functions)
1) Complete the function `howManyDays`. It takes one parameter — month (month of the year). Different months have different days (Table 1). The function returns the number of days in that month. (default is optional.)

Table 1
| Month           | Days |
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

2) Write a function `max(a, b)` that returns the greater of a and b (using the ternary operator).
3) Write a function `pow(x, n)` that returns x to the power of n (n > 0).
4) Create a function that takes 2 numbers, computes their product, checks if it is even or odd and outputs text via console.log.

```js
function calcMultiplication(numOne, numTwo, oddNum, evenNum);
```
oddNum, evenNum are callback functions.

## HW15. JavaScript 4. Objects: Basics
1) Create a function that calculates the length of a train.
```js
let train = {
     isLocomotive : true,
     locomotiveLength  : 25,
     locomotiveColor  : black,
     isFreightCar  : false,
     freightCarLength  : 30,
     isCoachCar  : true,
     totalCoachCars : 9,
     coachLength  : 20,
 };
```
Train length is the sum of existing cars and their counts.

2) Create an object for your favourite car with properties (brand, color, number of doors, horsepower, engine capacity, manual/automatic) and clone it using the two methods we covered.

3) In the book object, output to the console the keys whose values are of boolean type.
```js
let book = {
     numberOfPages : 545,
     cover  : true,
     isTheAuthorAlive  : false,
     isBestseller  : true,
     booksEditions  : 20000000,
 };
```

## HW16. JavaScript 5. Objects
1)
```js
function animal(obj){
  return ?
}
```
Write code that returns the string `"This black cat has 4 legs"` from the object `{name:"cat", legs:4, color:"black"}`.

2) Create a constructor function Calculator with three methods:
read() — prompts for two values and stores them in the object.
sum() — returns the sum of those values.
mul() — returns the product of those values.

## HW17. JavaScript 6. Strings. Arrays. String and Array Methods
1) Write a function `funcName(loremString)` that returns "true" if the string contains the substrings "lorem", "ipsum" and "amet". Consider accidental Caps Lock and a leading space.
2) Write a function `funcName(str)` that returns str with the first character capitalized.
3) Write a function `funcName(str, maxLength)` that checks the length and, if it exceeds maxLength, truncates to maxLength + "...".
4) Make the motto true: `let myLifeMotto = ["I", "understand", "something", "in", "JavaScript"];`
5) Iterate the array. Names containing "a" go to "teamA"; those containing "H" go to "teamH".
   `let harryPotterTeam = ["Albus", "Hermione", "Ronald", "Draco", "Neville"]`
6) Get and output the sum and product of all numeric values in the array `let arr = [6, 3, "ten", 12, true, "4"]`.
7) Get a new array of squares: `let numArr = [1, 3, 5, 7, 9]`.

## HW18. JavaScript 7. Array Methods
1) Given `[1, 2, 3, 4, 5]` and `['Text', 'Audio', 'Video']`, combine into one array and reverse the order.
2) 2.1 Get the average age of all participants in the squad. 2.2 Convert to an array of names only.
```js
let dumbledoresArmy  = [
   {age: 15, name: "Harry", wasThere: true},
   ...
 ];
```
3) 3.1 Copy to arrCopy and sort ascending. 3.2 Keep only negative numbers, then sort descending. 3.3 Square each element, sort ascending, then output as a single string.
   `let arr = [14, 15, 1, -10, -8, 0, 12, -11];`
4) 4.1 Output each element and its index (e.g. Index 0 — 44). 4.2 Output the maximum. 4.3 Find the index (or indices) of the maximum.
   `let numbers = [44, 35, 76, 2, 65, 71, 3, 55, 76];`
5) 5.1 Output the array of names in uppercase. 5.2 Create an array of student marks only and compute the average.
6) Find how many of the first elements must be summed so the sum is greater than 10.
   `let arr = [1, 2, 3, 0, 12, 1, 3]`

## HW19-HW20. JavaScript 8-9. DOM
1. https://learn.javascript.ru/document
2. https://www.youtube.com/watch?v=DuWyc76lYC4&t=3608s
   https://www.youtube.com/watch?v=TEeKr2ON66A&t=15s

# HTML-CSS-JS-project

## HW21

Layout requirements:
- Adaptive layout
- Flexbox layout
- HTML, SCSS (any build tool)
- BEM
- Mobile version
- Page hosted on GitHub Pages

JS requirements:
- On scroll down, header stays fixed at the top and changes color to #F4EC98. When scrolling back to the top, restore the original color.
- Buttons must be clickable and change style (via JS).
- Some elements should get a shadow on hover.
- Send button: if any of name, email, phone is empty, it must not submit.
- Implement a burger menu.
- "View all" button should show all cards.
- Show all elements (full info) when clicking the checkmark (mini view all).

[Layout on Figma](https://www.figma.com/file/k8WLHJBkbZatuCgHXnPY5j/Student-Project)

[Finished Page](https://starior.github.io/belitsoft_Course/HW21_Project_HTML-CSS-JS/index.html)

# Node.js

## HW22
1. Initialize package.json
2. Install nodemon
3. Create server.js (add "server" to scripts; run with npm run server):
    1. Create server (http module, port 3000)
    2. Handle route /json returning JSON (Content-Type: application/json)
    3. Create 3 HTML files (about, index, services) with any content and handle routes (/, /about, /services). Response must be the file contents.
    4. All other routes (e.g. /contacts) must return 404 (use the appropriate status code; error text is optional).
    5. Handle POST, PUT, DELETE, PATCH: handle /post, /put, /delete, /patch. Response can be any text (e.g. method name).

# Node.js Miniproject

## HW23
Use the following structure: two folders — client and server.

### **SERVER PART**
Packages: express, body-parser, mongoose, nodemon. Entry point: index.js. Add script "start" to run index.js via nodemon.

1. Entities and relations:
  1.1 Post: name (required), body (required), excerpt, categories (required, one-to-many), tags (required, one-to-many), author (required, one-to-one), createdAt, updatedAt.
  1.2 Category: name (required), excerpt, createdAt, updatedAt.
  1.3 Tag: name (required), createdAt, updatedAt.
  1.4 Author: name (required), email (required), createdAt, updatedAt.
   (Optional extra fields. createdAt/updatedAt: see https://mongoosejs.com/docs/guide.html#timestamps)

   Implement CRUD for each entity. Use naming: find, findOne, create, update, remove.

2. Structure: routes per entity (e.g. routes/posts.js), controller per entity (controllers/posts.js), model per entity (models/post.js).

3. API: JSON format, use status codes, follow JSON API naming, handle errors (e.g. update/remove non-existent document).

4. Add middleware for all routes to log requests: route, method, params (if any), body (if any), date and time. Save logs to logs.json.

### **CLIENT PART (templating)**
Packages: express, nodemon, mongodb, and a templating engine (pug, ejs, express-handlebars, etc.).
1. Pages: Home — list of all posts; Post page — single post.
2. Use any ready-made layout from the web; remove what you don’t need and display all available data.
3. Do not use Mongoose; use MVC; choose one templating engine.

Extra:
- SERVER: Add optional thumbnail field to Post.
- CLIENT: Category page (posts in that category); Tag page (posts with that tag).
