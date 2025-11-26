# File: ./www.opendental.com/manual232/emailoutlooksign.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Email Certificate Outlook</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('emailoutlooksign','emailencrypted','emailmessage','toolbar','manual')">
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
						}"><option value="https://www.opendental.com/manual243/emailoutlooksign.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/emailoutlooksign.html" >v24.2</option><option value="https://www.opendental.com/manual241/emailoutlooksign.html" >v24.1</option><option value="https://www.opendental.com/manual233/emailoutlooksign.html" >v23.3</option><option value="https://www.opendental.com/manual232/emailoutlooksign.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/emailoutlooksign.html" >v23.1</option><option value="https://www.opendental.com/manual224/emailoutlooksign.html" >v22.4</option><option value="https://www.opendental.com/manual223/emailoutlooksign.html" >v22.3</option><option value="https://www.opendental.com/manual222/emailoutlooksign.html" >v22.2</option><option value="https://www.opendental.com/manual221/emailoutlooksign.html" >v22.1</option><option value="https://www.opendental.com/manual214/emailoutlooksign.html" >v21.4</option><option value="https://www.opendental.com/manual213/emailoutlooksign.html" >v21.3</option><option value="https://www.opendental.com/manual212/emailoutlooksign.html" >v21.2</option><option value="https://www.opendental.com/manual211/emailoutlooksign.html" >v21.1</option><option value="https://www.opendental.com/manual205/emailoutlooksign.html" >v20.5</option><option value="https://www.opendental.com/manual204/emailoutlooksign.html" >v20.4</option><option value="https://www.opendental.com/manual203/emailoutlooksign.html" >v20.3</option><option value="https://www.opendental.com/manual202/emailoutlooksign.html" >v20.2</option><option value="https://www.opendental.com/manual201/emailoutlooksign.html" >v20.1</option><option value="https://www.opendental.com/manual194/emailoutlooksign.html" >v19.4</option><option value="https://www.opendental.com/manual193/emailoutlooksign.html" >v19.3</option><option value="https://www.opendental.com/manual192/emailoutlooksign.html" >v19.2</option><option value="https://www.opendental.com/manual191/emailoutlooksign.html" >v19.1</option><option value="https://www.opendental.com/manual184/emailoutlooksign.html" >v18.4</option><option value="https://www.opendental.com/manual183/emailoutlooksign.html" >v18.3</option><option value="https://www.opendental.com/manual182/emailoutlooksign.html" >v18.2</option><option value="https://www.opendental.com/manual181/emailoutlooksign.html" >v18.1</option><option value="https://www.opendental.com/manual174/emailoutlooksign.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Email Certificate Outlook</p></div>
<div class="GeneralPageContent">
<p><span style="color:red">Encrypted Email is obsolete. Open Dental now offers <xref href="secureemail.xml">Secure Email</xref>, the easiest and most secure method to communicate with patients and outside providers via email. Encrypted Email was a previous method for secure communication. While still available, it is complex to set up and is not recommended. The information below is available as a reference but may not be up-to-date.</span></p>
<p>When you send an <a href="emailencrypted.html">Encrypted Email</a>, the email address receiving the email is also required to have a secure digital ID (email security certificate). The digital ID verifies that a receiver is a trusted source. Any provider can become a trusted source by obtaining a digital ID and setting it up on their system. These steps explain how to obtain, then import a digital ID into Microsoft Outlook 2013 so that providers can receive encrypted email messages.</p>
<ol>
<li>Obtain a digital ID (<a href="emailsecuritycertificates.html">Email Certificate</a>) from a Certificate Authority (e.g. Comodo (<a href="https://www.comodo.com/home/email-security/free-email-certificate.php">https://www.comodo.com/home/email-security/free-email-certificate.php</a>).</li>
<li>In Microsoft Outlook 2013, click File, Options, Trust Center, Trust Center Settings..., Email Security. <br/><img src="images/emailTrustCenter.gif" width="628" height="513" class="ImageInParagraph"/></li>
<li>Check two options: <ul>
<li>Add digital signature to outgoing messages.</li>
<li>Send clear text signed message when sending signed messages</li>
</ul>
</li>
<li>Under Digital IDs, click Import/Export... <br/><img src="images/emailDigIDImport.gif" width="420" height="452" class="ImageInParagraph"/></li>
<li>Click OK. <br/><img src="images/emailDigIDImport2.gif" width="398" height="286" class="ImageInParagraph"/></li>
<li>Click OK.</li>
<li>Send a clear text test email to the provider.</li>
</ol>
<br/><div class="Note">Note: Instructions may be different for other versions of Outlook, even though it has supported email signatures and encryption for many years.</div>
</div>
</div>
</body>
</html>```
