import * as express from 'express';

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({
      message: 'Secure Routes'
    })
})

router.get('/one', (req, res) => {
    res.status(200).json({
      message: 'secure Route one'
    })
})
router.get('/two', (req, res) => {
    res.status(200).json({
      message: 'secure Route two'
    })
})

export default router;