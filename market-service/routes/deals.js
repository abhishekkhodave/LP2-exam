const { response } = require('express');
var express = require('express');
var dbAbstractionLayer = require('../public/javascripts/DbAbstractionLayer');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
//   let jsonResponse = {
//     "handsetCards":[
//       { imageName: 'offer1.jpg', title: '10% off on personal cares', cols: 2, rows: 1 },
//       { imageName: 'offer2.jpg', title: 'Flat sales in Footwares', cols: 2, rows: 1 },
//       { imageName: 'offer3.jpg', title: 'Extended warranty for Apple products', cols: 2, rows: 1 },
//       { imageName: 'offer4.jpg', title: '5% discount for grocery', cols: 2, rows: 1 }
//     ] ,
//     "webCards":[
//       { imageName: 'offer1.jpg', title: '10% off on personal cares', cols: 2, rows: 1 },
//       { imageName: 'offer2.jpg', title: 'Flat sales in Footwares', cols: 1, rows: 1 },
//       { imageName: 'offer3.jpg', title: 'Extended warranty for Apple products', cols: 1, rows: 2 },
//       { imageName: 'offer4.jpg', title: '5% discount for grocery', cols: 1, rows: 1 }
//     ]
//   };

//   res.json(jsonResponse);
  dbAbstractionLayer.queryDealsCollection().then(response=>{
    res.json(response);
  }).catch(error=>{
    res.status(500).json({});
  });
 });

module.exports = router;
