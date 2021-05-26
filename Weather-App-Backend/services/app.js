 const bodyParser = require("body-parser");



module.exports.getWeatherReport = async (options) => {
    return new Promise(async (resolve, reject) => {
        options.mDbClient.connect(async (err, client) => {
            console.log("Connected successfully to  mdb server",options.location);
            try {
                var db = client.db("weatherdb");
                db.collection('weather').find({ place: options.location } ).toArray(function (err, result) {
                    if (err) throw err
                    if (result) {

                        resolve({
                            response: result,
                            status: 200
                        })
                    }
                });
            }
            catch (e) {
                reject({
                    response: e,
                    status: 400
                })
            }
        });
    })
}


