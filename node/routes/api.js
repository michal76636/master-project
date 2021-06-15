const router=require('express').Router();
const user=require('../controllers/user');
const check = require('../middeleWere/check');

//User
router.post('/newUser',user.newUser);
router.get('/getUser', user.loginUser);
router.get('/getAllUsers', user.getAllUsers);


module.exports=router;