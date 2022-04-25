import express, { Express, Router, Request, Response } from 'express'
import axios from 'axios'

const app:Express = express()
// 跨域
app.use('*', (req, res, next)=>{
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*")
    next()
})

const router:Router = express.Router()

app.use('/api', router)
router.get('/list', async (req:Request, res:Response) => {
    const result = await axios.post('https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=statisGradeCityDetail,diseaseh5Shelf')
    res.json({
        ...result.data.data
    })
})

app.listen(3333, ()=>{
    console.log('success server http://localhost:3333')
})
