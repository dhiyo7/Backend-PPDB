import * as core from 'express-serve-static-core';

import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import compression from 'compression';

import { createConnection, getConnectionOptions } from 'typeorm';

import routes from '../routes';

export const establishDbConnection = async () => {
  const connectionOptions = await getConnectionOptions();
  Object.assign(connectionOptions, {});
  await createConnection();

  console.log(`Database connection established.`);
};

export const bootstrapDependencies = (app: core.Express) => {
  app.use(cors());
  app.use(helmet());
  app.use(compression());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(morgan('combined'));

  /**
   * Routes
   */
  app.use(`/${process.env.APP_ROOT ? process.env.APP_ROOT + '/' : ''}`, routes);

  /**
   * Error handling (404, 401, 500, etc.)
   */
  app.use((_req, res, _next) => {
    res.status(404).json({
      success: false,
      data: null,
      code: 404,
      message: 'The requested route is not found.',
    });
  });

  return app;
};
