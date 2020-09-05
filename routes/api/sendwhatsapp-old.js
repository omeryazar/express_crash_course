const https = require('https');

const options = {
    hostname: 'messages-sandbox.nexmo.com',
    port: 443,
    path: '/v0.1/messages',
    method: 'POST',
    authorization: {
        username: "oyazar27@gmail.com",
        password: "Tel01.fon"
    },
    headers: {
        'Content-Type': 'application/json'
    }
};

const req = https.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`)

    res.on('data', (d) => {
        process.stdout.write(d)
    })
});

req.on('error', (e) => {
    console.error(e);
});

req.write(data);
req.end();