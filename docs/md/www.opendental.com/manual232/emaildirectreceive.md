Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Email Inbox Encryption

Encrypted Email is obsolete. Open Dental now offers Secure Email, the easiest and most secure method to communicate with patients and outside providers via email. Encrypted Email was a previous method for secure communication. While still available, it is complex to set up and is not recommended. The information below is available as a reference but may not be up-to-date.

Encrypted emails can be viewed in the [Email Client](emailinbox.html).

Note: For both standard encrypted email and Direct messaging, both parties must have established trust by sharing public key security certificates. See [Email Encryption Options](emailencrypted.html) for details.

Open the Email Inbox. In the [Manage Module](manage.html), click Email Inbox, or on the [EHR Summaries of Care](ehrsummaryofcaresend.html) window click Email in the Receive by area.
![](images/emailinbox15_1.gif)

If the email is an encrypted message, decryption is automatically attempted.

* If decryption is successful, the Send/Received status is *ReceivedDirect*. The Sig column will indicate a Y.
* If decryption fails, the Send/Received status is *ReceivedEncrypted*. See When Decryption Fails below.

Verify the patient. If a Summary of Care file is attached, Open Dental will attempt to automatically match the patient with an entry in the database based on matching email address.

* If an exact match is found, the email is attached and the patient name shows in the Patient column.
* If an exact match is not found, then no attachment is made, and the Patient column will be blank.

Click Change Pat to select a Patient.

Open the Message: Double click on the message. It will open in the Edit Email Message window in view only mode. Attachments will list in the upper right. Double click an attachment to open.

## When Decryption Fails

Automatic decryption can fail if Direct messaging is not set up on your computer, or if the sender is not listed as a trusted source on the workstation.

Add Sender as a Trusted Source: N lists in the Sig column for a message when the sender is not a trusted source. To add the sender to your trusted list, click the N.

![](images/emaildigsigTrust.gif)

Click Trust to add the sender.

Retry Decryption: If decryption has failed, a Decrypt button will show on the left of the Edit Email Message window:

![](images/emailDecrypt.gif)

Click Decrypt to attempt decryption again (e.g. on a different computer, once Direct messaging is setup, or once the sender is a trusted source). If the message is from unknown recipient that is not in your trusted list, you will be prompted to add the recipient to your trusted list.

![](images/emailDecryptMsg.gif)

If you choose OK, Open Dental will attempt to locate the public certificate for the sender and, if found, add it before attempting decryption again.