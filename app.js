let express =require('express')
let app =express()
app.use(express.static('public'))
app.use(require('./routes/index'))
app.use(require('./routes/speakers'))
app.listen(3000,()=>{
    console.log("we are listning on port")
})


