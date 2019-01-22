const UserController  = require('../controllers/UserControllers');

module.exports = (server) => {
  server.route('/testing')
    .get(UserController.testRoute);
}