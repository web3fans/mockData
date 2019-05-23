var express = require('express');
var router = express.Router();
var Mock = require('mockjs');
var Random = Mock.Random;
 
var createData = function() {
    var data = [];
    data = Mock.mock({
      'list|20':[{
            'id|+1':1,
            'version|3-5':'Abc',
            'serviceName':'@name',
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

router.get('/economist', function (req, res, next) {
  var data =Mock.mock({
      'list|4':[{
            'id|+1':1,
            'economist_name':'@name',
            'product_info':'Core CD',
            'cluster_info|1':'Dashboard VM IP=100.12.123.13'
        }] 
      });

  res.send({
    meta : {
      message: 'success'
    },
    status:true,
    data: data.list
  })
});

router.delete('/economist', function(req, res, next){
  var data =Mock.mock({
        'status|1':['success','failure']
      });

  res.send({
    meta : {
      message: data.status
    },
    status:data.status,
    data: []
  })
});

router.post('/economist', function(req, res, next){
  var reqbody = req.body;
  var data =Mock.mock({
        'status|1':['success','failure']
      });

  res.send({
    meta : {
      message: data.status
    },
    status:true,
    data:req.body
  })
})

module.exports = router;
