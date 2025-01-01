import express from 'express'
import Caterer from '../models/caterers.model.js';
import { postCaterer } from '../controllers/postCaterer.js';
import { getAllCaterers  } from '../controllers/getAllCaterers.js';
import {getCaterer} from "../controllers/getcaterer.controller.js"


const router = express.Router()

router.post('/caterer', postCaterer)
router.get('/', getAllCaterers)
router.get('/caterers/:categoryId', getCaterer)


export default router