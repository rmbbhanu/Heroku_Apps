'user strict';
var sql = require('../db.js');

//Attendance object constructor
var Attendance = function(attendance){
    this.a_id=attendance.a_id;
    this.class_name=attendance.class_name;
    this.s_id=attendance.s_id;
    this.course_name=attendance.course_name;
    this.status=attendance.status;
};
Attendance.createAttendance = function (newAttendance, result) {
        sql.query("INSERT INTO attendance set ?", newAttendance, function (err, res) {

                // if(err) {
                //     console.log("error: ", err);
                //     result(err, null);
                // }
                // else{
                //     console.log(res.insertId);
                //     result(null, res.insertId);
                // }
                if(err) {
                    if(err.code == 'ER_DUP_ENTRY' || err.errno == 1062)
                    {
                        console.log('error: ',err.sqlMessage);
                    }
                    else{
                    console.log("error: ", err);
                    result(err, null);
                    }    
                }
                else if(!err){
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });
};
Attendance.getAttendanceById = function (attendanceId, result) {
        sql.query("Select * from attendance where a_id = ? ", attendanceId, function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);

                }
            });
};
Attendance.getAllAttendance = function (result) {
        sql.query("Select * from attendance", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                //   console.log('attendance : ', res);

                 result(null, res);
                }
            });
};
Attendance.updateById = function(id, attendance, result){
  sql.query("UPDATE attendance SET class_name=?,course_name=?,status=?,s_id=? WHERE a_id = ?", [attendance.class_name,attendance.course_name,attendance.status,attendance.s_id,id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{
             result(null, res);
                }
            });
};
Attendance.remove = function(id, result){
     sql.query("DELETE FROM attendance WHERE a_id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{

                 result(null, res);
                }
            });
};

module.exports= Attendance;
