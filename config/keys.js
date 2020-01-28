//dbPassword = 'mongodb+srv://ktkr:kittu9013@cluster0-ed3fc.mongodb.net/test?retryWrites=true&w=majority';
//dbPassword='mongodb://<USERNAME>:<PASSWORD>@cluster0-shard-00-00-8zgqm.mongodb.net:27017,cluster0-shard-00-01-8zgqm.mongodb.net:27017,cluster0-shard-00-02-8zgqm.mongodb.net:27017/<DATABASE>?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin'
//dbPassword= 'mongodb://ktkr:<password>@cluster0-shard-00-00-ed3fc.mongodb.net:27017,cluster0-shard-00-01-ed3fc.mongodb.net:27017,cluster0-shard-00-02-ed3fc.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority'
dbPassword='mongodb://localhost:27017/NISTEEDB',{ useNewUrlParser : true, useUnifiedTopology: true}
//dbPassword= 'mongodb+srv://ktkr:<kittu9013>@ktkr-ed3fc.mongodb.net/test?retryWrites=true&w=majority'
module.exports = {
    mongoURI: dbPassword
};
