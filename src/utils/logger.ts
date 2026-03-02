type LogLevel = 'info' | 'warn' | 'error' | 'debug';

class Logger {
  private isDev: boolean;

  constructor() {
    // Check if the environment is development
    this.isDev = import.meta.env.DEV || false;
  }

  private formatMessage(level: LogLevel, message: string): string {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] [${level.toUpperCase()}]: ${message}`;
  }

  private formatObject(obj: unknown): string {
    try {
      // Pretty-print JSON objects or arrays
      return JSON.stringify(obj, null, 2);
    } catch {
      return '[Unable to stringify object]';
    }
  }

  private log(level: LogLevel, message: unknown): void {
    const formattedMessage =
      typeof message === 'object'
        ? this.formatObject(message)
        : String(message);

    const logOutput = this.formatMessage(level, formattedMessage);

    switch (level) {
      case 'info':
        console.info(logOutput);
        break;
      case 'warn':
        console.warn(logOutput);
        break;
      case 'error':
        console.error(logOutput);
        break;
      case 'debug':
        console.debug(logOutput);
        break;
    }
  }

  public info(message: unknown): void {
    if (this.isDev) {
      this.log('info', message);
    }
  }

  public warn(message: unknown): void {
    if (this.isDev) {
      this.log('warn', message);
    }
  }

  public error(message: unknown): void {
    this.log('error', message);
  }

  public debug(message: unknown): void {
    if (this.isDev) {
      this.log('debug', message);
    }
  }
}

const logger = new Logger();
export default logger;
