const argv = require('yargs')
    .options({
        address: {
            alias: 'a',
            desc: 'City Address to obtain weather',
            demand: true
        }
    })
    .argv;

module.exports = {
    argv
}