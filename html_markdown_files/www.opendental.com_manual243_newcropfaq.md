# File: ./www.opendental.com/manual243/newcropfaq.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - NewCrop eRx Frequently Asked Questions</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('newcropfaq','newcrop','+eRx','+chartToolbar','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/newcropfaq.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/newcropfaq.html" >v24.2</option><option value="https://www.opendental.com/manual241/newcropfaq.html" >v24.1</option><option value="https://www.opendental.com/manual233/newcropfaq.html" >v23.3</option><option value="https://www.opendental.com/manual232/newcropfaq.html" >v23.2</option><option value="https://www.opendental.com/manual231/newcropfaq.html" >v23.1</option><option value="https://www.opendental.com/manual224/newcropfaq.html" >v22.4</option><option value="https://www.opendental.com/manual223/newcropfaq.html" >v22.3</option><option value="https://www.opendental.com/manual222/newcropfaq.html" >v22.2</option><option value="https://www.opendental.com/manual221/newcropfaq.html" >v22.1</option><option value="https://www.opendental.com/manual214/newcropfaq.html" >v21.4</option><option value="https://www.opendental.com/manual213/newcropfaq.html" >v21.3</option><option value="https://www.opendental.com/manual212/newcropfaq.html" >v21.2</option><option value="https://www.opendental.com/manual211/newcropfaq.html" >v21.1</option><option value="https://www.opendental.com/manual205/newcropfaq.html" >v20.5</option><option value="https://www.opendental.com/manual204/newcropfaq.html" >v20.4</option><option value="https://www.opendental.com/manual203/newcropfaq.html" >v20.3</option><option value="https://www.opendental.com/manual202/newcropfaq.html" >v20.2</option><option value="https://www.opendental.com/manual201/newcropfaq.html" >v20.1</option><option value="https://www.opendental.com/manual194/newcropfaq.html" >v19.4</option><option value="https://www.opendental.com/manual193/newcropfaq.html" >v19.3</option><option value="https://www.opendental.com/manual192/newcropfaq.html" >v19.2</option><option value="https://www.opendental.com/manual191/newcropfaq.html" >v19.1</option><option value="https://www.opendental.com/manual184/newcropfaq.html" >v18.4</option><option value="https://www.opendental.com/manual183/newcropfaq.html" >v18.3</option><option value="https://www.opendental.com/manual182/newcropfaq.html" >v18.2</option><option value="https://www.opendental.com/manual181/newcropfaq.html" >v18.1</option><option value="https://www.opendental.com/manual174/newcropfaq.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>NewCrop eRx Frequently Asked Questions</p></div>
<div class="GeneralPageContent">
<p>Below are questions frequently asked about prescribing using the <a href="newcrop.html">Ensora eRx (formerly NewCrop eRx) / Prescription</a> interface.</p>
<h2>Using Ensora eRx</h2>
<p><b>When are prescriptions synced into Open Dental from Ensora eRx?</b></p>
<p class="MarginBottomZero">Prescriptions successfully sent or added to the patient's <i>Active Medications</i> list in Ensora eRx are automatically copied to the patient's chart in Open Dental when the following occurs:  </p>
<ul class="MarginBottomGap">
<li>After clicking the eRx button, then closing the Ensora eRx window. If that patient's chart is already open, click the <b>Chart</b> button to refresh.</li>
<li>Click the eRx drop down in the toolbar, then <b>Refresh</b>.</li>
</ul>
<p><b>Who is the provider on the prescription?</b></p>
<p>The provider shows in the upper-right of the Compose Rx window; the staff shows in the upper left.</p>
<ul>
<li>If the currently logged-on user is associated to a provider in <a href="security.html">Security</a>, the associated provider used.</li>
<li>If the currently logged-on user is associated to an employee, not a provider, the patient's primary provider is used.</li>
</ul>
<br/><p><b>How do I block an employee from writing prescriptions?</b></p>
<p>Remove the <i>RxCreate </i><a href="permissions.html">Security Permission</a>. Employees who have this permission are treated as staff and have the ability to write prescriptions on behalf of the provider.</p>
<p><b>How are clinics assigned?</b></p>
<p>The patient's clinic is used when the prescription is sent. Providers must be registered with the same clinic as the patient. If patient has no clinic assigned, then the practice information is used.</p>
<h2>Setup and Identity Proofing</h2>
<p><b>Why do I need to go through identity proofing?</b></p>
<p> Identity proofing is required for every provider to electronically transmit prescriptions. This process verifies a provider is who they say they are by asking a series of questions for which only they know the answer. As a provider, you will also set up a device (e.g., a mobile phone) that will receive a one time passcode used for verification. Ensora eRx uses Exostar for identity proofing. </p>
<p><b>What are One Time Passcodes (OTP)? </b></p>
<p>These passcodes are generated by the Authy App or hardware token. The code is only good for 30 seconds. If a code expires and the prescriber attempts to enter it, the authentication will fail. Just try again with a new code from the device.</p>
<p><b>I already completed Identity Proofing (IDP) when I signed up for Ensora eRx. Do I need to go through IDP again for EPCS?</b></p>
<p>If the prescriber signed up for eRx without EPCS they will need to do a separate IDP for EPCS. </p>
<p><b>I am signed up for Ensora eRx at another Open Dental location. Do I need to complete IDP again? </b></p>
<p>If the prescriber is already signed up at another Open Dental location with Ensora eRx, IDP does not need to be completed again.</p>
<p><b>What is an EPCS Administrator?</b></p>
<p>EPCS administrators authorize providers for EPCS. The DEA requires that an office have at least two EPCS administrators. At least one must have an EPCS license.</p>
<p>For offices with only one prescribing provider, you can set up a different user (e.g., office administrator) in Open Dental that only uses Ensora eRx as an EPCS Administrator (non-prescriber).</p>
</div>
</div>
</body>
</html>```
