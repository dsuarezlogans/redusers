const client = require('redis').createClient();

const findUser = id => {
  return new Promise((resolve, reject) => {
    client.hgetall(id, (err, obj) => {
      if (err) {
        reject({
          errorMessage: `error searching for id ${id}`,
          error: err
        });
      } else if (!obj) {
        reject({ errorMessage: 'User does not exist' });
      } else {
        obj.id = id;
        resolve(obj);
      }
    });
  });
};

const postUser = user => {
  return new Promise((resolve, reject) => {
    client.hmset(
      user.id,
      [
        'firstName',
        user.firstName,
        'lastName',
        user.lastName,
        'email',
        user.email,
        'phone',
        user.phone
      ],
      (err, reply) => {
        if (err) {
          reject({
            errorMessage: `error saving user ${user.id}`,
            error: err
          });
        } else {
          resolve(reply);
        }
      }
    );
  });
};

const deleteUser = id => {
  return new Promise((resolve, reject) => {
    client.del(id, (err, reply) => {
      if (err) {
        reject({
          errorMessage: `error deleting for id ${id}`,
          error: err
        });
      } else {
        resolve(reply);
      }
    });
  });
};

module.exports = {
  findUser,
  postUser,
  deleteUser
};
