const redis = require("redis");
//using redis db to avoid duplicate keys
exports.saveSet = async function (key, value) {
  return new Promise((resolve, reject) => {
    const client = redis.createClient({});
    client.on("error", function (error) {
      reject(error)
    });
    client.SETNX(key, value, resolve("done"))
  })
}



