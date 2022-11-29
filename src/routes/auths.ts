import express, {Request, Response} from 'express'

const router = express.Router()

router.get('/', (req, res)=>{
    res.status(200).json({
        message: "This is the authentication endpoint"
    })
})

export default router