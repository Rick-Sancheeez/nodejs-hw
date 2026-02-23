

import { Router } from 'express';
import { celebrate } from 'celebrate';
import { registerUser, loginUser, logoutUser, refreshUserSession } from '../controllers/authController.js';
import { registerUserSchema, loginUserSchema } from '../validations/authValidation.js';

const routerAuth = Router();

routerAuth.post('/auth/register', celebrate(registerUserSchema), registerUser);
routerAuth.post('/auth/login', celebrate(loginUserSchema), loginUser);
routerAuth.post('/auth/refresh', refreshUserSession);
routerAuth.post('/auth/logout', logoutUser);


export default routerAuth;
