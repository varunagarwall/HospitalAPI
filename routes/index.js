const express=require('express');

const router =express.Router();

const homeController=require('../controllers/home_controller');
console.log('router loaded');

router.get('/',homeController.home);
router.use('/doctors',require('./doctor'))

router.use('/patients',require('./patient'));


module.exports=router;
