"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = __importDefault(require("http-errors"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
// import indexRouter from './routes/index';
const users_1 = __importDefault(require("./routes/users"));
const rooms_1 = __importDefault(require("./routes/rooms"));
const hotels_1 = __importDefault(require("./routes/hotels"));
const config_1 = __importDefault(require("./config"));
const auths_1 = __importDefault(require("./routes/auths"));
dotenv_1.default.config();
(0, config_1.default)();
const app = (0, express_1.default)();
// app.use('/', indexRouter);
app.use('api//users', users_1.default);
app.use('/api/auths', auths_1.default);
app.use('/api/rooms', rooms_1.default);
app.use('/api/hotels', hotels_1.default);
// view engine setup
app.set('views', path_1.default.join(__dirname, '..'));
app.set('view engine', 'jade');
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.static(path_1.default.join(__dirname, '..', 'public')));
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next((0, http_errors_1.default)(404));
});
// error handler
app.use(function (err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
exports.default = app;
