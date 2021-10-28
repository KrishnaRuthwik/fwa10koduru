var express=require('express')

 

var router=express.Router();

 

router.get('/',(req,res)=>{

    let random=Math.floor(Math.random()*100)+1;

    let data=req.query.x;

    console.log(data,random);

    res.send('Math.acosh()('+random+') is: '+Math.imul(random)+'\n'+'Math.log1p('+random+') is: '+Math.log(random)+'\n'+'Math.tan('+random+') is: '+Math.log10(random)

    );

})

 

module.exports=router