import { Router } from 'express';

const routes = Router();

import {indexWelcome} from '../controllers/index.controller'

routes.route('/')
    .get(indexWelcome);

export default routes;