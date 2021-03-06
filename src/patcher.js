/**
 * @fileoverview Patcher for all the libraries we are instrumenting
 * IMPORTANT: when requiring this module, all of the libraries will be automatically patched!
 */
const config = require('./config.js');
const utils = require('./utils.js');
const awsSDKPatcher = require('./events/aws_sdk.js');
const daxPatcher = require('./events/amazon_dax_client.js');
const httpPatcher = require('./events/http.js');
const http2Patcher = require('./events/http2.js');
const pgPatcher = require('./events/pg.js');
const mysqlPatcher = require('./events/mysql.js');
const openWhiskPatcher = require('./events/openwhisk.js');
const googlePatcher = require('./events/google_cloud.js');
const redisPatcher = require('./events/redis.js');
const ioredisPatcher = require('./events/ioredis.js');
const mongoPatcher = require('./events/mongodb.js');
const dnsPatcher = require('./events/dns.js');
const natsPatcher = require('./events/nats.js');
const mqttPatcher = require('./events/mqtt.js');
const kafkajsPatcher = require('./events/kafkajs.js');
const kafkaNodePatcher = require('./events/kafka-node.js');
const bunyanPatcher = require('./events/bunyan.js');
const pinoPatcher = require('./events/pino.js');
const azureSdkPatcher = require('./events/azure_sdk.js');
const winstonCloudwatchPatcher = require('./events/winston_cloudwatch.js');
const winstonPatcher = require('./events/winston.js');
const amqplibPatcher = require('./events/amqplib.js');
const amqpPatcher = require('./events/amqp.js');
const ldapPatcher = require('./events/ldap.js');
const fs = require('./events/fs.js');


/**
 * Patches a module
 * @param {Object} patcher module
 */
function patch(patcher) {
    try {
        patcher.init();
    } catch (error) {
        if ((process.env.EPSAGON_DEBUG || '').toUpperCase() === 'TRUE') {
            utils.debugLog(error);
        }
    }
}


if (!config.getConfig().isEpsagonPatchDisabled) {
    [
        awsSDKPatcher,
        httpPatcher,
        http2Patcher,
        pgPatcher,
        mysqlPatcher,
        redisPatcher,
        ioredisPatcher,
        mongoPatcher,
        daxPatcher,
        openWhiskPatcher,
        googlePatcher,
        dnsPatcher,
        natsPatcher,
        mqttPatcher,
        kafkajsPatcher,
        kafkaNodePatcher,
        bunyanPatcher,
        pinoPatcher,
        azureSdkPatcher,
        winstonCloudwatchPatcher,
        winstonPatcher,
        amqplibPatcher,
        amqpPatcher,
        ldapPatcher,
        fs,
    ].forEach(patch);
}
