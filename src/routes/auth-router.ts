import express from'express';
const router= express.Router();

import ensureAuthentication from "../services/ensure-authentication";
import {authorize} from "../services/authorization";

import { register } from '../controllers/auth/register';
import { login } from '../controllers/auth/login';
import { getCurrentUser } from '../controllers/auth/get-cuurent-user';
import { admin } from '../controllers/auth/admin';
import { moderator } from '../controllers/auth/moderator';

router.post('/auth/register',register);
router.post('/auth/login',login);
router.get('/auth/current-user',ensureAuthentication,getCurrentUser)
router.get('/auth/admin',ensureAuthentication,authorize(["admin"]),admin)
router.get('/auth/moderator',ensureAuthentication,authorize(["admin","moderator"]),moderator)



export default router;