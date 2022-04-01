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

10. router.post(
    "/create-session",
    passport.authenticate("jwt", { session: false }),
    usersApi.createSession
    );

    passport.authenticate("jwt", { session: false }),
    here you need to send the Authorization Bearer token in the request from the frontend to
    backend to authenticate the user
    postman -- > request --> Header --> Authorization : Bearer token_generated for user

BRANCH : jobs_mailer

11. For sending or requsting simple we use HTTP or HTTPS protocols
    but for emails we use SMTP (simple mail transfer protocol)

    a. Nodemailer
    b. config
    c. mailer
    d. Templates (html content etc.)

    npm install nodemailer

    config/nodemailer.js
    mailers/

    if google do not allow to send email then : search : ENABLE LESS SECURE APPS
    to -> myaccount.google.com/lesssecureapp -> Off/ONN the switch /toggle

12. Delayed Jobs
    Here put task inside some queue , and can be sent to user with some Delay
    KUE :
    npm install kue (priority queue backed by redis (for nodejs))

    Example : let 's have 3 queues for which we need emails to be send to the user

            -> generall emails | 3
            -> notifications   | 2
            -> otp             | 1

            high priority is of otp then notifications and then last is for general emails

            there is a kue worker for each of the queues, so here there will be 3 kue workers
            these worker will ask the queue every after fews second as per the priority, if any task the executes it else it again goes to sleep
            for sometime.

            REDIS server maintains therese KUE queues. REDIS store the data in json form and stored in RAM, so if system gets off
            then the data of queues get vanished.



            KUE workers (pointer to above 3 queue) --- ASK ---> REDIS(JSON form)(ask if there is any task for them based on priority) --->



        Need to install redis : Ubuntu
            1. sudo apt-get update
            2. sudo apt-get upgrade
            3. sudo apt-get install redis-server

        a.redis runs in background
        b.to run redis : redis-server
        c.check if redis running : redis-cli ping  ---> if redis running output would be 'pong'
        d.USE of redis : act as a in-memory data structure (act as RAM), or can be used as a cache
        ex: if some vedio gets viral, then if many user searches for it. Then instead of taking everytime from the backend database we
        can store it in redis cache and respond to the user very fastly.


        intial config : /config/kue.js
        setting workers: workers/

        GUI redis : run --> cd codeial --> ./node_modules/kue/bin/kue-dashboard  --> it will run on a port: 3000

        in other languages we have multi-threading to run the delayed jobs - > java, ruby on rails etc.

13. Async and Await in Nodejs

14. File Uploading

    image/vedio
    store in local/aws
    (FE/ BE ) -----> path of the data is stored at DB ---> FE make req of that path to server

    npm install multer

    -> Note in case of uploading, in nodejs you cannot directly access the data as req.params.value
    because file will be of uplaod so, parse cannot parse that
