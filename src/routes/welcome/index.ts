import { Request, Response, Router } from "express";

const router = Router()

router.get('/', [], (req : Request, res : Response) => {
    res.json({
        message : "Welcome to ppdb backend service",
        status : true,
        code : 200,
        author : "PPDB KOTA TEGAL"
    })
})

export default router;