const router = require('express').Router();
const UserCtrl = require('../controllers/UserController');

router
  .route('/')
  .get((req, res) => res.render('searchusers', { homeActive: 'active' }));

router
  .route('/user/add')
  .get((req, res) => res.render('addusers', { addUserActive: 'active' }))
  .post(UserCtrl.addUser);

router.route('/user/search').post(UserCtrl.getUser);

router.route('/user/delete/:id').delete(UserCtrl.removeUser);

module.exports = router;
