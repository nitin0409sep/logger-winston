const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf, colorize } = format;

const productionFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp}  ${level}: ${message}`;
});

const productionLogger = () => {
    return createLogger({
        level: "debug",
        format: combine(
            timestamp({ format: "HH:mm:ss" }),
            productionFormat
        ),
        transports: [
            new transports.Console(),
            new transports.File({ filename: __dirname + "/logs/productionLogs.log" }),
        ]
    }
    )
};

module.exports = productionLogger;