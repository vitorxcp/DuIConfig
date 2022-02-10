const winston = require("winston");
const colors = require("colors");
const moment = require("moment")
moment.locale('pt-BR');
class Logger {
 constructor(LoggingFile) {
    this.logger = winston.createLogger({
      transports: [new winston.transports.File({ filename: LoggingFile })],
    });
  }
  log(Text) {
    let d = new Date();
		 this.logger.log({
      level: "info",
    });
    console.log(
     colors.yellow("["+ colors.green(
        `${moment.utc(d).format('DD/MM/YYYY - HH:mm:ss')}`
      ) + "] - ["+colors.green("LOG")+"] : " + Text)
    );
  }
	log_err(Text) {
    let d = new Date();
		 this.logger.log({
      level: "info",
    });
    console.log(
     colors.yellow("["+ colors.green(
        `${moment.utc(d).format('DD/MM/YYYY - HH:mm:ss')}`
      ) + "] - ["+colors.green("ERRO")+"] : " + colors.red(Text))
    );
  }
	 server(Text) {
    let d = new Date();
		 this.logger.log({
      level: "info",
    });
    console.log(
     colors.yellow("["+colors.green("SERVIDOR")+"] - " + Text)
    );
  }
   antcrash(Text) {
    let d = new Date();
		 this.logger.log({
      level: "info",
    });
    console.log(
     colors.yellow("["+colors.green("ANTCRASH")+"] - " + Text)
    );
  }
  database(Text) {
    let d = new Date();
		 this.logger.log({
      level: "info",
    });
    console.log(
     colors.yellow("["+colors.green("DATABASE")+"] - " + Text)
    );
  }
  database_erro(Text) {
    let d = new Date();
		 this.logger.log({
      level: "info",
    });
    console.log(
     colors.red("["+colors.yellow("DATABASE")+"] - " + Text)
    );
  }
	api(Text) {
    let d = new Date();
		 this.logger.log({
      level: "info",
    });
    console.log(
     colors.yellow("["+colors.green("API")+"] - " + Text)
    );
  }
	terminal(Text) {
    let d = new Date();
	 this.logger.log({
      level: "info",
    });
    console.log(
     colors.yellow("["+colors.green("TERMINAL")+"] - " + Text)
    );
  }
	cmd(Text) {
    let d = new Date();
 this.logger.log({
      level: "info",
    });
    console.log(
     colors.yellow("["+colors.green("COMANDOS")+"] - " + Text)
    );
  }
}

module.exports = Logger;
