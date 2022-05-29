import express from 'express';

const router = express.Router();

router.get('/:fileName', [], (req: any, res: any) => console.log('running the controller'));
// fileUpload.single('file'),
router.post('/create', [], (req: any, res: any) => console.log('running the controller'));

router.delete('/delete/:fileName', [], (req: any, res: any) => console.log('running the controller'));

export default router;
