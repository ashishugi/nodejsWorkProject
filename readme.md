        <h1>GIT BRANCHES </h1>:

            1. <i>master</i>
            2. <i>manual-local-auth :</i>
            3. <i>API</i>

1.  nodemon index.js ===> package.json -> script -> "start":"nodemon index.js" ===> terminal ->
    npm start.

2.  Setting up EJS -> views
    : npm install ejs

    app.set("view engine",'ejs');
    app.set("views",'./views);

    src
    src/views

3.  body-parser : install to read the post data send to backend.
4.  Authentication
5.  Cookies : cookies are the files stored by the browser, and this file is sent to server with each
    and every request. server send back the files back to browser . User for auth at server and used
    to store some data.
    install : npm install cookie-parser
    how to see cookies in browser => inspect -> application -> cookies

    module.exports.home = function (req, res) {
    console.log(req.cookies); // you get the cookies from browser
    res.cookie("user_id", 12); // you change the value of cookie
    return res.end("<h1>Express for COdeial</h1>");
    };

6.  Auth using Passport.js

    NOTE :
    router.post("/create", usersController.create); // REQUEST , MIDDLE-WARE , ACTION(CALLBACK)
    middleware is called before the action/callback function is called

    Using stratergy : Passport-local
    npm install passport
    npm install passport-local

    Session Cookies -> these are encrypted
    npm install express-session // for encryption of cookies

    codeial/config/passport-local-stratergy.js ==> setup

7.  API:
    All the api's and its version's(ex : v1, v2) will have its own routing and index.js
    each version of API will have index

8.  PassPort + JWT

    npm install passport-jwt
    mention about this passport stratergy in index.js page, also make new passport-jwt-stratergy.js in
    /config file

9.  JSON WEB TOKEN
    npm install jsonwebtoken
