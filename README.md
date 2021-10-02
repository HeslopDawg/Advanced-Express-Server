# Advanced-Express-Server
A Semi Advanced Express Server. this project is currently in the works with getting auth manager and a basic admin portal along with a few management key stuff


## Some of the features this project will have

- Auth Manager/Token Manager
- Admin Panel
- Advanced HTML/CSS/JS usage
- YouTube tools (Editing video descriptions when you login with your google account)
- Development mode/Maintenance mode
- Overall advanced website setup and you having the ability to fully customize it to your wishes.

## Documents & Community (By Express)

  * [Website and Documentation](http://expressjs.com/) - [[website repo](https://github.com/expressjs/expressjs.com)]
  * [#express](https://webchat.freenode.net/?channels=express) on freenode IRC
  * [GitHub Organization](https://github.com/expressjs) for Official Middleware & Modules
  * Visit the [Wiki](https://github.com/expressjs/express/wiki)
  * [Google Group](https://groups.google.com/group/express-js) for discussion
  * [Gitter](https://gitter.im/expressjs/express) for support and discussion

**PROTIP** Be sure to read [Migrating from 3.x to 4.x](https://github.com/expressjs/express/wiki/Migrating-from-3.x-to-4.x) as well as [New features in 4.x](https://github.com/expressjs/express/wiki/New-features-in-4.x).

## Quick Start

  The quickest way to get started with express is to utilize the executable [`express(1)`](https://github.com/expressjs/generator) to generate an application as shown below:

  Install dependencies:

```bash
$ npm install
```

  Create the main server file:

```js
var express = require('express');
var app = express();
var path = require('path');

app.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
  });

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/root/index.html'));
});

app.use((req, res,next)=>{
    res.sendFile(path.join(__dirname + '/root/errors/404.html'));
}); 

// Server Start up function.
var server = app.listen( process.env.PORT || 2000, function(){
    console.log('Listening on port ' + server.address().port);
});
```

  Start the server:

```bash
$ npm start
$ node .
$ node server.js
```


  View the website at: http://localhost:2000


## Examples (By Express)

  To view the examples, clone the Express repo and install the dependencies:

```bash
$ git clone git://github.com/express/express.git --depth 1
$ cd express
$ npm install
```

  Then run whichever example you want:

```bash
$ node examples/content-negotiation
```

## License

  [MIT](LICENSE)
