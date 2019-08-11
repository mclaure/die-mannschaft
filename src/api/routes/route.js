'use strict';

module.exports = function(app) {

  var sqlite3 = require('../controllers/SQLiteController');
  var mysql = require('../controllers/MySQLController');

  //SQLite3
  app.route('/api/sqlite/countries/')
    .get(sqlite3.list_all_countries);

  app.route('/api/sqlite/teams/')
    .get(sqlite3.list_all_teams);    

  app.route('/api/sqlite/leagues/')
    .get(sqlite3.list_all_leagues);       

  app.route('/api/sqlite/player/:id')
    .get(sqlite3.get_player_info);          

  app.route('/api/sqlite/summary/:season')
    .get(sqlite3.get_summary_per_season); 
  
  //MySQL
  app.route('/api/mysql/countries/')
  .get(mysql.list_all_countries);

  app.route('/api/mysql/teams/')
  .get(mysql.list_all_teams);  

  app.route('/api/mysql/leagues/')
    .get(mysql.list_all_leagues);       

  app.route('/api/mysql/player/:id')
    .get(mysql.get_player_info);   
    
  app.route('/api/mysql/summary/:season')
    .get(mysql.get_summary_per_season);     
};