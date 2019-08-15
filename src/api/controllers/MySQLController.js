'use strict';

var config = require('./settings');
var mysql = require("mysql");

//Creates DB connection
var mysqlConn = mysql.createConnection({
    host     : config.mysql.host,
    user     : config.mysql.user,
    password : config.mysql.password,
    database : config.mysql.database
  });

exports.list_all_countries = (req, res, next) => {
    let sql = "SELECT id \
                    ,name \
               FROM Country;";
    var params = [];

    mysqlConn.query(sql, function (error, rows, fields) {
		if (error) throw error;
        return res.json({"countries":rows});
    });
};

exports.list_all_teams = (req, res, next) => {
    let sql = 'SELECT id \
                     ,team_long_name AS full_name \
                     ,team_short_name AS short_name \
               FROM Team;';
    var params = [];

    mysqlConn.query(sql, function (error, rows, fields) {
		if (error) throw error;
        return res.json({"teams":rows});
    });
};

exports.list_all_leagues = (req, res, next) => {
    let sql = 'SELECT id \
                     ,name \
               FROM League;';
    var params = [];

    mysqlConn.query(sql, function (error, rows, fields) {
		if (error) throw error;
        return res.json({"leagues":rows});
    });
};

exports.get_player_info = (req, res, next) => {
    let sql = "SELECT id AS id \
                     ,player_name AS name \
                     ,DATE('now')-birthday AS age \
                     ,weight \
                     ,height \
               FROM Player WHERE id = ?;";
    let params = [req.query.id];
    mysqlConn.query(sql, params, function (error, rows, fields) {
        if (error) throw error;
        else {
            if(rows) return res.json({ "player" : rows });
            return res.json({ "player" : "Not Found" });
        }  
    });
};

exports.get_summary_per_season = (req, res, next) => {
    let sql = "SELECT ct.name AS country \
                     ,le.name AS league \
                     ,mtc.season \
                     ,mtc.stage \
                     ,COUNT(*) AS total_matchs \
                     ,SUM(home_team_goal + away_team_goal) AS total_goals \
                     ,ROUND(AVG(home_team_goal + away_team_goal),0) AS average_goal_per_match \
               FROM soccer.Match      mtc \
               INNER JOIN soccer.Country ct ON (mtc.country_id = ct.id) \
               INNER JOIN soccer.League  le ON (mtc.league_id = le.id) \
               WHERE mtc.season LIKE ? \
               GROUP BY  ct.name \
                        ,le.name \
                        ,mtc.season \
                        ,mtc.stage;";
    let params = "%" + [req.query.season] + "%";

    mysqlConn.query(sql, params, function (error, rows, fields) {
        if (error) throw error;
        else {
            if(rows) return res.json({ "seasons" : rows });
            return res.json({ "seasons" : "Not Found" });
        }  
    });
};