# File: ./www.opendental.com/manual232/emailencrypted.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Email Encryption Options</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('emailencrypted','emailmessage','toolbar','manual')">
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
						}"><option value="https://www.opendental.com/manual243/emailencrypted.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/emailencrypted.html" >v24.2</option><option value="https://www.opendental.com/manual241/emailencrypted.html" >v24.1</option><option value="https://www.opendental.com/manual233/emailencrypted.html" >v23.3</option><option value="https://www.opendental.com/manual232/emailencrypted.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/emailencrypted.html" >v23.1</option><option value="https://www.opendental.com/manual224/emailencrypted.html" >v22.4</option><option value="https://www.opendental.com/manual223/emailencrypted.html" >v22.3</option><option value="https://www.opendental.com/manual222/emailencrypted.html" >v22.2</option><option value="https://www.opendental.com/manual221/emailencrypted.html" >v22.1</option><option value="https://www.opendental.com/manual214/emailencrypted.html" >v21.4</option><option value="https://www.opendental.com/manual213/emailencrypted.html" >v21.3</option><option value="https://www.opendental.com/manual212/emailencrypted.html" >v21.2</option><option value="https://www.opendental.com/manual211/emailencrypted.html" >v21.1</option><option value="https://www.opendental.com/manual205/emailencrypted.html" >v20.5</option><option value="https://www.opendental.com/manual204/emailencrypted.html" >v20.4</option><option value="https://www.opendental.com/manual203/emailencrypted.html" >v20.3</option><option value="https://www.opendental.com/manual202/emailencrypted.html" >v20.2</option><option value="https://www.opendental.com/manual201/emailencrypted.html" >v20.1</option><option value="https://www.opendental.com/manual194/emailencrypted.html" >v19.4</option><option value="https://www.opendental.com/manual193/emailencrypted.html" >v19.3</option><option value="https://www.opendental.com/manual192/emailencrypted.html" >v19.2</option><option value="https://www.opendental.com/manual191/emailencrypted.html" >v19.1</option><option value="https://www.opendental.com/manual184/emailencrypted.html" >v18.4</option><option value="https://www.opendental.com/manual183/emailencrypted.html" >v18.3</option><option value="https://www.opendental.com/manual182/emailencrypted.html" >v18.2</option><option value="https://www.opendental.com/manual181/emailencrypted.html" >v18.1</option><option value="https://www.opendental.com/manual174/emailencrypted.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Email Encryption Options</p></div>
