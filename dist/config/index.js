"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONGO_DB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connection.on("disconnected", () => {
    console.log("Successfully disconnected");
});
mongoose_1.default.connection.on("connected", () => {
    console.log("Successfully connection");
});
const connectDB = async () => {
    try {
        const conn = await mongoose_1.default.connect("mongodb+srv://matthabbey:1234567890@cluster0.yljq9bx.mongodb.net/test");
        console.log(`MongoDB Connected `);
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
};
exports.MONGO_DB = process.env.MONGO_DB;
exports.default = connectDB;
