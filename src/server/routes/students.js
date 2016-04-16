var express = require('express');
var router = express.Router();
var Student = require('../models/students');

// GET ALL students
router.get('/', function (req, res, next) {
  Student.find({})
  .then(function(students) {
    res.status(200).json({
      status: 'success',
      data: students
    });
  })
  .catch(function (err) {
    return next(err);
  });
});

// GET single students
router.get('/:id', function (req, res, next) {
  Student.findById(req.params.id)
  .then(function (student) {
    res.status(200).json({
      status:'success',
      data: student
    });
  })
  .catch(function (err) {
    return next(err);
  });
});

// add student
router.post('/', function (req, res, next) {
  var student = new Student(req.body);
  student.save()
  .then(function (student) {
    res.status(200).json({
      status: 'success',
      data: student
    });
  })
  .catch(function (err) {
    return next(err);
  });
});

// update student
router.put('/:id', function (req, res, next) {
  var student_id = req.params.id;
  var option = req.body;
  Student.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(function (student) {
    res.status(200).json({
      status: 'success',
      data: student
    });
  })
  .catch(function (err) {
    return next(err);
  });
});

// remove student
router.delete('/:id', function (req, res, next) {
  Student.findByIdAndRemove(req.params.id)
  .then(function (student) {
    res.status(200).json({
      status: 'success',
      data: student
    });
  })
  .catch(function (err) {
    return next(err);
  });
});


module.exports = router;