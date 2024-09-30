import { Router } from 'express';
import { importChat } from '../controllers/chatcontroller';
import multer from 'multer'
const upload = multer({ dest: 'uploads/' })
const router = Router()
router.post('/import', upload.single('file'), importChat)
export default router;