# File: ./www.opendental.com/manual232/emailsecuritycertificates.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Email Certificate</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('emailsecuritycertificates','emailsetup','+manage','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/emailsecuritycertificates.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/emailsecuritycertificates.html" >v24.2</option><option value="https://www.opendental.com/manual241/emailsecuritycertificates.html" >v24.1</option><option value="https://www.opendental.com/manual233/emailsecuritycertificates.html" >v23.3</option><option value="https://www.opendental.com/manual232/emailsecuritycertificates.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/emailsecuritycertificates.html" >v23.1</option><option value="https://www.opendental.com/manual224/emailsecuritycertificates.html" >v22.4</option><option value="https://www.opendental.com/manual223/emailsecuritycertificates.html" >v22.3</option><option value="https://www.opendental.com/manual222/emailsecuritycertificates.html" >v22.2</option><option value="https://www.opendental.com/manual221/emailsecuritycertificates.html" >v22.1</option><option value="https://www.opendental.com/manual214/emailsecuritycertificates.html" >v21.4</option><option value="https://www.opendental.com/manual213/emailsecuritycertificates.html" >v21.3</option><option value="https://www.opendental.com/manual212/emailsecuritycertificates.html" >v21.2</option><option value="https://www.opendental.com/manual211/emailsecuritycertificates.html" >v21.1</option><option value="https://www.opendental.com/manual205/emailsecuritycertificates.html" >v20.5</option><option value="https://www.opendental.com/manual204/emailsecuritycertificates.html" >v20.4</option><option value="https://www.opendental.com/manual203/emailsecuritycertificates.html" >v20.3</option><option value="https://www.opendental.com/manual202/emailsecuritycertificates.html" >v20.2</option><option value="https://www.opendental.com/manual201/emailsecuritycertificates.html" >v20.1</option><option value="https://www.opendental.com/manual194/emailsecuritycertificates.html" >v19.4</option><option value="https://www.opendental.com/manual193/emailsecuritycertificates.html" >v19.3</option><option value="https://www.opendental.com/manual192/emailsecuritycertificates.html" >v19.2</option><option value="https://www.opendental.com/manual191/emailsecuritycertificates.html" >v19.1</option><option value="https://www.opendental.com/manual184/emailsecuritycertificates.html" >v18.4</option><option value="https://www.opendental.com/manual183/emailsecuritycertificates.html" >v18.3</option><option value="https://www.opendental.com/manual182/emailsecuritycertificates.html" >v18.2</option><option value="https://www.opendental.com/manual181/emailsecuritycertificates.html" >v18.1</option><option value="https://www.opendental.com/manual174/emailsecuritycertificates.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Email Certificate</p></div>
<div class="GeneralPageContent">
<p><span style="color:red">Encrypted Email is obsolete. Open Dental now offers <xref href="secureemail.xml">Secure Email</xref>, the easiest and most secure method to communicate with patients and outside providers via email. Encrypted Email was a previous method for secure communication. While still available, it is complex to set up and is not recommended. The information below is available as a reference but may not be up-to-date.</span></p>
<p class="MarginBottomZero"><a href="emailsetup.html">Email</a> security certificates (digital IDs) are required for sending encrypted email. Each security certificate will be associated with an email address. Below are some services we are aware of that issue email security certificates. Click a link to visit each website: </p>
<ul class="MarginBottomGap">
<li>Comodo</li>
<li><a href="https://www.globalsign.com/en/secure-email/">GlobalSign</a></li>
<li><a href="http://www.symantec.com/">Symantec</a></li>
<li><a href="https://www.entrust.com/secure-email-certificates/">Entrust</a></li>
<li><a href="https://ssl.trustwave.com/email-digital-id">Trustwave</a></li>
</ul>
<p><b>Self-signed certificates</b>: You can also create a self-signed certificate, but these are unlikely to be automatically trusted or discovered by a third party. This means both parties must manually add the certificate to their internal list of trusted certificates. See your Windows documentation for instructions.</p>
<p>Certificates do expire and need to be renewed. A typical certificate life is 18 months, but can be increased to as much as 10 years or more, though security risk is increased.</p>
<p>Once you have obtained an email security certificate, <a href="emailcertinstall.html">Install Public and Private Keys on a Workstation</a>. For <a href="direct.html">Direct Messaging</a>, public keys also need to be installed on a hosting server. See <a href="emailcerthost.html">Email Certificate Hosting</a>.</p>
</div>
</div>
</body>
</html>```
