import {Router} from 'express';
import {getTasks} from '../controllers/taskcntrl';
const router =Router();
router.get('/',getTasks);
export default router