# File: ./www.opendental.com/manual232/encryption.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Encryption of Data at Rest and in Transit</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('encryption','securitycomputers','computernetworksetup','technical','manual')">
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
						}"><option value="https://www.opendental.com/manual243/encryption.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/encryption.html" >v24.2</option><option value="https://www.opendental.com/manual241/encryption.html" >v24.1</option><option value="https://www.opendental.com/manual233/encryption.html" >v23.3</option><option value="https://www.opendental.com/manual232/encryption.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/encryption.html" >v23.1</option><option value="https://www.opendental.com/manual224/encryption.html" >v22.4</option><option value="https://www.opendental.com/manual223/encryption.html" >v22.3</option><option value="https://www.opendental.com/manual222/encryption.html" >v22.2</option><option value="https://www.opendental.com/manual221/encryption.html" >v22.1</option><option value="https://www.opendental.com/manual214/encryption.html" >v21.4</option><option value="https://www.opendental.com/manual213/encryption.html" >v21.3</option><option value="https://www.opendental.com/manual212/encryption.html" >v21.2</option><option value="https://www.opendental.com/manual211/encryption.html" >v21.1</option><option value="https://www.opendental.com/manual205/encryption.html" >v20.5</option><option value="https://www.opendental.com/manual204/encryption.html" >v20.4</option><option value="https://www.opendental.com/manual203/encryption.html" >v20.3</option><option value="https://www.opendental.com/manual202/encryption.html" >v20.2</option><option value="https://www.opendental.com/manual201/encryption.html" >v20.1</option><option value="https://www.opendental.com/manual194/encryption.html" >v19.4</option><option value="https://www.opendental.com/manual193/encryption.html" >v19.3</option><option value="https://www.opendental.com/manual192/encryption.html" >v19.2</option><option value="https://www.opendental.com/manual191/encryption.html" >v19.1</option><option value="https://www.opendental.com/manual184/encryption.html" >v18.4</option><option value="https://www.opendental.com/manual183/encryption.html" >v18.3</option><option value="https://www.opendental.com/manual182/encryption.html" >v18.2</option><option value="https://www.opendental.com/manual181/encryption.html" >v18.1</option><option value="https://www.opendental.com/manual174/encryption.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Encryption of Data at Rest and in Transit</p></div>
