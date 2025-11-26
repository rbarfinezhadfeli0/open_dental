Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Email Encryption Setup

Encrypted Email is obsolete. Open Dental now offers Secure Email, the easiest and most secure method to communicate with patients and outside providers via email. Encrypted Email was a previous method for secure communication. While still available, it is complex to set up and is not recommended. The information below is available as a reference but may not be up-to-date.

Standard [encrypted email](emailencrypted.html) is a secure method of exchanging email with trusted sources. It requires that both parties share public security certificates by exchanging digitally signed messages.

Requirements:

* Open Dental version 15.1 or greater.
* You must have an email address.
* The email address must be associated with an email security certificate.
* The email certificate's public and private keys must be installed on each workstation that will receive encrypted email.
* Both sender and recipient must manually share public key certificates by exchanging digitally signed messages.

## Open Dental Set up

Enter email settings in [Email Setup](emailsetup.html).

Obtain [Email Certificate](emailsecuritycertificates.html).

Install public and private keys on workstations. See [Email Certificate Install](emailcertinstall.html).

For each person you want to exchange encrypted email with, share public key certificates by sending digitally signed messages.

1. In Open Dental, send a clear text, unencrypted email that contains your public key to the person you want to send the encrypted email to. You will know the email contains the public key if the Signed By field on the Edit Email Message window contains your email address ([Email Message Edit](emailmessage.html)).
2. The recipient will open the unencrypted email and add your public key as a trusted source. In most email programs (e.g. Microsoft Outlook) there will be a notification in the email that the user can click to add a trusted source.
3. The recipient will send you an email that has their public key (digital signature).
4. In the Email Inbox, locate the sent message. It will have an N in the Sig column. Click the N to add the recipient's public key to the list of trusted sources on the workstation.

Now encrypted email can be exchanged with the recipient.

The certificate cache is always checked when sending. If a certificate expires, you will need to repeat the steps above with the recipient.

To receive encrypted email, security certificates for your email address must be installed on workstations that will receive the email.

To send encrypted email, the email recipient must have encrypted email set up and have shared their public key with you.

Trust of Security Certificates are computer-specific. If you send an email from the computer you use as your [Email Client](emailinbox.html) (Computer Name to Receive New Email From in General Email Settings), every time you send email, the recipient is added to your trusted list automatically. If you receive a message from an unknown recipient that is not in your trusted list, when you open email and decrypt a message, you will be prompted to add the recipient to your trusted list.

Direct messaging is a method of encrypted email that is intended to simplify the discovery of public key certificates, but additional setup is required. See [Email Direct Encryption](direct.html).