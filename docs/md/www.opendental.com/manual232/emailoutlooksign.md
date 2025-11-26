Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Email Certificate Outlook

Encrypted Email is obsolete. Open Dental now offers Secure Email, the easiest and most secure method to communicate with patients and outside providers via email. Encrypted Email was a previous method for secure communication. While still available, it is complex to set up and is not recommended. The information below is available as a reference but may not be up-to-date.

When you send an [Encrypted Email](emailencrypted.html), the email address receiving the email is also required to have a secure digital ID (email security certificate). The digital ID verifies that a receiver is a trusted source. Any provider can become a trusted source by obtaining a digital ID and setting it up on their system. These steps explain how to obtain, then import a digital ID into Microsoft Outlook 2013 so that providers can receive encrypted email messages.

1. Obtain a digital ID ([Email Certificate](emailsecuritycertificates.html)) from a Certificate Authority (e.g. Comodo (<https://www.comodo.com/home/email-security/free-email-certificate.php>).
2. In Microsoft Outlook 2013, click File, Options, Trust Center, Trust Center Settings..., Email Security.
   ![](images/emailTrustCenter.gif)
3. Check two options:
   * Add digital signature to outgoing messages.
   * Send clear text signed message when sending signed messages
4. Under Digital IDs, click Import/Export...
   ![](images/emailDigIDImport.gif)
5. Click OK.
   ![](images/emailDigIDImport2.gif)
6. Click OK.
7. Send a clear text test email to the provider.

Note: Instructions may be different for other versions of Outlook, even though it has supported email signatures and encryption for many years.