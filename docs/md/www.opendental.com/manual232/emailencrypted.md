Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Email Encryption Options

Encrypted Email is obsolete. Open Dental now offers Secure Email, the easiest and most secure method to communicate with patients and outside providers via email. Encrypted Email was a previous method for secure communication. While still available, it is complex to set up and is not recommended. The information below is available as a reference but may not be up-to-date.

For Open Dental Secure Email, see [Secure Email Setup](secureemailsetup.html) and [Secure Email: Workflow](secureemailworkflow.html).

Sending and receiving encrypted [Email](emailmessage.html) requires both sender and recipient to share public key security certificates (also known as digital signatures). This verifies that sender and recipient are trusted sources. Open Dental supports Standard Encrypted Email and Direct messaging. Both methods require that you obtain an [Email Certificate](emailsecuritycertificates.html) and [Install Private and Public Keys on a Workstation.](emailcertinstall.html)

Note: Setting up encrypted email in Open Dental is similar to setting it up in Microsoft Outlook and Thunderbird.

| Topic | Open Dental Resources | Microsoft Outlook Resources | Thunderbird Resources |
| --- | --- | --- | --- |
| Get and Install a Digital ID | [Email Certificate](emailsecuritycertificates.html) [Email Certificate Install](emailcertinstall.html) | [Get a Digital ID](https://support.office.com/en-us/article/Get-a-digital-ID-0eaa0ab9-b8a2-4a7e-828b-9bded6370b7b#ID0EAABAAA=2016,_2013,_2010) | [Creating PGP Keys](https://support.mozilla.org/en-US/kb/digitally-signing-and-encrypting-messages#w_creating-pgp-keys) |
| Exchanging Digital IDs | [Email Client](emailinbox.html), Adding Trust | [Add a Digital ID to your Contacts](https://support.office.com/en-us/article/Get-a-digital-ID-0eaa0ab9-b8a2-4a7e-828b-9bded6370b7b#ID0EAABAAA=2016,_2013,_2010) | [Sending and Receiving Public Keys](https://support.mozilla.org/en-US/kb/digitally-signing-and-encrypting-messages#w_creating-pgp-keys) |

## Standard Encrypted Email

Standard encrypted email is a secure method of exchanging email with trusted sources. Before encrypted email can be exchanged using Open Dental:

* Email must be setup. Email security certificates must be purchased and installed on workstations.
* Both sender and recipient must manually share public key certificates by exchanging digitally signed messages.

See [Email Encryption Setup](encryptedstandard.html).

How it works:

1. In Open Dental, Provider A sends a clear text, unencrypted email to Provider B that contains Provider A's public key. To verify the public key is attached to the email, check the Signed By field on the Edit Email Window. It should contain Provider A's email address.
2. Provider B opens the unencrypted email and adds Provider A as a trusted source. In most email programs (e.g. Microsoft Outlook) there will be a notification in the email that the user can click to add a trusted source.
3. Provider B replies with an email that contains their public key (digital signature).
4. In Open Dental, Provider A opens the Email Inbox. Provider B's email message will have 'N' in the Sig column. Click the N to add Provider B's public key to the list of trusted sources on the workstation.
5. Provider A can now exchange encrypted email with Provider B.

The certificate cache is always checked when sending. If a certificate expires, you will need to repeat the steps above with the recipient.

## Direct Messaging

Direct messaging is a method of encrypted email that is intended to simplify the discovery of public key security certificates. Public key certificates are hosted in DNS so they can be discovered automatically using the domain part of the recipient's email address. Direct is used primarily by EHR providers to exchange clinical healthcare data securely with other providers.

Before Direct messages can be sent using Open Dental:

* Email must be setup.
* Email security certificates must be purchased and installed on workstations.
* Public key certificates must be installed on a hosting server for both sender and recipient.

See [Email Direct Encryption](direct.html).

How it works:

1. Both Provider A and Provider B install email security certificates on workstations and host public key certificates in DNS.
2. Provider A attempts to send an encrypted email to Provider B. A query automatically goes out to discover Provider B's public key certificate. When successfully found, the encrypted email is sent to Provider B.
3. Provider B receives the email, and if needed, adds Provider A's public key certificate to his list of trusted sources.

Direct messages can be sent to a provider who does not use Direct (e.g. a non-EHR provider). The receiving provider must become a trusted source by obtaining a digital signature and setting it up on their system. See [Email Certificate Outlook](emailoutlooksign.html) for instructions on how to create and setup a digital signature in Microsoft Outlook.