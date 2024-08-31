import express from'express';
const router= express.Router();
import ensureAuthentication from "../services/ensure-authorization";

import { register } from '../controllers/auth/register';
import { login } from '../controllers/auth/login';
import { getCurrentUser } from '../controllers/auth/get-cuurent-user';

router.post('/auth/register',register);
router.post('/auth/login',login);
router.get('/auth/current-user',ensureAuthentication,getCurrentUser)



export default router;