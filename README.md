# Awake-Heroku
## Installation

 - Install [Node.js](http://nodejs.org/) 
 - ```$ npm install awake-heroku --save```


### Types
**IAppInfo**
|Field  |Required  | Type | Description
|--|--|--|--|
| id | false | number| Unique ID 
| url | true | string | Your URL you want wakeup
| lastHeartBeat | false |number | Last time wakeup

**IAwakeService**
|Field    | Type | Description
|--|--|--|--|
| listApp  | IAppInfo[]| List heroku applications (app)
| add  | void | Add new herou app to wakeup
| remove  |void | Remove heroku app and stop wakeup that
| show  |void | Get info heroku app by id
| showAll  |void | Get all info heroku apps
| awake  |void |Wakeup heroku app

## Usage

*Insert under code to  index file of your project such as : app.js, index.js, root.js , ...*

#### When you want awake 1 heroku application
```
const { AwakeHeroku } = require('awake-heroku');

AwakeService.add({
	url: "https://your-app-name.herokuapp.com"
})
```
#### When you want awake more heroku applications
```
const { AwakeHeroku } = require('awake-heroku');

AwakeService.add({
	url: "https://your-app-name1.herokuapp.com"
})
AwakeService.add({
	url: "https://your-app-name2.herokuapp.com"
})
AwakeService.add({
	url: "https://your-app-name3.herokuapp.com"
})
```


## CLI
*Comming soon*
