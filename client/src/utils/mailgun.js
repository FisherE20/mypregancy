import * as mailgunloader from 'mailgun-js';

let mailgun = mailgunloader({
    apiKey: 'key-696047c12dd5e37a41102745fc72f6f4-53c13666-de69d7c3',
    domain: 'sandbox3a9741201d8a440cb4dbb42f35c4829c.mailgun.org'
});

const sendEmail = (to, from, subject, content) => {
    let data = {
        to,
        from,
        subject,
        text: content
    };
    return mailgun.messages().send(data);
};

export { sendEmail };