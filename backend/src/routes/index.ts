import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ ok: 'ok' });
});

export default routes;
