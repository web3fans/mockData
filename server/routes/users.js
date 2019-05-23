var express = require('express');
var router = express.Router();
var Mock = require('mockjs');
var Random = Mock.Random;
 
var createData = function() {
    var data = [];
    data = Mock.mock({
      'list|20':[{
            'id|+1':1,
            'status|1':['手动','自动','定时'],//或相关代号，由后端定
            'version|3-5':'Abc',
            'serviceName':'@name',
            'buildType|1':['门禁构建','版本构建'],//或相关代号，由后端定
            'branch|1-2':'Per',
            'pipelineName|1-2':'Nac',
            'progress|2-4':[{
                'id|+1':1,
                'runstate|1':['Complete','Failure','Running','Waiting'],
                'label|1-3':'lab'
            }],
            'keyInfo|2-4':'Bat',    
            'startTime':Random.datetime(),
            'costTime':Random.datetime(),
            'creator':'@name'
        }] 
      });
    return data.list
}


var createData_drop = function() {
    var data = [];
    data = Mock.mock({
      'version|6':[{
        'id|+1':1,
        'label|3-5':'abc'
      }],
      'servicename|10':[{
        'id|+1':1,
        'label|1-2':'accd'
      }] 
      });
    return data
}

/* GET users listing. */
router.get('/latest', function(req, res, next) {
   var data = createData();
   res.send({
      meta:{
        message:'OK',
      },
      data:data
   });
});

router.get('/history', function(req, res, next) {
   //var data = createData();
   res.send({
       meta:{
        message:'OK',
      },
      status:true,
    //  data:data
   });
});

router.get('/statisticdrop', function(req, res, next) {

   var data = createData_drop();
   res.send({
       meta:{
        message:'OK',
      },
      status:true,
      data:data
   });
});

router.get('/queryemail', function (req, res, next) {
  var data =Mock.mock({
      'list|20':[{
            'id|+1':1,
            'version|3-5':'Abc',
            'build_type|1':['门禁构建','版本构建'],//或相关代号，由后端定
            'httprepourl|3-5':'urls',
            'branch|1-2':'Per',
            'node_mark|1-2':'node',
            'create_time':Random.datetime()
        }] 
      });

  res.send({
    meta : {
      message: 'success'
    },
    status:true,
    data: data.list
  })
})





module.exports = router;
