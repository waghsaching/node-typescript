import * as express from 'express';
import PublicController from '../controllers/public/public-controlle';

const router = express.Router()

router.get('/', PublicController.firstMethod);
router.get('/one', PublicController.secondMethod);
router.get('/two', PublicController.thirdMethod);

export default router;