const redis = require('redis');

const app = require('./app');

const PORT = process.env.PORT || 3000;

let client = redis.createClient();

client.on('connect', () => {
  console.log('connected to redis..');
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
