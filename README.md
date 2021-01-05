# Awake-Heroku

## Installation

- Install [Node.js](http://nodejs.org/)

- `$ npm install awake-heroku --save`

### Types

**IAppInfo**

| Field         | Required | Type   | Description              |
| ------------- | -------- | ------ | ------------------------ |
| id            | false    | number | Unique ID                |
| url           | true     | string | Your URL you want wakeup |
| lastHeartBeat | false    | number | Last time wakeup         |

**IAwakeService**

| Field  | Type       | Description                            |
| ------ | ---------- | -------------------------------------- |
| add    | void       | Add new herou app to wakeup            |
| remove | void       | Remove heroku app and stop wakeup that |
| get    | void       | Get heroku infomation by id            |
| getAll | IAppInfo[] | List heroku applications (app)         |
| start  | void       | Start wakeup your heroku apps          |
| stop   | void       | Stop wakeup your heroku apps           |

## Usage

_Insert bellow lines to index file of your project such as : app.js, index.js, root.js , ..._

#### Using ES6

```typescript
const { AwakeHeroku } = require("awake-heroku");

AwakeHeroku.add("https://your-app-nam-1.herokuapp.com");
AwakeHeroku.add("https://your-app-name-2.herokuapp.com");

// Start service
AwakeHeroku.start();
```

#### Using CommonJS

```typescript
import { AwakeHeroku } from "awake-heroku";

AwakeHeroku.add("https://your-app-nam-1.herokuapp.com");
AwakeHeroku.add("https://your-app-name-2.herokuapp.com");

// Start service
AwakeHeroku.start();
```

#### To stop using AwakeHeroku

```typescript
import AwakeHeroku from "awake-heroku";
// Stop service
AwakeHeroku.stop();
```

## Please feel free to submit your issue or request feature

Create : [https://github.com/quangpl/awake-heroku/issues/new](https://github.com/quangpl/awake-heroku/issues/new)

## Roadmap

&check; MVP version

&check; Convert to Typescript

&check; Support wakeup multi-applications

&check; Send HTTP request by lightwieght

&check; Prepare structure to create CLI

&cross; Error Handler

&cross; Create CLI
