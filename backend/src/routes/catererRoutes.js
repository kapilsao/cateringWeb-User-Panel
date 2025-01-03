import express from 'express'
import Caterer from '../models/caterers.model.js';
import { postCaterer } from '../controllers/postCaterer.js';
import { getAllCaterers  } from '../controllers/getAllCaterers.js';
import {getCaterer} from "../controllers/getcaterer.controller.js"
import { getCatererMenu } from '../controllers/getCatererMenu.js';


const router = express.Router()

router.post('/caterer', postCaterer)
router.get('/', getAllCaterers)
router.get('/caterers/:categoryId', getCaterer)
router.get('/caterers/:categoryId/:catererId/menu',getCatererMenu)


export default router