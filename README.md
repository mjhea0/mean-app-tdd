# Developing a RESTful MEAN App

Let's build a full-stack RESTful MEAN app, utilizing TDD.

## Server

### Project Setup

```sh
$ mkdir mean-crud-app && cd mean-crud-app
$ yo galvanize-express
```

Remove Swig. Wait. Why?

```sh
$ npm install
$ npm install mongoose --save
```

### Test Setup

Follow the guide [here](https://github.com/gSchool/g19-course-curriculum/tree/master/week15/15_lectures/writing-da-tests).

### Mongo Setup

Add a *_config.js* file to the "src" directory:

```javascript
var config = {};

config.mongoURI = {
  development: 'mongodb://localhost/first-mean-app',
  test: 'mongodb://localhost/first-mean-app-testing'
};

module.exports = config;
```

Connect to Mongo within *app.js*:

```javascript
var mongoURI = config.mongoURI[app.settings.env];

mongoose.connect(mongoURI, function(err, res) {
  if (err) {
    console.log('Error connecting to the database. ' + err);
  } else {
    console.log('Connected to Database: ' + config.mongoURI[app.settings.env]);
  }
});
```

### Mongoose Setup

Create a "models" directory, adding each model to a different file:

1. `house`
  - `_id`
  - `name` (string, required, not null, unique)
1. `student`
  - `_id`
  - `firstName` (string, required, not null)
  - `lastName` (string, required, not null, unique)
  - `year` (number, required, not null)
  - `house_id` (references `_id` from the `house` collection)

### CRUD Routes

TDD. Red. Green. Refactor. We're writing integration tests. Why? How do you know?

1. Red: Write a test and make sure it fails
1. Green: Write just enough code to get the test to pass
1. Refactor: Refactor your test and/or code

Follow this process for all the CRUD routes, making sure to return appropriate JSON responses.

## Client

All you Wes...

### Project Setup

- Add Angular
- Serve up a single *index.html* file from the server
