var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs290_chensiya',
  password        : '1971',
  database        : 'cs290_chensiya'
});

module.exports.pool = pool;
