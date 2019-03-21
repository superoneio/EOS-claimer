let Eos = require('eosjs');
let config = require('../config.json');
let schedule = require("node-schedule");

let eos = Eos({
    httpEndpoint: config.httpEndPoint,
    chainId: config.chainId,
    keyProvider: config.wif,
    authorization: [{	
        actor: config.producerName,	
        permission: config.permission	
    }]
});

schedule.scheduleJob('0 * * * * *', function () {
    claimReward(config.producerName)
})

async function claimReward(bp) {
    try{
        let result = await eos.claimrewards(bp)
        console.log("be a rich man !!!",result)
    }catch(e){
        console.log('hey ~,it is not your turn yet ):',e)
    }
}
