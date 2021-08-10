Hey :)
** structure
My project structure: Express server setup at src/index.ts
It has a single route for parsing the inserted url in src/routes
This route uses a service that actually does the job of dispatching the task to another node process.(done using spawn)
In the utils folder you will found 2 files:
1. redis.js that saves key and value sets to a redis db without duplicates.
2. parser.js that parses the url to it's suburls and their htmls. this file uses the redis.js file to save the relevant data to the db. Mind that the parse function in that file returns the sub urls even though they are not needed. That is for generality purposes.

** Downsides:
1. In my opinion my recursion function isn;t=='t perfect but i didn't want to waste much time on that issue.
2. That was my first time using redis db. It was fun and i can see the potential but not sure I used it the best way possible.

** How to run
1. npm install
2. npm run dev - server will start at port 7000
3. start reddis server at redis-server/64bit/redis-server.exe
4. start playing
