import { Request, Response, Router } from 'express';
const router = Router();

router.get('/', (_req: Request, res: Response) => {
  return res.status(200).send('Tfrfrest!');
});

export default router;
