export const API_URL = 'https://randomuser.me/api/?results=8'

const fetchAPI = () => new Promise(function (resolve, reject) {
  https.get(API_URL, (res) => {
    res.setEncoding('utf8');
    let userInfo = '';
    res.on('data', (data) => {
      userInfo += data;
    });
    res.on('error', reject);
    res.on('close', () => resolve(JSON.parse(userInfo).results[0]));
  });
});

module.exports = { fetchAPI }
