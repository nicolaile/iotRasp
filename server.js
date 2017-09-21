var httpServer = require('./servers/http'),
  resources=require('./resources/model');

  //var dhtPlugin = require('./plugins/internal/tempPlugin'); //#A

  // Internal Plugins for sensors/actuators connected to the PI GPIOs
  // If you test this with real sensors do not forget to set simulate to 'false'

//  dhtPlugin.start({'simulate': true, 'frequency': 10000}); //#B

var server = httpServer.listen(resources.pi.port,function(){
  console.info('ITS RUNNING on port %s',
  resources.pi.port);
});
