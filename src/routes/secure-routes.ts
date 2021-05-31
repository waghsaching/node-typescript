import * as express from 'express';
import SecureController from '../controllers/secure/secure-controller';

const router = express.Router()

router.get('/', SecureController.firstMethod);
router.get('/one', SecureController.secondMethod);
router.get('/two', SecureController.thirdMethod);

export default router;