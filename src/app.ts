import createError from 'http-errors';
import express, { Request, Response } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import dotenv from 'dotenv';
// import indexRouter from './routes/index';
import usersRouter from './routes/users';
import roomsRouter from './routes/rooms';
import hotelsRouter from './routes/hotels';
import connectDB from './config';
import authsRouter from './routes/auths'

dotenv.config()

connectDB()


const app = express();


// app.use('/', indexRouter);
app.use('api//users', usersRouter);
app.use('/api/auths', authsRouter);
app.use('/api/rooms', roomsRouter);
app.use('/api/hotels', hotelsRouter);

// view engine setup
app.set('views', path.join(__dirname, '..'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'public')));



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err: createError.HttpError, req: Request, res: Response) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
