const authMiddleware=require('../middleware/auth-middleware');
const express=require('express');
const router =express.Router();
const adminMiddleware=require('../middleware/admin-middleware');
router.get('/welcome',authMiddleware,adminMiddleware,(req,res)=>{
    res.json({
        message:'Welcome to the admin page',

    })
})

module.exports=router;
