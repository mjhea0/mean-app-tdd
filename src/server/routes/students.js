var express = require('express');
var router = express.Router();
var Student = require('../models/students');

// GET ALL students
router.get('/', function(req, res, next) {
  Student.find({}, function(err, students) {
    if(err) {
      return next(err);
    }
    res.status(200).json({
      status: 'success',
      data: students
    });
  });
});

// GET single students
router.get('/:id', function(req, res, next) {
  var studentID = req.params.id;
  Student.findById(studentID, function(err, student) {
    if(err) {
      return next(err);
    }
    res.status(200).json({
      status: 'success',
      data: student
    });
  });
});

// add student
router.post('/', function(req, res, next) {
  var student = new Student(req.body);
  student.save(function(err, student) {
    if(err) {
      return next(err);
    }
    res.status(200).json({
      status: 'success',
      data: student
    });
  });
});

// update student
router.put('/:id', function(req, res, next) {
  var studentID = req.params.id;
  Student.findByIdAndUpdate(studentID, req.body, {new: true},
    function(err, student) {
    if(err) {
      return next(err);
    }
    res.status(200).json({
      status: 'success',
      data: student
    });
  });
});

// remove student
router.delete('/:id', function(req, res, next) {
  var studentID = req.params.id;
  Student.findByIdAndRemove(studentID, function(err, student) {
    if(err) {
      return next(err);
    }
    res.status(200).json({
      status: 'success',
      data: student
    });
  });
});


module.exports = router;
