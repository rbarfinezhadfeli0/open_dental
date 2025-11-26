Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Email Errors

If experiencing errors when trying to [Send Email](emailmessage.html), the information below may be helpful.

The most common reason for email errors is incorrect information entered in [Email Setup](emailsetup.html). If sending email fails, follow these general steps:

* Verify the username, password, server, and port information is entered correctly. Username should be the full email address (e.g., john@email.com).
* Check the internet connection.
* If emails can be sent outside Open Dental, antivirus software may be blocking emails. To test this, disable antivirus and try again. An exception may need to be added for *OpenDental.exe*.

## Email Settings by Host

We have gathered settings for some email hosts. These settings may change at any time so always rely on the settings provided by the email provider.

|  | Username | Use SSL? | Outgoing SMTP Server | Outgoing Port | Incoming POP3 Server | Incoming Port |
| --- | --- | --- | --- | --- | --- | --- |
| **Alaska Communications** | xxxx@acsalaska.net | checked | mail.acsalaska.net | 587 or 465 | mail.acsalaska.net | 995 |
| **AOL** | xxxx@aol.com | checked | smtp.aol.com | 587 |  |  |
| **Aspida** | xxx@xxx.com | checked | mail02.aspida.us | 0 | mail02.aspida.us | 0 |
| **AT & T** | xxxx@att.net | checked | outbound.att.net | 465 | inbound.att.net | 995 |
| **Brinkster** | xxxxx@xxx.com | unchecked | mymail.brinkster.com | 25 |  |  |
| **Comcast** | xxxx@comcast.net | checked | smtp.comcast.net | 587 or 465 |  |  |
| **Cox Communications** | xxxx@cox.net | checked | smtp.coxmail.com | 465 | pop.coxmail.com | 995 |
| **Dreamhost** | xxx@yourdomain.com | checked | smpt.dreamhost.com | 465 | imap.dreamhost.com | 993 |
| **Earthlink** | xxxx@yourdomain.com | checked | smtpauth.earthlink.net or smtp.yourdomain.com | 587 |  |  |
| **Einstein Medical** | xxxx@yourdomain.com | checked | smtp.einsteinmail.com | 587 | imap.einsteinmail.com | 995 |
| **EnGuard** | xxxx@yourdomain.com | checked | mail6.enguard.com or mail3.enguard.com | 587 or 465 |  |  |
| **FatCow (Roundcube)** | xxxx@yourdomain.com | checked | smtp.fatcow.com | 465 |  |  |
| **GoDaddy** | xxxx@xxx.com | unchecked | smtpout.secureserver.net | 25 or 465 |  |  |
| **Hostinger** | xxxx@xxxx.com | checked | smtp.hostinger.com | 465 |  |  |
| **Hotmail** | xxxx@hotmail.com | checked | smtp.live.com or smtp-mail.outlook.com | 25 or 587 | pop3.live.com | 995 |
| **Hushmail** | Hushmail Email Address | checked | smtp.hushmail.com | 465 or 587 |  |  |
| **iCloud (Mozilla Thunderbird)** | xxxx@xxx.net | checked | smtp.mail.me.com | 587 |  |  |
| **iCore** | xxxx@direct.icoreexchange.com | checked | dout.icoreexchange.com | 465 |  |  |
| **IONOS (1and1.com)** | xxx@yourdomain.com | checked | smtp.1and1.com | 587 |  |  |
| **Just Host** | xxx@domainname.com | checked | just38.justhost.com | 465 |  | 995 |
| **Luxsci** | xxx@domainname.com | checked | abundant.secctr.com | 587 |  |  |
| **Officite** | xxx@yourdomain.com | checked | mail.officite.com | 587 | mail.officite.com | 995 |
| **MSN Live** | xxx@xxx.com | checked | smtp.live.com | 587 |  |  |
| **NameCheap** | xxx@yourdomain.com | checked | mail.privateemail.com | 587 or 465 | mail.privateemail.com | 587 or 465 |
| **Optimum** | xxx@optimum.net | unchecked | mail.optimum.net | 25 |  |  |
| **PacBell.net** | xxxx@pacbell.net | unchecked | outbound.att.net | 587 |  |  |
| **Prosites (Roundcube)** | xxxx@yourdomain.com | checked | smtp.prosites.com | 465 or 10465 or 11465 |  |  |
| **Rackspace** | xxxx@yourdomain.com | checked | secure.emailsrvr.com | 465 |  |  |
| **Roundcube** | xxx@domainname.com | checked | mail.domainname.com | 587 | mail.domainname.com | 995 |
| **SendInc** | SendInc alias email address | checked | smtp.sendinc.net | 465 |  |  |
| **Sesame** | xxxx@yourdomain.com | checked | sesameemail.com | 465 | sesameemail.com | 995 |
| **Solution 21** | xxxx@xxx.com | unchecked | mail.solution21mail.com | 25 |  |  |
| **Time Warner (Insight)** | xxxx@xxx.com | checked | mail.twc.com | 587 |  |  |
| **TNT** | xxxx@xxx.com | checked | mail.tntsupport.net or mail-02.tntsupport.net | 587 or 25 |  | 143 |
| **Verizon** | xxxx@verizon.net | checked | smtp.verizon.net | 465 |  |  |
| **Yahoo** | xxxx@yahoo.com | checked | smtp.mail.yahoo.com | 465 | pop.mail.yahoo.com | 995 |
| **Zoho** | xxxx@zoho.com | checked | smtppro.zoho.com | 465 |  |  |

