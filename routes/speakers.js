let express = require('express');
let router =express.Router();
let data=require('../data/data.json')
router.get('/speakers',(req,res)=>{
    let myHTML ='';
    data.speakers.forEach((item) => {
        myHTML+=`
        <li>
            <h2>${item.name}</h2>
            <img src="/images/speakers/${item.shortname}_tn.jpg" >
            <p>${item.summary}</p>
        </li>`    
    })
    res.send(`<h1>Speakers</h1>
    <ul>
       ${myHTML}
    </ul>`)
   
})
module.exports=router;