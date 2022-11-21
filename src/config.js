import { config } from "dotenv";

config();

export default {
    host: process.env.host || "localhost",
    database: process.env.database || "api_rest_nodejs",
    user: process.env.user || "root",
    password: ''
};
