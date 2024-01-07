import { createLogger, format, transports, Logger } from "winston";

const rn = new Date();
const logDate = `${minTwoDigits(rn.getMonth() + 1)}-${minTwoDigits(rn.getDate())}-${rn.getFullYear()}`;

function minTwoDigits(n: number): string {
  return (n < 10 ? '0' : '') + n;
}

const logger: Logger = createLogger({
  format: format.combine(
    format.errors({ stack: true }),
    format.colorize(),
    format.timestamp(),
    format.printf(log => `[${log.timestamp.split("T")[1].split(".")[0]} ${log.level}]: ${log.message}`),
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: `./logs/${logDate}.log` })
  ],
  rejectionHandlers: [
    new transports.Console({ level: "error" }),
    new transports.File({ filename: `./logs/${logDate}.log`, level: "error" })
  ]
});

logger.info('logger initialized');

export default logger;
