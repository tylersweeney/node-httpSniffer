var util = require('util');
var url = require('url');

exports.sniffOn = function(server) {
    server.on('request', (req, res) => {
        util.log('e_request');
        util.log(reqToString(req));
    });
    server.on('close', errno => { util.log('e_close errno='+ errno)
});
    server.on('checkContinue', (req, res) => {
        
    })
}