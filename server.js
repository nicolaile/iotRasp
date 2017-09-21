var httpServer = require('./servers/http'),
  resources=require('.resources/model');

var server = httpServer.listen(resources.pi.port,function(){
  console.info('ITS RUNNING on port %s',
  resources.pi.port);
});
//hehej
