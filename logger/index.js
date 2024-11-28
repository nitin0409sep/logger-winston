const devLogger = require('./devLogger');
const productionLogger = require('./productionLogger');

let logger = () => {
    return {
        log: () => { },
        info: () => { },
        error: () => { },
        debug: () => { }
    };
};

if (process.env.NODE_ENV === 'dev') {
    logger = devLogger;
} else if (process.env.NODE_ENV === 'production') {
    logger = productionLogger;
}

module.exports = logger();
