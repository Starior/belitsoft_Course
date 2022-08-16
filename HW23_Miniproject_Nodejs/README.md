## Node.js practice / hw2
Use the following structure: two folders — client and server.

## SERVER PART
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

## CLIENT PART (templating)
Packages: express, nodemon, mongodb, and a templating engine (pug, ejs, express-handlebars, etc.).
1. Pages: Home — list of all posts; Post page — single post.
2. Use any ready-made layout from the web; remove what you don't need and display all available data.
3. Do not use Mongoose; use MVC; choose one templating engine.

Extra:
- SERVER: Add optional thumbnail field to Post.
- CLIENT: Category page (posts in that category); Tag page (posts with that tag).
