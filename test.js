const { idpay } = require("idpay-tools");

const a = new idpay("xxxxxxxx-0000-0000-x000-xxxxxxxxxxxx", true)
async function test() {

    const b = await a.createTransaction({
        'order_id': '101',
        'amount': 10000,
        'name': 'طاها اصلانی',
        'phone': '09382198592',
        'mail': 'my@site.com',
        'desc': 'توضیحات پرداخت کننده',
        'callback': 'https://example.com/callback',
    })
    
    console.log(b)
    id = b.id;

    const c = await a.verifyPayment({
        'id': id,
        'order_id': '101'
    })
    console.log(c)

    const d = await a.transactionStatus({
        'id': id,
        'order_id': '101'
    });
    console.log(d)
}

test()