## Specific Errors & Solutions

If you receive any of the following errors, it means the username and/or password entered in General Email Settings is invalid.

* Authentication Failed
* Mailbox unavailable. The server response was: 5.7.3 Requested action aborted: user not authenticated.
* Mailbox Unavailable. The server response was: #5.1.0 Authentication required.
* Bad sequence of commands. The server response was: you must authenticate first (#5.5.1).

**Error: Mailbox Unavailable. The server responses was: #5.1.0 Address rejected.**

Solution 1: Patient's email address is invalid. Send a test email to yourself to verify the message is only when using the patient's email address.

Solution 2: If sending from a new email address, check your inbox and open another email. This may activate the email address. Send another test to check.

**Error: The operation has timed out.**

Solution: Do some research and find out what port your email provider recommends, then try it. For example, for Gmail smtp.gmail.com with SSL, port 465 has worked for sending emails with attachments.

**Error: All confirmation emails failed.**

Solution: This can happen if the subject line of the email mistakenly includes the body of the message. Check [Setup Recall](recallsetup.html) to make sure the subject line has a reasonable amount of words.

**Error: Mailbox name not allowed. The server response was: sorry, that domain isn't in my list of allowed rcpthosts.**

Solutions:

* Make sure the username and password are correctly entered. Verify it works on the email host's website.
* The remote mail server may not like the email address of sender. Make sure it is the same email as entered for the username.
* Something on the server has changed (e.g. the proxy or white list) or a new antivirus software is acting like the domain is dangerous.
* The email host may have marked the address as spam. Create a new email address and see if it works.

**Error: Command not implemented. The server response was :5.5.41. Unrecognized command. z28sm22907yhn.7**

Solution: In Email Setup, check the SSL box. Another possibility is to verify the password is correct. Some computers connected to the network and using the same email setup in Open Dental may be able to still use the email service if this box is unchecked.

**Error: The remote certificate is invalid according to the validation procedure.**

Solution: In Email Setup, uncheck the SSL box.

**Error: Service not available, closing transmission channel.**

Solution 1: Try a different outgoing port.

Solution 2: It could be caused by antivirus software.

**Problem: Open Dental appears to have successfully sent email, but recipient never received it.**

Solution: Your mail server may block outgoing mail if too many emails are sent at one time. Contact your provider to change the setting.

**Error: Email fails to send and an error message reads: "Transaction failed. The server response was: 5.7.1 <yourpatient@someserver.com>: Recipient address rejected: Access denied.**

Solution: SMTP server will not relay the message; this is usually due to an incorrect password.

**Error: Keyset does not exist.**

Solution: Run Open Dental as administrator.

**Error: Mailbox unavailable. The server response was: (WS-SVR) [123.123.123.123]:12345 is currently not permitted to relay.**

Solution: Contact your email domain provider and have them allow the relay from Open Dental.

**Error: Error retrieving email messages: The stream used to retrieve responses from was closed.**

Solution: Check your incoming email settings in Email Setup.

**Error: Error retrieving email messages: The handshake failed due to an unexpected packet format.**

Solution: This error can happen if your email address is not configured properly. Specifically, if your email account uses SSL and you do not have the SSL option enabled, or if you have SSL enabled and your email account does not use SSL. See Email Setup.

**Problem: In the Email Inbox or Progress Notes, email preview and message are showing in HTML code.**

Solution: This means the email was sent using Rich Text/HTML format instead of Plain Text.

**Problem: An incoming encrypted message is not decrypted.**

Solution: This happens when decryption fails. Usually, decryption happens automatically when the message is received. However, if the email is from an address with a security certificate that is not trusted, your private decryption key is not installed on the local computer, or the encryption is not in the correct format, decryption fails. To see encrypted email options, see [Email Encryption Options](emailencrypted.html). To add a certificate to your trusted list or retry decryption. see [Email Client](emailinbox.html), When Decryption Fails.

**Error: Failed to send. Error message from the email client was: Failure sending mail.**

Email hosts have a maximum attachment size when sending attachments from Open Dental. If the file size(s) are too large, the email will fail.

**Error: Email message cannot contain the URL [URL] as this is only allowed for eServices.**

Remove the noted URL from the email message. This can occur when attempting to use an eServices short URL in an email template.

**Error: Email provider is having temporary send issues. This could be due to high email demand. Please try again later.**

There was an issue when attempting to send the email on the email provider's end. This is a temporary issue, and you should be able to send the email at a later time.

## Yahoo

**Error: The transport failed to connect to the server**

Solution: Set the SMTP server to: plus.smtp.mail.yahoo.com.

**Error: The message could not be sent to the SMTP server. The transport error code was 0x80040217. The server response was not available**

Solution: Yahoo is blocking "less secure" 3rd-party applications. Create an [App password](https://help.yahoo.com/kb//learn-generate-third-party-passwords-sln15241.html) for use with Open Dental.

## Gmail

Gmail accounts should be authorized using the **Sign in with Google** button in [Email Address Edit](emailaddressedit.html). If any errors occur when sending, clear tokens in the Edit Email Address window and re-authorize the account. If errors continue, ensure Open Dental version 22.1.61, 22.2.41, or 22.3.10 or greater is installed and try again. It may be beneficial to clear the tokens for Open Dental within the Google account settings.

Due to increased anti-spam measures implemented by Google, accounts may experience errors when sending. There are a variety of errors a user may receive. In general, Google requires a higher level of account authentication. See the following link for troubleshooting details: <https://support.google.com/mail/answer/81126#authentication>.

## GoDaddy

Authorize GoDaddy accounts through Office365 using the **Sign in with Microsoft** button in Email Address Edit. In rare scenarios, the setting above can be used instead.

## Outlook / Office 365

Microsoft accounts should be authorized using the **Sign in with Microsoft** button in Email Address Edit.

## Televox

**Error: Service not available, Not able to send message:**

Solution: Use Port 587.

## Prosites

**Error: The message could not be sent to the SMTP server. The transport error code was 0x800ccc6a. The server response was 451.**

Solution: Update to the most recent version of Open Dental.

## AOL

**Error: Failed to send email. Error message from the email client was: Failure sending mail.**

Solution: AOL may require an app password that can be created in AOL Account Security.