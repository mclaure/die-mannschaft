'use strict';

module.exports = function(app) {

  var apiController = require('../controllers/controller');

  app.route('/api/countries/')
    .get(apiController.list_all_countries);

  app.route('/api/teams/')
    .get(apiController.list_all_teams);    

  app.route('/api/leagues/')
    .get(apiController.list_all_leagues);       

  app.route('/api/player/:id')
    .get(apiController.get_player_info);          
};