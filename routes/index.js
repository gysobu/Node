let express = require('express');
let router =express.Router();
router.get('/',(req,res)=>{
   res.send(`<h1>Meetup Speakers</h1>`)

})

module.exports=router;