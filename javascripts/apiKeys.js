const firebaseApi = require('./firebaseApi');

const apiKeys = () => {
  return new Promise((resolve, reject) => {
    $.ajax('./db/apiKeys.json')
      .done((data) => {
        resolve(data);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const retrieveKeys = () => {
  return new Promise((resolve, reject) => {
    apiKeys()
      .then((results) => {
        firebaseApi.setConfig(results.firebase);
        firebase.initializeApp(results.firebase);
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
};

module.exports = {
  retrieveKeys,
};
