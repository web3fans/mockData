var express = require('express');
var router = express.Router();
var Mock = require('mockjs');
var Random = Mock.Random;
 
var createData = function() {
    var data = [];
    data = Mock.mock({
      'list|20':[{
            'id|+1':1,
            'status|1':['1','2','3'],
            'version|3-5':'Abc',
            'serviceName':'@name',
            'buildType|1':['a','b'],
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


router.get('/node_tree', function (req, res, next) {
  var data =Mock.mock({
      'list|20':[{
            'id|+1':1,
            'serial_number|1-100':1,
            'node_number|1-100':1,
            'node_name|1':['相关证券','交割仓库'],
            'node_level|1':['不重要','重要'],
            'node_detail':'xx节点树',
            'create_time':Random.datetime(),
            'finish_time':Random.datetime(),
            'contact|4':'abc'
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

router.get('/node_watch', function (req, res, next) {
  var data =Mock.mock({
      'list|6':[{
            'id|+1':1,
            'node_name':'@name',
            'node_ip':'112.22.111.33',
            'response_cost_time|1-100':1,
        }] 
      });

  res.send({
    meta : {
      message: 'success'
    },
    status:true,
    data: {
      ring0:data.list,
      ring1:data.list
    }
  })
});

var createVMCharts = function () {
  var data = [];
  var results = [];
  for(var i = 0; i < 3; i++) {
     var data =Mock.mock({
          'legend':Random.ip(),
          'data':[],
          'xAxis':['4-12','4-13','4-14','4-15','4-16','4-17']
      });
      for(var j = 0; j < 6; j++){
        data.data.push(Random.integer(0,100));
      }
      results.push(data);
  }
  return results;
}

router.get('/vmwatch', function (req, res, next) {
  res.send({
    meta : {
      message: 'success'
    },
    status:true,
    data: {
      ring0cpuChart:createVMCharts(),
      ring0discChart:createVMCharts(),
      ring1cpuChart:createVMCharts(),
      ring1discChart:createVMCharts(),
    }
  })
});

module.exports = router;
