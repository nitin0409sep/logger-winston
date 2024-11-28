const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf, colorize } = format;

const myFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp}  ${level}: ${message}`;
});

const devLogger = () => {
    return createLogger({
        level: "debug",
        format: combine(
            // colorize(),
            timestamp({ format: "HH:mm:ss" }),
            myFormat,
            json()
        ),
        transports: [
            new transports.Console(),
            new transports.File({ filename: __dirname + '/logs/devLogs.log' })
        ]
    });
}

module.exports = devLogger;