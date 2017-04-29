module.exports = function(Winston) {
  const logDir = `${__dirname}/server/logs/`
  return {
    transports: [
      new Winston.transports.File({
        filename: `${logDir}info.log`,
        name: 'info-file',
        level: 'info'
      }),
      new Winston.transports.File({
        filename: `${logDir}error.log`,
        name: 'error-file',
        level: 'error'
      }),
      new Winston.transports.Console()
    ]
  };
};