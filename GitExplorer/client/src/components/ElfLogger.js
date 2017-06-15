// THESE LINES DON'T MAKE SENSE HERE. THIS IS THE ELFLOGGER CLASS.
//import Logger from './ElfLogger';
//const logger = new Logger('address', 'blue', 'yellow', '24px');
//logger.log('Hello logger', 'param two', 'param three');

const ElfLogger = class {

    constructor(loggerInit, colorInit, bgInit, fontSizeInit) {
        this.display = false;
        if (!colorInit) {
            colorInit = 'blue';
        }
        if (!bgInit) {
            bgInit = 'yellow';
        }
        if (!fontSizeInit) {
            fontSizeInit = '18px';
        }
        this.textStyle = 'color: ' + colorInit +
            '; background-color: ' + bgInit +
            '; font-size: ' + fontSizeInit;
        this.titleStyle = 'font-size: ' + fontSizeInit;
        this.logger = loggerInit;
        this.log = this.log.bind(this);
        this.setLogger = this.setLogger.bind(this);
    }

    log(message1, message2 = '', message3 = '') {
        if (process.env.REACT_APP_ELF_LOGGER) {
            const envs = process.env.REACT_APP_ELF_LOGGER.split(';');
            if (envs.indexOf(this.logger) > -1) {
                if (process.title === 'browser') {
                    console.info('%c %s: %c %s %s %s',
                    this.titleStyle, this.logger, this.textStyle,
                    message1, message2, message3);
                    } else {
                    console.log(this.logger, message1, message2, message3);
                    }
            }
        }
    }

    setLogger(newValue) {
        this.logger = newValue;
    };
};

export default ElfLogger;