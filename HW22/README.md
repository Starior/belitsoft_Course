# Node.js practice for belitsoft
## HW22
1. Initialize package.json
2. Install nodemon
3. Create server.js (add "server" to scripts; run with npm run server)
    3.1. Create server (http module, port 3000)
    3.2. Handle route /json returning JSON (Content-Type: application/json)
    3.3. Create 3 HTML files (about, index, services) with any content and handle routes (/, /about, /services). Response must be the file contents.
    3.4. All other routes (e.g. /contacts) must return 404 (use the appropriate status code; error text is optional)
    3.5. Handle POST, PUT, DELETE, PATCH: handle /post, /put, /delete, /patch. Response can be any text (e.g. method name).
