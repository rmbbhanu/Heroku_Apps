'use strict';

var Attendance = require('../model/attendanceModel');

exports.list_all_attendance = function(req, res) {
    Attendance.getAllAttendance(function(err, attendance) {

    console.log('controller')
    if (err)
      res.send(err);
      // console.log('res', student);
    res.send(attendance);
  });
};



exports.create_a_attendance = function(req, res) {
  var new_attendance = new Attendance(req.body);

  //handles null error
   if(!new_attendance.class_name || !new_attendance.status || !new_attendance.course_name|| !new_attendance.s_id  ){

            res.status(400).send({ error:true, message: 'Please provide all the field for Attendance ' });

        }
else{
  Attendance.createAttendance(new_attendance, function(err, attendance) {

    if (err)
      res.send(err);
//    res.json(attendance);
    res.json({message:'Attendance added succesfully'})
  });

  }
};


exports.read_a_attendance = function(req, res) {
  Attendance.getAttendanceById(req.params.attendanceId, function(err, attendance) {
    if (err)
      res.send(err);
    res.json(attendance);
  });
};


exports.update_a_attendance = function(req, res) {
  Attendance.updateById(req.params.attendanceId, new Attendance(req.body), function(err, attendance) {
    if (err)
      res.send(err);
    res.json(attendance);
  });
};


exports.delete_a_attendance = function(req, res) {


  Attendance.remove( req.params.attendanceId, function(err, attendance) {
    if (err)
      res.send(err);
    res.json({ message: 'Attendance successfully deleted' });
  });
};
