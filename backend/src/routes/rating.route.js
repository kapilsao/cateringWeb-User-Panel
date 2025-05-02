import express from "express"
import { addRating } from "../controllers/postRating.js";
import {getAverageRating} from "../controllers/getRating.js"

const router = express.Router()


router.post('/post', addRating)
router.post("/", getAverageRating);

export default router ;
