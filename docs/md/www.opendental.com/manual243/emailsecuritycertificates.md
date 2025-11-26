Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Email Certificate

Encrypted Email is obsolete. Open Dental now offers Secure Email, the easiest and most secure method to communicate with patients and outside providers via email. Encrypted Email was a previous method for secure communication. While still available, it is complex to set up and is not recommended. The information below is available as a reference but may not be up-to-date.

[Email](emailsetup.html) security certificates (digital IDs) are required for sending encrypted email. Each security certificate will be associated with an email address. Below are some services we are aware of that issue email security certificates. Click a link to visit each website:

* Comodo
* [GlobalSign](https://www.globalsign.com/en/secure-email/)
* [Symantec](http://www.symantec.com/)
* [Entrust](https://www.entrust.com/secure-email-certificates/)
* [Trustwave](https://ssl.trustwave.com/email-digital-id)

**Self-signed certificates**: You can also create a self-signed certificate, but these are unlikely to be automatically trusted or discovered by a third party. This means both parties must manually add the certificate to their internal list of trusted certificates. See your Windows documentation for instructions.

Certificates do expire and need to be renewed. A typical certificate life is 18 months, but can be increased to as much as 10 years or more, though security risk is increased.

Once you have obtained an email security certificate, [Install Public and Private Keys on a Workstation](emailcertinstall.html). For [Direct Messaging](direct.html), public keys also need to be installed on a hosting server. See [Email Certificate Hosting](emailcerthost.html).