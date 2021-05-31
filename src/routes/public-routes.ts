import * as express from 'express';

const router = express.Router()
router.get('/', (req, res) => {
    res.status(200).json({
      message: 'Hello World'
    })
})

router.get('/one', (req, res) => {
    res.status(200).json({
      message: 'public Route one'
    })
})
router.get('/two', (req, res) => {
    res.status(200).json({
      message: 'public Route two'
    })
})

export default router;