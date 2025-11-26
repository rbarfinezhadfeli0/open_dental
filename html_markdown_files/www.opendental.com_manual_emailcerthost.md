# File: ./www.opendental.com/manual/emailcerthost.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Email Certificate Hosting</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('emailcerthost','emailsecuritycertificates','emailsetup','+manage','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/emailcerthost.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/emailcerthost.html" >v24.2</option><option value="https://www.opendental.com/manual241/emailcerthost.html" >v24.1</option><option value="https://www.opendental.com/manual233/emailcerthost.html" >v23.3</option><option value="https://www.opendental.com/manual232/emailcerthost.html" >v23.2</option><option value="https://www.opendental.com/manual231/emailcerthost.html" >v23.1</option><option value="https://www.opendental.com/manual224/emailcerthost.html" >v22.4</option><option value="https://www.opendental.com/manual223/emailcerthost.html" >v22.3</option><option value="https://www.opendental.com/manual222/emailcerthost.html" >v22.2</option><option value="https://www.opendental.com/manual221/emailcerthost.html" >v22.1</option><option value="https://www.opendental.com/manual214/emailcerthost.html" >v21.4</option><option value="https://www.opendental.com/manual213/emailcerthost.html" >v21.3</option><option value="https://www.opendental.com/manual212/emailcerthost.html" >v21.2</option><option value="https://www.opendental.com/manual211/emailcerthost.html" >v21.1</option><option value="https://www.opendental.com/manual205/emailcerthost.html" >v20.5</option><option value="https://www.opendental.com/manual204/emailcerthost.html" >v20.4</option><option value="https://www.opendental.com/manual203/emailcerthost.html" >v20.3</option><option value="https://www.opendental.com/manual202/emailcerthost.html" >v20.2</option><option value="https://www.opendental.com/manual201/emailcerthost.html" >v20.1</option><option value="https://www.opendental.com/manual194/emailcerthost.html" >v19.4</option><option value="https://www.opendental.com/manual193/emailcerthost.html" >v19.3</option><option value="https://www.opendental.com/manual192/emailcerthost.html" >v19.2</option><option value="https://www.opendental.com/manual191/emailcerthost.html" >v19.1</option><option value="https://www.opendental.com/manual184/emailcerthost.html" >v18.4</option><option value="https://www.opendental.com/manual183/emailcerthost.html" >v18.3</option><option value="https://www.opendental.com/manual182/emailcerthost.html" >v18.2</option><option value="https://www.opendental.com/manual181/emailcerthost.html" >v18.1</option><option value="https://www.opendental.com/manual174/emailcerthost.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Email Certificate Hosting</p></div>
<div class="GeneralPageContent">
<p><span style="color:red">Encrypted Email is obsolete. Open Dental now offers <xref href="secureemail.xml">Secure Email</xref>, the easiest and most secure method to communicate with patients and outside providers via email. Encrypted Email was a previous method for secure communication. While still available, it is complex to set up and is not recommended. The information below is available as a reference but may not be up-to-date.</span></p>
<p>To host the certificate with Open Dental, register the certificate using the registration tool.</p>
<p>In the <a href="emailaddressedit.html">Email Address Edit</a> window, at the bottom, click <b>Certificate</b>.</p>
<img src="images/emailhostCertReg.gif" width="594" height="332"/><p>To send secure email using <a href="direct.html">Direct Messaging</a>, the public email certificate must be hosted in DNS. Open Dental offers public email certificate hosting or you can host the public certificate elsewhere. To obtain a certificate, see <a href="emailsecuritycertificates.html">Email Certificate</a>.</p>
<p class="MarginBottomZero">Follow these steps to register the certificate:  </p>
<ol class="MarginBottomGap">
<li>Verify the <b>Email Address</b> entered. One certificate can be registered for a particular email address at one time. </li>
<li>Click<b> Send Code</b>. An email will be sent the address with a verification code. </li>
<li>Copy the verification code from the email to the <b>Verification Code</b> field. </li>
<li>Enter the <b>Certificate File Path</b>. Click <b>[...]</b> to browse to and select the public certificate file.</li>
<li>Click OK. </li>
</ol>
<p>Certificates typically expire every 18 months. When a certificate expires, create a new certificate and register again. Old certificates will be overwritten.</p>
</div>
</div>
</body>
</html>```
