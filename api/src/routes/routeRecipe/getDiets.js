const  express  = require('express');
const  {getbyDiets}  = require('../../controller/control.js')


const router = express.Router();

router.get('/',getbyDiets )


module.exports = router;