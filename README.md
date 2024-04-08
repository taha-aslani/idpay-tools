<h1 align="center" id="title">idpay-tools</h1>

<p id="description">یک پکیج بسیار عالی برای استفاده از درگاه آیدی پی</p>

<p align="center"><img src="https://img.shields.io/badge/Version-1.0.3-blue" alt="shields"> <img src="https://img.shields.io/badge/License-MIT-blue" alt="shields"></p>

  

<h2>ویژگی ها:</h2>

*   ساختن پیمنت
*   وریفای کردن بعد از پرداخت
*   چک کردن پیمنت


<h2>🛠️ مراحل نصب:</h2>

<p>1. نصب</p>

```
npm install idpay-tools
```

<p> نمونه کد:</p>

```js
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
```

<h2>صفحه npmjs :</h2>
<a href="https://www.npmjs.com/package/idpay-tools" target="_blank">NPMJS</a>
