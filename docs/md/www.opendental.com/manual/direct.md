Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Email Direct Encryption

EHR Direct Messaging is obsolete. Open Dental now offers Secure Email, the easiest and most secure method to communicate with patients and outside providers via email. EHR Direct Messaging was a previous method for secure communication. While still available, it is complex to set up and is not recommended. The information below is available as a reference but may not be up-to-date.

Information on this page relates to the EHR Incentive Program. For a secure email option, see [Secure Email Setup](secureemailsetup.html) instead.

Direct messaging is a method of [Encrypted Email](emailencrypted.html) used by EHR providers to exchange patient PHI with other providers (e.g., summaries of care). It is intended to automate the discovery of public security certificates so that messages can be encrypted and sent directly to trusted recipients. For more information about the Direct project, see <http://www.directproject.org>.

Requirements:

* Open Dental version 14.2 or greater.
* You must have an email address associated with a domain name you own (gmail.com will not work).
* The email address must be associated with an email security certificate. You need one certificate per Direct email address. For EHR, each provider in a practice is not required to have their own email address.
* The email certificate's public and private keys must be installed on each workstation that will receive encrypted email.
* Public keys for both sender and recipient must be hosted in DNS so they can be discovered based on the recipient's domain.

If you do not want to setup Direct messaging in Open Dental, another option is to contract with a Health Information Service Provider (HISP). A HISP performs authentication, encryption, and trust verification on your behalf. To send summaries of care, export the documents, then use the HISP mail client to send. The downside to this option is that you may have to get a new email address supplied by the HISP and it is more expensive.

**Sending Direct Messages**:

1. Enter the email settings and set the email address as the Default email address in the [Email Setup](emailsetup.html).
2. Obtain an [Email Certificate](emailsecuritycertificates.html) associated with the email address.
3. Install public and private keys on workstations that will receive the direct email. See [Email Certificate Install](emailcertinstall.html).
4. Install the public certificate on a hosting server. You can host it with Open Dental (see [Email Certificate Hosting](emailcerthost.html)) or host it yourself. Each time a certificate expires, you will need to purchase a new certificate, and, if hosting the certificate on Open Dental's server, re-register the certificate.

**Receiving Direct Messages**: To receive direct messages, you must also modify each domain that will be used to receive direct messages. It usually takes 30 - 60 minutes before changes are recognized, but can take up to 48 hours.

1. Purchase an internet domain name if you do not already have one. GoDaddy is recommended because that is all we have tested. Other domain providers are allowed, but have not been tested.
2. Login to your domain provider website and launch the domain.
3. Create a new host name under the Host Names section. Use host certdns2 with IP address 198.0.40.74 (the Open Dental certificate server). Use the IP address for another certificate host or HISP if you wish.
4. Add a new name server record under the Nameservers section. If your domain name is yourdomain.com, then you need to add the name server certdns.yourdomain.com. This name server should be listed last in the Nameservers section, since it is the lowest priority for name look up.

**Become a Trusted Source**: To send secure messages to a provider who does not use Direct (e.g., a non-EHR provider), the receiving provider must become a trusted source by obtaining a digital signature and setting it up on their system. See [Email Certificate Outlook](emailoutlooksign.html) for instructions on how to create and setup a digital signature in Microsoft Outlook.