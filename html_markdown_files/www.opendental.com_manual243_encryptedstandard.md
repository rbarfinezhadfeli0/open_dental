# File: ./www.opendental.com/manual243/encryptedstandard.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Email Encryption Setup</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('encryptedstandard','emailencrypted','emailmessage','toolbar','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/encryptedstandard.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/encryptedstandard.html" >v24.2</option><option value="https://www.opendental.com/manual241/encryptedstandard.html" >v24.1</option><option value="https://www.opendental.com/manual233/encryptedstandard.html" >v23.3</option><option value="https://www.opendental.com/manual232/encryptedstandard.html" >v23.2</option><option value="https://www.opendental.com/manual231/encryptedstandard.html" >v23.1</option><option value="https://www.opendental.com/manual224/encryptedstandard.html" >v22.4</option><option value="https://www.opendental.com/manual223/encryptedstandard.html" >v22.3</option><option value="https://www.opendental.com/manual222/encryptedstandard.html" >v22.2</option><option value="https://www.opendental.com/manual221/encryptedstandard.html" >v22.1</option><option value="https://www.opendental.com/manual214/encryptedstandard.html" >v21.4</option><option value="https://www.opendental.com/manual213/encryptedstandard.html" >v21.3</option><option value="https://www.opendental.com/manual212/encryptedstandard.html" >v21.2</option><option value="https://www.opendental.com/manual211/encryptedstandard.html" >v21.1</option><option value="https://www.opendental.com/manual205/encryptedstandard.html" >v20.5</option><option value="https://www.opendental.com/manual204/encryptedstandard.html" >v20.4</option><option value="https://www.opendental.com/manual203/encryptedstandard.html" >v20.3</option><option value="https://www.opendental.com/manual202/encryptedstandard.html" >v20.2</option><option value="https://www.opendental.com/manual201/encryptedstandard.html" >v20.1</option><option value="https://www.opendental.com/manual194/encryptedstandard.html" >v19.4</option><option value="https://www.opendental.com/manual193/encryptedstandard.html" >v19.3</option><option value="https://www.opendental.com/manual192/encryptedstandard.html" >v19.2</option><option value="https://www.opendental.com/manual191/encryptedstandard.html" >v19.1</option><option value="https://www.opendental.com/manual184/encryptedstandard.html" >v18.4</option><option value="https://www.opendental.com/manual183/encryptedstandard.html" >v18.3</option><option value="https://www.opendental.com/manual182/encryptedstandard.html" >v18.2</option><option value="https://www.opendental.com/manual181/encryptedstandard.html" >v18.1</option><option value="https://www.opendental.com/manual174/encryptedstandard.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Email Encryption Setup</p></div>
<div class="GeneralPageContent">
<p><span style="color:red">Encrypted Email is obsolete. Open Dental now offers <xref href="secureemail.xml">Secure Email</xref>, the easiest and most secure method to communicate with patients and outside providers via email. Encrypted Email was a previous method for secure communication. While still available, it is complex to set up and is not recommended. The information below is available as a reference but may not be up-to-date.</span></p>
<p>Standard <a href="emailencrypted.html">encrypted email</a> is a secure method of exchanging email with trusted sources. It requires that both parties share public security certificates by exchanging digitally signed messages.</p>
<p>Requirements:</p>
<ul>
<li>Open Dental version 15.1 or greater.</li>
<li>You must have an email address.</li>
<li>The email address must be associated with an email security certificate.</li>
<li>The email certificate's public and private keys must be installed on each workstation that will receive encrypted email.</li>
<li>Both sender and recipient must manually share public key certificates by exchanging digitally signed messages.</li>
</ul>
<br/><h2>Open Dental Set up</h2>
<p>Enter email settings in <a href="emailsetup.html">Email Setup</a>.</p>
<p>Obtain <a href="emailsecuritycertificates.html">Email Certificate</a>.</p>
<p>Install public and private keys on workstations. See <a href="emailcertinstall.html">Email Certificate Install</a>.</p>
<p class="MarginBottomZero">For each person you want to exchange encrypted email with, share public key certificates by sending digitally signed messages.  </p>
<ol class="MarginBottomGap">
<li>In Open Dental, send a clear text, unencrypted email that contains your public key to the person you want to send the encrypted email to. You will know the email contains the public key if the Signed By field on the Edit Email Message window contains your email address (<a href="emailmessage.html">Email Message Edit</a>).</li>
<li>The recipient will open the unencrypted email and add your public key as a trusted source. In most email programs (e.g. Microsoft Outlook) there will be a notification in the email that the user can click to add a trusted source.</li>
<li>The recipient will send you an email that has their public key (digital signature).</li>
<li>In the Email Inbox, locate the sent message. It will have an N in the Sig column. Click the N to add the recipient's public key to the list of trusted sources on the workstation.</li>
</ol>
<p>Now encrypted email can be exchanged with the recipient.</p>
<p>The certificate cache is always checked when sending. If a certificate expires, you will need to repeat the steps above with the recipient.</p>
<p>To receive encrypted email, security certificates for your email address must be installed on workstations that will receive the email.</p>
<p>To send encrypted email, the email recipient must have encrypted email set up and have shared their public key with you.</p>
<p>Trust of Security Certificates are computer-specific. If you send an email from the computer you use as your <a href="emailinbox.html">Email Client</a> (Computer Name to Receive New Email From in General Email Settings), every time you send email, the recipient is added to your trusted list automatically. If you receive a message from an unknown recipient that is not in your trusted list, when you open email and decrypt a message, you will be prompted to add the recipient to your trusted list.</p>
<p>Direct messaging is a method of encrypted email that is intended to simplify the discovery of public key certificates, but additional setup is required. See <a href="direct.html">Email Direct Encryption</a>.</p>
</div>
</div>
</body>
</html>```