<div class="GeneralPageContent">
<p>The information below is provided as a resource when making encryption decisions related to <a href="securitycomputers.html">Computer Security</a>. Open Dental does not provide technical support for encryption. Instead consult your IT professional.</p>
<p>Encryption of data prevents unauthorized users from viewing data (PHI) when there is a data breach (e.g. hacking, theft, or loss of data). HIPAA does not require encryption of data, however it is recommended. If there is a data breach, practices that have encrypted their data can qualify for Safe Harbor (patient notification may not be necessary or as difficult, see Breach Notification Rule below). Practices that have not encrypted the data must inform every patient that medical records have been compromised, and in some circumstances, notify the media.</p>
<ul>
<li>Breach Notification Rule: <a href="https://www.hhs.gov/hipaa/for-professionals/breach-notification/breach-reporting/index.html">https://www.hhs.gov/hipaa/for-professionals/breach-notification/breach-reporting/index.html</a>.</li>
<li>A Breach Example: <a href="http://www.databreaches.net/north-memorial-hospital-settles-hhs-charges-for-1-55m/">http://www.databreaches.net/north-memorial-hospital-settles-hhs-charges-for-1-55m/</a>.</li>
</ul>
<br/><p>Your encryption plan needs to include data at rest and in transit, as well as any other PHI that you have on your systems. Documenting your data security policy is very important, as the burden of proof may rest upon you if there is a data breach.</p>
<h2>Encryption of Stored Data (at rest)</h2>
<p>Your encryption plan needs to include the data that is stored by Open Dental.</p>
<ul>
<li>Database: A database, generally MySQL, stores your patient data. By default, it is located at <b>C:\MySQL\Data\OpenDental\</b>.</li>
<li>Folder for Images and Documents (<a href="atozfolder.html">A to Z Folder</a>): This folder stores files that you scan or import.</li>
<li>Backups should also be encrypted.</li>
</ul>
<br/><p>Below are two options for encrypting stored patient data.</p>
<ul>
<li><a href="encryptionbitlocker.html">BitLocker Encryption</a>. This is the recommended method for the database and A to Z Folders, if you have a compatible Operating System. BitLocker encrypts an entire drive in a manner that avoids the more complex EFS method of certificates associated with individual Windows users.</li>
<li><a href="encryptionefs.html">EFS Encryption</a>. Works well for the database because only the MySQL database service accesses the files, and this service always runs under one Windows user. It does not work well for the A to Z folders because it does not work well for files that are shared to multiple users.</li>
</ul>
<br/><h2>Encryption of Data in transit</h2>
<p>Data in transit refers to data that is moved from one place to another and therefore could be intercepted by someone else. This includes data that is transported across a network or stored on a removable storage device.</p>
<p>Removable storage device: Use hardware encryption (e.g. encrypted hardware drives, encrypted USB drives) or software encryption (e.g. Bitlocker).</p>
<p>Data that is transported across a network: Open Dental does not move patient data off of your network in any automated fashion. However, there are optional features that involve sending patient data to, or from, your Open Dental database.</p>
<table class="simpletable">
<tr>
<th style="width:25%">Feature</th>
<th style="width:25%">Encrypted?</th>
<th style="width:25%">Encryption Method</th>
<th style="width:25%">Other Details</th>
</tr>
<tr>
<td><a href="clearinghouses.html">E-Claims</a></td>
<td>Yes</td>
<td>Varies by clearinghouse</td>
<td>Communication of insurance claim information by Open Dental is always secure. Contact the clearinghouse to determine their method. <ul>
<li>Some clearinghouses have Open Dental send the data via a secure HTTPS connection or SFTP (Secure File Transfer Protocol).</li>
<li>Many clearinghouses have Open Dental create the claim data locally on the client machine, then proprietary client uploads software that moves the data securely to their servers. Contact the clearinghouse to address encryption in transit.</li>
</ul>
</td>
</tr>
<tr>
<td>eRx</td>
<td>Yes</td>
<td>HTTPS over SSL</td>
<td></td>
</tr>
<tr>
<td>Open Dental Cloud</td>
<td>Yes</td>
<td>HTTP over SSL, LUKS drive encryption, SFTP, MFA</td>
<td></td>
</tr>
<tr>
<td>Email</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Plain text <a href="emailmessage.html">Email</a></td>
<td>No</td>
<td></td>
<td>Do not send PHI using regular plain text email. Thus do not include PHI when emailing recalls or confirmations or manually composing emails. To securely email statements use Electronic Statements.</td>
</tr>
<tr>
<td><a href="emailencrypted.html">Encrypted Email</a></td>
<td>Yes</td>
<td></td>
<td>It can be tedious to set up encrypted email and share public email keys with recipients ahead of time. We recommend using <a href="securewebmail.html">Secure WebMail Feature</a> instead.</td>
</tr>
<tr>
<td>eServices</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="econnector.html">eConnector</a></td>
<td>Yes</td>
<td>AES (formerly known as Rijndael)</td>
<td>This applies to the communication between Open Dental's secure servers and your practice computers. Advanced Encryption Standard (AES) is a standardized encryption specification established by the U.S. National Institute of Standards and technology (NIST) that complies with the Federal Information Processing Standard (FIPS) as set forward by the federal government in regard to security of data in transit. We use a 24 byte (192 bit) key, which falls well within the guidelines set by the federal government.Used for all eServices that require the eConnector. </td>
</tr>
<tr>
<td>Browser interface for: <p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><a href="../site/ereminders.html">eConfirmations</a></li>
<li><a href="../site/mobileweb.html">Mobile Web Feature</a></li>
<li><a href="../site/patientportal.html">Patient Portal Feature</a></li>
<li><a href="../site/websched.html">Web Sched Feature</a> (Recall, New Patient, ASAP)</li>
</ul>
</td>
<td>Yes</td>
<td>HTTPS over SSL via TLS 1.2</td>
<td>Mobile Web: Data is not stored on the mobile device so PHI is not lost if device is lost or stolen.</td>
</tr>
<tr>
<td><a href="securewebmail.html">Secure WebMail Feature</a></td>
<td>Yes</td>
<td>HTTPS over SSL</td>
<td>Recommended as a two-way encrypted communication method with patients. You can even set up portal accounts for providers with whom you regularly communicate so you can exchange PHI with them. See <a href="https://opendental.com/manual/securewebmail.html">Secure WebMail</a>.</td>
</tr>
<tr>
<td>eClipboard / ODMobile</td>
<td>Yes</td>
<td>HTTPS over SSL via TLS 1.2</td>
<td>ODMobile data is stored on the device via SqlLite, which uses SHA512 encryption. eClipboard data is not stored on device.</td>
</tr>
<tr>
<td>Mass Email (no longer offered)</td>
<td>No</td>
<td></td>
<td>Mass Emails should be treated like plain text email (e.g. should not include PHI).</td>
</tr>
<tr>
<td>Sending/Receiving Text Messages (<a href="../site/textintegrated.html">Integrated Texting Feature</a>)</td>
<td>No</td>
<td></td>
<td>Do not send PHI using text messaging. Thus do not include PHI when texting confirmations or manually composing texts.</td>
</tr>
<tr>
<td><a href="../site/webforms.html">Web Forms Feature</a></td>
<td>Yes</td>
<td>HTTPS over SSL</td>
<td></td>
</tr>
<tr>
<td>Secure Email</td>
<td>Yes</td>
<td>HTTPS over SSL via TLS 1.2</td>
<td></td>
</tr>
<tr>
<td>Payment Portal </td>
<td>Yes</td>
<td>HTTPS over SSL via TLS 1.3</td>
<td></td>
</tr>
</table>
<br/><p>If using <a href="middletier.html">Middle Tier</a>, for external communication you must set up HTTPS over SSL.</p>
<h2>Sending PHI via Email or Text Messages</h2>
<p>In general, PHI should not be sent via plain text email or text message, even if using Open Dental for those communications. By default, eReminders, eConfirmations, and Web Sched notifications do not send PHI, however you can manually compose messages that do include PHI. We do not recommend it.</p>
<p>To securely communicate with your patients, we recommend setting up Patient Portal accounts. Then you can use Secure WebMail for secure two-way communication. You can even set up portal accounts for providers with whom you regularly communicate so you can exchange PHI.</p>
<p>While you can set up <a href="encryptedstandard.html">Standard Encrypted Email</a>, it can be painful because you must manually set up the encryption with each recipient ahead of time (share a public key).</p>
<p>PHI in Emailed Statements: If sending statements by email from Open Dental, make sure the patient has given you permission to send the PHI and that you have documented it on a by-patient basis. To send statements via email without worrying about permission, use a secure service like ClaimConnect.</p>
<h2>Technical Details</h2>
<p>Open Dental supports modern secure cryptographic protocols that provide communication security over computer networks. The browser interfaces for eServices utilize the Transport Layer Security (TLS) 1.2 protocol as defined by RFC 5246 and further refined by RFC 6176 to remove backward compatibility with Secure Sockets Layer (SSL) such that TLS sessions never negotiate the use of SSL version 2.0.</p>
<p>Secured data transmitted to and from customers and patients is and remains secure in transit. Open Dental has never used OpenSSL or any other vulnerable SSL implementation. Heartbleed (<a href="http://heartbleed.com/">heartbleed.com</a>) is a much publicized security flaw in OpenSSL announced on April 7, 2014 that had been vulnerable for about two years. Open Dental services that transmit data do not and have never used OpenSSL and do not have this weakness. Open Dental uses Microsoft's Internet Information Services or IIS instead, which is not affected and remains secure.</p>
</div>
</div>
</body>
</html>```
