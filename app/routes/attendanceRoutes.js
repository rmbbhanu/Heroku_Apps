'use strict';
module.exports = function(app) {
  var Attendance = require('../controller/attendanceController');

  // todoList Routes
  app.route('/attendance')
    .get(Attendance.list_all_attendance)
    .post(Attendance.create_a_attendance);

   app.route('/attendance/:attendanceId')
    .get(Attendance.read_a_attendance)
    .put(Attendance.update_a_attendance)
    .delete(Attendance.delete_a_attendance);
    };
