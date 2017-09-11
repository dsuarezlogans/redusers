const UserService = require('../services/UserServices');

const getUser = (req, res) => {
  const id = req.body.id;

  UserService.findUser(id)
    .then(result => {
      res.render('details', {
        user: result
      });
    })
    .catch(err => {
      res.render('searchusers', err);
    });
};

const addUser = (req, res) => {
  const user = req.body;

  UserService.postUser(user)
    .then(result => {
      console.log(result);
      res.redirect('/');
    })
    .catch(err => {
      console.error(err.error);
      res.render('addusers', err);
    });
};

const removeUser = (req, res) => {
  const id = req.params.id;

  UserService.deleteUser(id)
    .then(result => {
      console.log(result);
      res.redirect('/');
    })
    .catch(err => {
      console.log(err.error);
      res.render('details', err);
    });
};

module.exports = {
  getUser,
  addUser,
  removeUser
};
