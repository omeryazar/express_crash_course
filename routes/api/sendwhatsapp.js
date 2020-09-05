const Nexmo = require('nexmo');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    const nexmo = new Nexmo({
        apiKey: 'ad3bca23',
        apiSecret: 'Av581EfvTO7TQEXs',
        applicationId: 'ab3688b2-e6c1-44dc-99fb-1bba85436202',
        privateKey: 'keys/private.key',
    }, {
        apiHost: 'messages-sandbox.nexmo.com',
    });

    var number = '905332253620'

    nexmo.channel.send({
            type: 'whatsapp',
            number: number
        }, {
            type: 'whatsapp',
            number: '14157386170'
        }, {
            content: {
                type: 'template',
                template: {
                    name: '9b6b4fcb_da19_4a26_8fe8_78074a91b584:verify',
                    parameters: [{
                            default: 'Nexmo Verification',
                        },
                        {
                            default: '64873',
                        },
                        {
                            default: '10',
                        },
                    ],
                },
            },
            whatsapp: {
                policy: 'deterministic',
                locale: 'en',
            },
        },
        (err, data) => {
            if (err) {
                console.error(err);
            } else {
                res.render('done', {

                    message: `Sent Whatsapp message to customer: ${ number } with uuid ${ data.message_uuid }`
                })


                console.log(data.message_uuid);
            }
        }
    );


});

module.exports = router;