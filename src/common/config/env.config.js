/**
 * All the configs used in this app.
 * Default values are kept here. This will be overridden with process.env
 */
module.exports = {
    ...{
        PORT : 3600,
        NODE_ENV: 'development',
        DB_HOST : 'mongodb+srv',
        DB_USER : 'veerender',
        DB_PASS : 'Jissu@04',
        DB_CLUSTER : 'flights.ioohf.mongodb.net/veerender'        
    },
    ...process.env
}
//mongodb+srv://veerender:<password>@flights.ioohf.mongodb.net/<dbname>?retryWrites=true&w=majority