
  

# Awake-Heroku

  

## Installation

  

First install [Node.js](http://nodejs.org/) . Then:

  

```$ npm install awake-heroku --save```

## Importing

```

// Using Node.js `require()`

const AwakeHeroku = require('awake-heroku');

```

  

## Usage
*Insert under code to your index file of your project such as : app.js, index.js, root.js , ...* 

```

// Using Node.js

const AwakeHeroku = require('awake-heroku');

const awakeHeroku = new AwakeHeroku("your-app-name","period-time")

//your-app-name.herokuapp.com

//period-time : it's time you want to wakeup your heroku app

//Start auto wakeup

awakeHeroku.start();

```

  

## Another functions

```
// Using Node.js

const AwakeHeroku = require('awake-heroku');

const awakeHeroku = new AwakeHeroku("your-app-name","period-time")

//your-app-name.herokuapp.com

//period-time : it's time you want to wakeup your heroku app

  

//Start auto wakeup
awakeHeroku.start();


//Stop auto wakeup
awakeHeroku.stop();

//Set new app name
awakeHeroku.setAppName("new-app-name");

//Setnew peirod time
awakeHeroku.setTime("new-period-time");

  
  

```