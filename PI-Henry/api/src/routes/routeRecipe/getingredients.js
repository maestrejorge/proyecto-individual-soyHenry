const  express  = require('express');
const  {listIngredients}  = require('../../controller/control.js')


const router = express.Router();

router.get('/',listIngredients )


module.exports = router;