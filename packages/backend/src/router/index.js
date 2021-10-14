import {validateDonate} from '../middleware/donations';
import {createDonation} from '../controllers/donations';

const Router = require('@koa/router');
const router = new Router();

router.post(
    '/donate',
    validateDonate,
    createDonation,
);

export default router;