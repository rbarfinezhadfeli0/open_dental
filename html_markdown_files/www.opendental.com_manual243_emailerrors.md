# File: ./www.opendental.com/manual243/emailerrors.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Email Errors</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('emailerrors','emailmessage','toolbar','manual')">
<nav class="LeftTree">
<div class="TopBarLeft"><p>Table of Contents</p></div>
<div id="Manual"><a href="manual.html">Manual</a></div>
</nav>
<div class="RightMain">
<div class="TopBar">
    <a href="../index.html">
        <div class="Logo">
            <img src="resources/logoWhite160.png" alt="Home" width="158" height="40">
        </div>
    </a>
    <div class="TopBarLinks">
        <div class="TopBarTitle">Manual 
					<select id="SelectVersion" class="TopBarVersionDrop" onchange="location = this.options[this.selectedIndex].value;
						for (var i = 0; i < document.getElementById('SelectVersion').options.length; i++) {
							if (document.getElementById('SelectVersion').options[i].attributes.selected)
								document.getElementById('SelectVersion').selectedIndex=i;
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/emailerrors.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/emailerrors.html" >v24.2</option><option value="https://www.opendental.com/manual241/emailerrors.html" >v24.1</option><option value="https://www.opendental.com/manual233/emailerrors.html" >v23.3</option><option value="https://www.opendental.com/manual232/emailerrors.html" >v23.2</option><option value="https://www.opendental.com/manual231/emailerrors.html" >v23.1</option><option value="https://www.opendental.com/manual224/emailerrors.html" >v22.4</option><option value="https://www.opendental.com/manual223/emailerrors.html" >v22.3</option><option value="https://www.opendental.com/manual222/emailerrors.html" >v22.2</option><option value="https://www.opendental.com/manual221/emailerrors.html" >v22.1</option><option value="https://www.opendental.com/manual214/emailerrors.html" >v21.4</option><option value="https://www.opendental.com/manual213/emailerrors.html" >v21.3</option><option value="https://www.opendental.com/manual212/emailerrors.html" >v21.2</option><option value="https://www.opendental.com/manual211/emailerrors.html" >v21.1</option><option value="https://www.opendental.com/manual205/emailerrors.html" >v20.5</option><option value="https://www.opendental.com/manual204/emailerrors.html" >v20.4</option><option value="https://www.opendental.com/manual203/emailerrors.html" >v20.3</option><option value="https://www.opendental.com/manual202/emailerrors.html" >v20.2</option><option value="https://www.opendental.com/manual201/emailerrors.html" >v20.1</option><option value="https://www.opendental.com/manual194/emailerrors.html" >v19.4</option><option value="https://www.opendental.com/manual193/emailerrors.html" >v19.3</option><option value="https://www.opendental.com/manual192/emailerrors.html" >v19.2</option><option value="https://www.opendental.com/manual191/emailerrors.html" >v19.1</option><option value="https://www.opendental.com/manual184/emailerrors.html" >v18.4</option><option value="https://www.opendental.com/manual183/emailerrors.html" >v18.3</option><option value="https://www.opendental.com/manual182/emailerrors.html" >v18.2</option><option value="https://www.opendental.com/manual181/emailerrors.html" >v18.1</option><option value="https://www.opendental.com/manual174/emailerrors.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Email Errors</p></div>
<div class="GeneralPageContent">
<p>If experiencing errors when trying to <a href="emailmessage.html">Send Email</a>, the information below may be helpful.</p>
<p class="MarginBottomZero">The most common reason for email errors is incorrect information entered in <a href="emailsetup.html">Email Setup</a>. If sending email fails, follow these general steps:  </p>
<ul class="MarginBottomGap">
<li>Verify the username, password, server, and port information is entered correctly. Username should be the full email address (e.g., john@email.com).</li>
<li>Check the internet connection.</li>
<li>If emails can be sent outside Open Dental, antivirus software may be blocking emails. To test this, disable antivirus and try again. An exception may need to be added for <i>OpenDental.exe</i>.</li>
</ul>
<h2>Email Settings by Host</h2>
<p>We have gathered settings for some email hosts. These settings may change at any time so always rely on the settings provided by the email provider.</p>
<table class="simpletable">
<tr>
<th style="width:14%"></th>
<th style="width:14%">Username</th>
<th style="width:14%">Use SSL?</th>
<th style="width:14%">Outgoing SMTP Server</th>
<th style="width:14%">Outgoing Port</th>
<th style="width:14%">Incoming POP3 Server</th>
<th style="width:14%">Incoming Port</th>
</tr>
<tr>
<td><b>Alaska Communications</b></td>
<td>xxxx@acsalaska.net</td>
<td>checked</td>
<td>mail.acsalaska.net</td>
<td>587 or 465</td>
<td>mail.acsalaska.net</td>
<td>995</td>
</tr>
<tr>
<td><b>AOL</b></td>
<td>xxxx@aol.com</td>
<td>checked</td>
<td>smtp.aol.com</td>
<td>587</td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>Aspida</b></td>
<td>xxx@xxx.com</td>
<td>checked</td>
<td>mail02.aspida.us</td>
<td>0</td>
<td>mail02.aspida.us</td>
<td>0</td>
</tr>
<tr>
<td><b>AT &amp; T</b></td>
<td>xxxx@att.net</td>
<td>checked</td>
<td>outbound.att.net</td>
<td>465</td>
<td>inbound.att.net</td>
<td>995</td>
</tr>
<tr>
<td><b>Brinkster</b></td>
<td>xxxxx@xxx.com</td>
<td>unchecked</td>
<td>mymail.brinkster.com</td>
<td>25</td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>Comcast</b></td>
<td>xxxx@comcast.net</td>
<td>checked</td>
<td>smtp.comcast.net</td>
<td>587 or 465</td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>Cox Communications</b></td>
<td>xxxx@cox.net</td>
<td>checked</td>
<td>smtp.coxmail.com</td>
<td>465</td>
<td>pop.coxmail.com</td>
<td>995</td>
</tr>
<tr>
<td><b>Dreamhost</b></td>
<td>xxx@yourdomain.com</td>
<td>checked</td>
<td>smpt.dreamhost.com</td>
<td>465</td>
<td>imap.dreamhost.com</td>
<td>993</td>
</tr>
<tr>
<td><b>Earthlink</b></td>
<td>xxxx@yourdomain.com</td>
<td>checked</td>
<td>smtpauth.earthlink.net or smtp.yourdomain.com</td>
<td>587</td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>Einstein Medical</b></td>
<td>xxxx@yourdomain.com</td>
<td>checked</td>
<td>smtp.einsteinmail.com</td>
<td>587</td>
<td>imap.einsteinmail.com</td>
<td>995</td>
</tr>
<tr>
<td><b>EnGuard</b></td>
<td>xxxx@yourdomain.com </td>
<td>checked</td>
<td>mail6.enguard.com or mail3.enguard.com</td>
<td>587 or 465</td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>FatCow (Roundcube)</b></td>
<td>xxxx@yourdomain.com</td>
<td>checked</td>
<td>smtp.fatcow.com</td>
<td>465</td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>GoDaddy</b></td>
<td>xxxx@xxx.com</td>
<td>unchecked</td>
<td>smtpout.secureserver.net</td>
<td>25 or 465</td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>Hostinger</b></td>
<td>xxxx@xxxx.com</td>
<td>checked</td>
<td>smtp.hostinger.com</td>
<td>465</td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>Hotmail</b></td>
<td>xxxx@hotmail.com</td>
<td>checked</td>
<td>smtp.live.com or smtp-mail.outlook.com</td>
<td>25 or 587</td>
<td>pop3.live.com</td>
<td>995</td>
</tr>
<tr>
<td><b>Hushmail</b></td>
<td>Hushmail Email Address</td>
<td>checked</td>
<td>smtp.hushmail.com</td>
<td>465 or 587</td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>iCloud (Mozilla Thunderbird)</b></td>
<td>xxxx@xxx.net</td>
<td>checked</td>
<td>smtp.mail.me.com</td>
<td>587</td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>iCore</b></td>
<td>xxxx@direct.icoreexchange.com</td>
<td>checked</td>
<td>dout.icoreexchange.com</td>
<td>465</td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>IONOS (1and1.com)</b></td>
<td>xxx@yourdomain.com</td>
<td>checked</td>
<td>smtp.1and1.com </td>
<td>587</td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>Just Host</b></td>
<td>xxx@domainname.com</td>
<td>checked</td>
<td>just38.justhost.com</td>
<td>465</td>
<td></td>
<td>995</td>
</tr>
<tr>
<td><b>Luxsci</b></td>
<td>xxx@domainname.com</td>
<td>checked</td>
<td>abundant.secctr.com </td>
<td>587</td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>Officite</b></td>
<td>xxx@yourdomain.com</td>
<td>checked</td>
<td>mail.officite.com</td>
<td>587</td>
<td>mail.officite.com</td>
<td>995</td>
</tr>
<tr>
<td><b>MSN Live</b></td>
<td>xxx@xxx.com</td>
<td>checked</td>
<td>smtp.live.com</td>
<td>587</td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>NameCheap</b></td>
<td>xxx@yourdomain.com</td>
<td>checked</td>
<td>mail.privateemail.com</td>
<td>587 or 465</td>
<td>mail.privateemail.com</td>
<td>587 or 465</td>
</tr>
<tr>
<td><b>Optimum</b></td>
<td>xxx@optimum.net</td>
<td>unchecked</td>
<td>mail.optimum.net</td>
<td>25</td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>PacBell.net</b></td>
<td>xxxx@pacbell.net</td>
<td>unchecked</td>
<td>outbound.att.net</td>
<td>587</td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>Prosites (Roundcube)</b></td>
<td>xxxx@yourdomain.com</td>
<td>checked</td>
<td>smtp.prosites.com</td>
<td>465 or 10465 or 11465</td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>Rackspace</b></td>
<td>xxxx@yourdomain.com</td>
<td>checked</td>
<td>secure.emailsrvr.com</td>
<td>465</td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>Roundcube</b></td>
<td>xxx@domainname.com</td>
<td>checked</td>
<td>mail.domainname.com</td>
<td>587</td>
<td>mail.domainname.com</td>
<td>995</td>
</tr>
<tr>
<td><b>SendInc</b></td>
<td>SendInc alias email address</td>
<td>checked</td>
<td>smtp.sendinc.net</td>
<td>465</td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>Sesame</b></td>
<td>xxxx@yourdomain.com</td>
<td>checked</td>
<td>sesameemail.com</td>
<td>465</td>
<td>sesameemail.com</td>
<td>995</td>
</tr>
<tr>
<td><b>Solution 21</b></td>
<td>xxxx@xxx.com</td>
<td>unchecked</td>
<td>mail.solution21mail.com</td>
<td>25</td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>Time Warner (Insight)</b></td>
<td>xxxx@xxx.com</td>
<td>checked</td>
<td>mail.twc.com</td>
<td>587</td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>TNT</b></td>
<td>xxxx@xxx.com</td>
<td>checked</td>
<td>mail.tntsupport.net or mail-02.tntsupport.net</td>
<td>587 or 25</td>
<td></td>
<td>143</td>
</tr>
<tr>
<td><b>Verizon</b></td>
<td>xxxx@verizon.net</td>
<td>checked</td>
<td>smtp.verizon.net</td>
<td>465</td>
<td></td>
<td></td>
</tr>
<tr>
<td><b>Yahoo</b></td>
<td>xxxx@yahoo.com</td>
<td>checked</td>
<td>smtp.mail.yahoo.com</td>
<td>465</td>
<td>pop.mail.yahoo.com</td>
<td>995</td>
</tr>
<tr>
<td><b>Zoho</b></td>
<td>xxxx@zoho.com</td>
<td>checked</td>
<td>smtppro.zoho.com</td>
<td>465</td>
<td></td>
<td></td>
</tr>
</table>
<br/><h2>Specific Errors &amp; Solutions</h2>
<p>If you receive any of the following errors, it means the username and/or password entered in General Email Settings is invalid.</p>
<ul>
<li>Authentication Failed</li>
<li>Mailbox unavailable. The server response was: 5.7.3 Requested action aborted: user not authenticated.</li>
<li>Mailbox Unavailable. The server response was: #5.1.0 Authentication required.</li>
<li>Bad sequence of commands. The server response was: you must authenticate first (#5.5.1).</li>
</ul>
<br/><p><b>Error: Mailbox Unavailable. The server responses was: #5.1.0 Address rejected. </b></p>
<p>Solution 1: Patient's email address is invalid. Send a test email to yourself to verify the message is only when using the patient's email address.</p>
<p>Solution 2: If sending from a new email address, check your inbox and open another email. This may activate the email address. Send another test to check.</p>
<p><b>Error: The operation has timed out.</b></p>
<p>Solution: Do some research and find out what port your email provider recommends, then try it. For example, for Gmail smtp.gmail.com with SSL, port 465 has worked for sending emails with attachments.</p>
<p><b>Error: All confirmation emails failed.</b></p>
<p>Solution: This can happen if the subject line of the email mistakenly includes the body of the message. Check <a href="recallsetup.html">Setup Recall</a> to make sure the subject line has a reasonable amount of words.</p>
<p><b>Error: Mailbox name not allowed. The server response was: sorry, that domain isn't in my list of allowed rcpthosts.</b></p>
<p class="MarginBottomZero">Solutions: </p>
<ul class="MarginBottomGap">
<li>Make sure the username and password are correctly entered. Verify it works on the email host's website.</li>
<li>The remote mail server may not like the email address of sender. Make sure it is the same email as entered for the username.</li>
<li>Something on the server has changed (e.g. the proxy or white list) or a new antivirus software is acting like the domain is dangerous.</li>
<li>The email host may have marked the address as spam. Create a new email address and see if it works.</li>
</ul>
<p><b>Error: Command not implemented. The server response was :5.5.41. Unrecognized command. z28sm22907yhn.7</b></p>
<p>Solution: In Email Setup, check the SSL box. Another possibility is to verify the password is correct. Some computers connected to the network and using the same email setup in Open Dental may be able to still use the email service if this box is unchecked.</p>
<p><b>Error: The remote certificate is invalid according to the validation procedure.</b></p>
<p>Solution: In Email Setup, uncheck the SSL box.</p>
<p><b>Error: Service not available, closing transmission channel.</b></p>
<p>Solution 1: Try a different outgoing port.</p>
<p>Solution 2: It could be caused by antivirus software.</p>
<p><b>Problem: Open Dental appears to have successfully sent email, but recipient never received it. </b></p>
<p>Solution: Your mail server may block outgoing mail if too many emails are sent at one time. Contact your provider to change the setting.</p>
<p><b>Error: Email fails to send and an error message reads: "Transaction failed. The server response was: 5.7.1 &lt;yourpatient@someserver.com&gt;: Recipient address rejected: Access denied.</b></p>
<p>Solution: SMTP server will not relay the message; this is usually due to an incorrect password.</p>
<p><b>Error: Keyset does not exist.</b></p>
<p>Solution: Run Open Dental as administrator.</p>
<p><b>Error: Mailbox unavailable. The server response was: (WS-SVR) [123.123.123.123]:12345 is currently not permitted to relay.</b></p>
<p>Solution: Contact your email domain provider and have them allow the relay from Open Dental.</p>
<p><b>Error: Error retrieving email messages: The stream used to retrieve responses from was closed. </b></p>
<p>Solution: Check your incoming email settings in Email Setup.</p>
<p><b>Error: Error retrieving email messages: The handshake failed due to an unexpected packet format.</b></p>
<p>Solution: This error can happen if your email address is not configured properly. Specifically, if your email account uses SSL and you do not have the SSL option enabled, or if you have SSL enabled and your email account does not use SSL. See Email Setup.</p>
<p><b>Problem: In the Email Inbox or Progress Notes, email preview and message are showing in HTML code.</b></p>
<p>Solution: This means the email was sent using Rich Text/HTML format instead of Plain Text.</p>
<p><b>Problem: An incoming encrypted message is not decrypted. </b></p>
<p>Solution: This happens when decryption fails. Usually, decryption happens automatically when the message is received. However, if the email is from an address with a security certificate that is not trusted, your private decryption key is not installed on the local computer, or the encryption is not in the correct format, decryption fails. To see encrypted email options, see <a href="emailencrypted.html">Email Encryption Options</a>. To add a certificate to your trusted list or retry decryption. see <a href="emailinbox.html">Email Client</a>, When Decryption Fails.</p>
<p><b>Error: Failed to send. Error message from the email client was: Failure sending mail.</b></p>
<p>Email hosts have a maximum attachment size when sending attachments from Open Dental. If the file size(s) are too large, the email will fail. </p>
<p><b>Error: Email message cannot contain the URL [URL] as this is only allowed for eServices.</b></p>
<p>Remove the noted URL from the email message. This can occur when attempting to use an eServices short URL in an email template.</p>
<p><b>Error: Email provider is having temporary send issues. This could be due to high email demand. Please try again later.</b></p>
<p>There was an issue when attempting to send the email on the email provider's end. This is a temporary issue, and you should be able to send the email at a later time. </p>
<h2>Yahoo</h2>
<p><b>Error: The transport failed to connect to the server</b></p>
<p>Solution: Set the SMTP server to: plus.smtp.mail.yahoo.com.</p>
<p><b>Error: The message could not be sent to the SMTP server. The transport error code was 0x80040217. The server response was not available</b></p>
<p>Solution: Yahoo is blocking "less secure" 3rd-party applications. Create an <a href="https://help.yahoo.com/kb//learn-generate-third-party-passwords-sln15241.html">App password</a> for use with Open Dental.</p>
<h2>Gmail</h2>
<p>Gmail accounts should be authorized using the <b>Sign in with Google</b> button in <a href="emailaddressedit.html">Email Address Edit</a>. If any errors occur when sending, clear tokens in the Edit Email Address window and re-authorize the account. If errors continue, ensure Open Dental version 22.1.61, 22.2.41, or 22.3.10 or greater is installed and try again. It may be beneficial to clear the tokens for Open Dental within the Google account settings.</p>
<p>Due to increased anti-spam measures implemented by Google, accounts may experience errors when sending. There are a variety of errors a user may receive. In general, Google requires a higher level of account authentication. See the following link for troubleshooting details: <a href="https://support.google.com/mail/answer/81126#authentication">https://support.google.com/mail/answer/81126#authentication</a>.</p>
<h2>GoDaddy</h2>
<p>Authorize GoDaddy accounts through Office365 using the <b>Sign in with Microsoft</b> button in Email Address Edit. In rare scenarios, the setting above can be used instead.</p>
<h2>Outlook / Office 365</h2>
<p>Microsoft accounts should be authorized using the <b>Sign in with Microsoft</b> button in Email Address Edit.</p>
<h2>Televox</h2>
<p><b>Error: Service not available, Not able to send message: </b></p>
<p>Solution: Use Port 587.</p>
<h2>Prosites</h2>
<p><b>Error: The message could not be sent to the SMTP server. The transport error code was 0x800ccc6a. The server response was 451. </b></p>
<p>Solution: Update to the most recent version of Open Dental.</p>
<h2>AOL</h2>
<p><b>Error: Failed to send email. Error message from the email client was: Failure sending mail.</b></p>
<p>Solution: AOL may require an app password that can be created in AOL Account Security. </p>
</div>
</div>
</body>
</html>```
