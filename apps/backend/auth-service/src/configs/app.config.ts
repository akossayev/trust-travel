import { configDotenv } from 'dotenv';

configDotenv();

export enum AppEnvironment {
  Local = 'local',
  Development = 'development',
  Production = 'production',
}

export const getAppConfig = () => {
  return {
    port: +process.env.APP_PORT || 4004,
    environment: process.env.APP_ENV || AppEnvironment.Production,
  };
};
