module.exports.processMongooseError = function (err) {
    if (err.name == "MongoError") {
        // mongo db error

    } else if (err.name == "ValidationError") {
        // mongoose error

    }
}