<div class="GeneralPageContent">
<p><span style="color:red">Encrypted Email is obsolete. Open Dental now offers <xref href="secureemail.xml">Secure Email</xref>, the easiest and most secure method to communicate with patients and outside providers via email. Encrypted Email was a previous method for secure communication. While still available, it is complex to set up and is not recommended. The information below is available as a reference but may not be up-to-date.</span></p>
<p>For Open Dental Secure Email, see <a href="secureemailsetup.html">Secure Email Setup</a> and <a href="secureemailworkflow.html">Secure Email: Workflow</a>.</p>
<p>Sending and receiving encrypted <a href="emailmessage.html">Email</a> requires both sender and recipient to share public key security certificates (also known as digital signatures). This verifies that sender and recipient are trusted sources. Open Dental supports Standard Encrypted Email and Direct messaging. Both methods require that you obtain an <a href="emailsecuritycertificates.html">Email Certificate</a> and <a href="emailcertinstall.html">Install Private and Public Keys on a Workstation.</a></p>
<p><div class="Note">Note: Setting up encrypted email in Open Dental is similar to setting it up in Microsoft Outlook and Thunderbird. <table class="simpletable">
<tr>
<th style="width:25%">Topic</th>
<th style="width:25%">Open Dental Resources</th>
<th style="width:25%">Microsoft Outlook Resources</th>
<th style="width:25%">Thunderbird Resources</th>
</tr>
<tr>
<td>Get and Install a Digital ID</td>
<td><a href="emailsecuritycertificates.html">Email Certificate</a><p><a href="emailcertinstall.html">Email Certificate Install</a></p>
</td>
<td><a href="https://support.office.com/en-us/article/Get-a-digital-ID-0eaa0ab9-b8a2-4a7e-828b-9bded6370b7b#ID0EAABAAA=2016,_2013,_2010">Get a Digital ID</a></td>
<td><a href="https://support.mozilla.org/en-US/kb/digitally-signing-and-encrypting-messages#w_creating-pgp-keys">Creating PGP Keys</a></td>
</tr>
<tr>
<td>Exchanging Digital IDs</td>
<td><a href="emailinbox.html">Email Client</a>, Adding Trust</td>
<td><a href="https://support.office.com/en-us/article/Get-a-digital-ID-0eaa0ab9-b8a2-4a7e-828b-9bded6370b7b#ID0EAABAAA=2016,_2013,_2010">Add a Digital ID to your Contacts</a></td>
<td><a href="https://support.mozilla.org/en-US/kb/digitally-signing-and-encrypting-messages#w_creating-pgp-keys">Sending and Receiving Public Keys</a></td>
</tr>
</table>
</div>
</p>
<h2>Standard Encrypted Email</h2>
<p class="MarginBottomZero">Standard encrypted email is a secure method of exchanging email with trusted sources. Before encrypted email can be exchanged using Open Dental: </p>
<ul class="MarginBottomGap">
<li>Email must be setup. Email security certificates must be purchased and installed on workstations.</li>
<li>Both sender and recipient must manually share public key certificates by exchanging digitally signed messages.</li>
</ul>
<p>See <a href="encryptedstandard.html">Email Encryption Setup</a>.</p>
<p class="MarginBottomZero">How it works: </p>
<ol class="MarginBottomGap">
<li>In Open Dental, Provider A sends a clear text, unencrypted email to Provider B that contains Provider A's public key. To verify the public key is attached to the email, check the Signed By field on the Edit Email Window. It should contain Provider A's email address.</li>
<li>Provider B opens the unencrypted email and adds Provider A as a trusted source. In most email programs (e.g. Microsoft Outlook) there will be a notification in the email that the user can click to add a trusted source.</li>
<li>Provider B replies with an email that contains their public key (digital signature).</li>
<li>In Open Dental, Provider A opens the Email Inbox. Provider B's email message will have 'N' in the Sig column. Click the N to add Provider B's public key to the list of trusted sources on the workstation.</li>
<li>Provider A can now exchange encrypted email with Provider B.</li>
</ol>
<p>The certificate cache is always checked when sending. If a certificate expires, you will need to repeat the steps above with the recipient.</p>
<h2>Direct Messaging</h2>
<p>Direct messaging is a method of encrypted email that is intended to simplify the discovery of public key security certificates. Public key certificates are hosted in DNS so they can be discovered automatically using the domain part of the recipient's email address. Direct is used primarily by EHR providers to exchange clinical healthcare data securely with other providers.</p>
<p class="MarginBottomZero">Before Direct messages can be sent using Open Dental: </p>
<ul class="MarginBottomGap">
<li>Email must be setup.</li>
<li>Email security certificates must be purchased and installed on workstations.</li>
<li>Public key certificates must be installed on a hosting server for both sender and recipient.</li>
</ul>
<p>See <a href="direct.html">Email Direct Encryption</a>.</p>
<p class="MarginBottomZero">How it works: </p>
<ol class="MarginBottomGap">
<li>Both Provider A and Provider B install email security certificates on workstations and host public key certificates in DNS.</li>
<li>Provider A attempts to send an encrypted email to Provider B. A query automatically goes out to discover Provider B's public key certificate. When successfully found, the encrypted email is sent to Provider B.</li>
<li>Provider B receives the email, and if needed, adds Provider A's public key certificate to his list of trusted sources.</li>
</ol>
<p>Direct messages can be sent to a provider who does not use Direct (e.g. a non-EHR provider). The receiving provider must become a trusted source by obtaining a digital signature and setting it up on their system. See <a href="emailoutlooksign.html">Email Certificate Outlook</a> for instructions on how to create and setup a digital signature in Microsoft Outlook.</p>
</div>
</div>
</body>
</html>```
