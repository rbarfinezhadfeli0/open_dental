# File: ./www.opendental.com/manual243/hostedemailaddressverification.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Hosted Email Address Verification</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('hostedemailaddressverification','secureemailsetup','eservicessetup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/hostedemailaddressverification.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/hostedemailaddressverification.html" >v24.2</option><option value="https://www.opendental.com/manual241/hostedemailaddressverification.html" >v24.1</option><option value="https://www.opendental.com/manual233/hostedemailaddressverification.html" >v23.3</option><option value="https://www.opendental.com/manual232/hostedemailaddressverification.html" >v23.2</option><option value="https://www.opendental.com/manual231/hostedemailaddressverification.html" >v23.1</option><option value="https://www.opendental.com/manual224/hostedemailaddressverification.html" >v22.4</option><option value="https://www.opendental.com/manual223/hostedemailaddressverification.html" >v22.3</option><option value="https://www.opendental.com/manual222/hostedemailaddressverification.html" >v22.2</option><option value="https://www.opendental.com/manual221/hostedemailaddressverification.html" >v22.1</option><option value="https://www.opendental.com/manual214/hostedemailaddressverification.html" >v21.4</option><option value="https://www.opendental.com/manual213/hostedemailaddressverification.html" >v21.3</option><option value="https://www.opendental.com/manual212/hostedemailaddressverification.html" >v21.2</option><option value="https://www.opendental.com/manual211/hostedemailaddressverification.html" >v21.1</option><option value="https://www.opendental.com/manual205/hostedemailaddressverification.html" >v20.5</option><option value="https://www.opendental.com/manual204/hostedemailaddressverification.html" >v20.4</option><option value="https://www.opendental.com/manual203/hostedemailaddressverification.html" >v20.3</option><option value="https://www.opendental.com/manual202/hostedemailaddressverification.html" >v20.2</option><option value="https://www.opendental.com/manual201/hostedemailaddressverification.html" >v20.1</option><option value="https://www.opendental.com/manual194/hostedemailaddressverification.html" >v19.4</option><option value="https://www.opendental.com/manual193/hostedemailaddressverification.html" >v19.3</option><option value="https://www.opendental.com/manual192/hostedemailaddressverification.html" >v19.2</option><option value="https://www.opendental.com/manual191/hostedemailaddressverification.html" >v19.1</option><option value="https://www.opendental.com/manual184/hostedemailaddressverification.html" >v18.4</option><option value="https://www.opendental.com/manual183/hostedemailaddressverification.html" >v18.3</option><option value="https://www.opendental.com/manual182/hostedemailaddressverification.html" >v18.2</option><option value="https://www.opendental.com/manual181/hostedemailaddressverification.html" >v18.1</option><option value="https://www.opendental.com/manual174/hostedemailaddressverification.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Hosted Email Address Verification</p></div>
<div class="GeneralPageContent">
<p>Determine which email address is used to send Secure Email messages.</p>
<p>In the <a href="secureemailsetup.html">Secure Email Setup</a> window, click <b>Sender Addresses</b>.</p>
<img src="images/hostedEmailAddrVerification.png" width="912" height="405"/><p>Email addresses to be used for Secure Email notifications are listed along with the verification status.</p>
<p>The default email address used by Secure Email notifications is <i>noreply@patientviewer.com</i>. However, the office email address may be used instead. To use the office email address, add the email in <a href="emailsetup.html">Email Setup</a>, then verify the email address (see below). </p>
<p><div class="Note">Note: Yahoo email addresses are not recommended as they will be rejected due to Yahoo's DMARC policy. </div>
</p>
<p><b>Clinic</b>: Select a clinic from the dropdown. Verified email addresses for the clinic list.</p>
<p><b>Verification Status</b>: The verification status of the email address. Statuses include Failed, Not Started, Pending, Success, and Temporary Failure. </p>
<p class="MarginBottomZero"><b>Use 'NoReply' as default email address</b>: Determine the default selection for the Sender options when sending Secure Email. </p>
<ul class="MarginBottomGap">
<li>Checked: Defaults the <i>Sender</i> to 'NoReply'. Secure Emails are sent from <i>noreply@patientviewer.com</i>.</li>
<li>Unchecked: Defaults the <i>Sender</i> to the verified sender address.</li>
</ul>
<p><b>Add</b>: Select an email to start the verification process, see Verify Email Addresses below.</p>
<p><b>Delete</b>: Removes a selected email address from the list.</p>
<h2>Verify Email Addresses</h2>
<p>To verify an email address, click <b>Add</b>.</p>
<img src="images/hostedEmailAddresses.png" width="912" height="424"/><p>Email addresses already set up in Open Dental are listed. Additional emails can be added in <a href="emailsetup.html">Email Setup</a>.</p>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Select an email and click <b>OK</b>. An email containing a link to complete the verification process is sent to the selected email address.</li>
<li>In a web browser or email client, open the verification email sent from noreply@patientviewer.com and click the link to verify the email address.</li>
<li>Return to the Hosted Email Address Verification window, and click <b>Refresh</b> to update the verification status.</li>
</ol>
</div>
</div>
</body>
</html>```
