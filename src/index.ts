import express from 'express';

import 'reflect-metadata';

import { bootstrapDependencies, establishDbConnection } from './core';

/**
 * Start server.
 */

(async () => {
  await establishDbConnection();

  const app = bootstrapDependencies(express());
  const port = process.env.PORT || 4000;

  app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
  });
})();
