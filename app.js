const push = require('web-push');

let keys = {
    publicKey: 'BP_uezEmYJhvqgpkHDQ0_KjQ-QiJGP7SLNHPMGdHR7bBe6AhDmWu_AMjOnOkTDftBwAJmqfgHd1C8C7ercr9HCI',
    privateKey: '26z4yy3vQSAuv-F7CuVD_BYP4ofrlfm5-1DHIF4Li6Q'
}

push.setVapidDetails('mailto:test@code.co.uk', keys.publicKey, keys.privateKey);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/c49FAfNG5ks:APA91bG5rUJygMhEgTR9ZPiH4_qM-MqUWTGOQBhXRiB4qVyx-4PhVoibin-oandFE9fPvFxprWD_BKSEpcXg1Nhxq5qfmOBvfapUyL4Mwf9VSNgHFUR0lNWwiNSedhrO4_fH52kXgfOM","expirationTime":null,"keys":{"p256dh":"BNUNk11GUmrbKzop9Pf7OFJRKnwx5oNrKaa7Q-Zr7P8NxokdxquDgb2pPNyc8pkqlpoweeytHlLic6oHPdRCq0U","auth":"Nrs4796KsSNZdwWrL3b3uQ"}};
push.sendNotification(sub, 'test message');
