import express from'express';
const router= express.Router();

import { register } from '../controllers/auth/register';

router.post('/auth/register',register);



export default router;