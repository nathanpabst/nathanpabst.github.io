const data = require('./data');
const firebaseApi = require('./firebaseApi');

const apiKeys = () => {
  return new Promise((resolve, reject) => {
    $.ajax('./db/apiKeys.json')
      .done((data) => {
        resolve(data.apiKeys);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const retrieveKeys = () => {
  apiKeys()
    .then((results) => {
      data.setKey(results.data.apiKey);
      firebaseApi.setConfig(results.firebase);
      firebase.initializeApp(results.firebase);
    })
    .catch((error) => {
      console.error('no keys', error);
    });
};

module.exports = {
  retrieveKeys,
};
