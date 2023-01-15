import dotenv from 'dotenv';
dotenv.config();

export const connectionType = process.env.TYPEORM_CONNECTION;
export const connectionDatabase = process.env.TYPEORM_DATABASE;
export const connectionHost = process.env.TYPEORM_HOST;
export const connectionPort = process.env.TYPEORM_PORT;
export const connectionUsername = process.env.TYPEORM_USERNAME;
export const connectionPassword = process.env.TYPEORM_PASSWORD;
