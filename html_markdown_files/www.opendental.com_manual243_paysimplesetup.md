# File: ./www.opendental.com/manual243/paysimplesetup.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - PaySimple Setup</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('paysimplesetup','programlinks','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/paysimplesetup.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/paysimplesetup.html" >v24.2</option><option value="https://www.opendental.com/manual241/paysimplesetup.html" >v24.1</option><option value="https://www.opendental.com/manual233/paysimplesetup.html" >v23.3</option><option value="https://www.opendental.com/manual232/paysimplesetup.html" >v23.2</option><option value="https://www.opendental.com/manual231/paysimplesetup.html" >v23.1</option><option value="https://www.opendental.com/manual224/paysimplesetup.html" >v22.4</option><option value="https://www.opendental.com/manual223/paysimplesetup.html" >v22.3</option><option value="https://www.opendental.com/manual222/paysimplesetup.html" >v22.2</option><option value="https://www.opendental.com/manual221/paysimplesetup.html" >v22.1</option><option value="https://www.opendental.com/manual214/paysimplesetup.html" >v21.4</option><option value="https://www.opendental.com/manual213/paysimplesetup.html" >v21.3</option><option value="https://www.opendental.com/manual212/paysimplesetup.html" >v21.2</option><option value="https://www.opendental.com/manual211/paysimplesetup.html" >v21.1</option><option value="https://www.opendental.com/manual205/paysimplesetup.html" >v20.5</option><option value="https://www.opendental.com/manual204/paysimplesetup.html" >v20.4</option><option value="https://www.opendental.com/manual203/paysimplesetup.html" >v20.3</option><option value="https://www.opendental.com/manual202/paysimplesetup.html" >v20.2</option><option value="https://www.opendental.com/manual201/paysimplesetup.html" >v20.1</option><option value="https://www.opendental.com/manual194/paysimplesetup.html" >v19.4</option><option value="https://www.opendental.com/manual193/paysimplesetup.html" >v19.3</option><option value="https://www.opendental.com/manual192/paysimplesetup.html" >v19.2</option><option value="https://www.opendental.com/manual191/paysimplesetup.html" >v19.1</option><option value="https://www.opendental.com/manual184/paysimplesetup.html" >v18.4</option><option value="https://www.opendental.com/manual183/paysimplesetup.html" >v18.3</option><option value="https://www.opendental.com/manual182/paysimplesetup.html" >v18.2</option><option value="https://www.opendental.com/manual181/paysimplesetup.html" >v18.1</option><option value="https://www.opendental.com/manual174/paysimplesetup.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>PaySimple Setup</p></div>
<div class="GeneralPageContent">
<p>Set up PaySimple to process credit/debit card transactions or ACH payments.</p>
<p>In <a href="programlinks.html">Program Links</a>, double-click <b>PaySimple from paysimple.com</b>.</p>
<img src="images/paysimpleSetup.png" width="404" height="393"/><p>Alternatively, in the <a href="payment.html">Payment</a> window, right-click PaySimple and select Settings.</p>
<p><b>Enabled</b>: Check to enable to PaySimple Program Link. Enter Payment Settings below.</p>
<p class="MarginBottomZero">Payment Settings: </p>
<ul class="MarginBottomGap">
<li><b>Payment Type Credit Card</b>: Set the default <a href="definitionspaymenttypes.html">Definitions: Payment Types</a> for PaySimple card transactions. To select a different type for <a href="recurringcharges.html">CC Recurring Charges</a> (credit card transactions), see <a href="preferences.html">Preferences</a>, <i>Payment type for recurring charges</i>. </li>
<li><b>Payment Type ACH</b>: Set the default Payment Type for PaySimple ACH transactions.</li>
<div class="Note">Note: If the preference, <i>Payments prompt for Payment Type</i>, is enabled, users must manually select a payment type when creating a <a href="payment.html">Payment</a>. </div>
<li><b>Username</b>: Enter the PaySimple username</li>
<li><b>Key</b>: Enter the key supplied by PaySimple.</li>
<li><b>Prevent saving new cards</b>: Determines whether new payment information can be stored. This does not affect payments processed through the <a href="../site/paymentportal.html">Payment Portal Feature</a><ul>
<li>Uncheck: Allow users to process or save new payment information to the patient's account.</li>
<li>Check: Prevent users from processing or saving new payment information.</li>
</ul>
</li>
<li><b>Print receipts by default</b>: Check to automatically print a PaySimple receipt to the default receipt <a href="printersetup.html">Printer</a> when a transaction is completed.</li>
<li><b>Allow online payments</b>: Check to enable <a href="portalpaymentsbypatient.html">Payment Portal</a> to allow patients to make online payments.</li>
</ul>
<h2>Setup for Clinics</h2>
<p>If using <a href="clinics.html">Clinics</a>, PaySimple must be set up for each Clinic individually.</p>
<img src="images/paysimpleSetupClinics.png" width="404" height="393"/><p><b>Enabled (affects all clinics)</b> to enable PaySimple for all clinics. Unchecking disables PaySimple for all clinics. If the currently logged on user is restricted by clinic, only the clinic they have access to will show in the Clinic dropdown and they will not be allowed to uncheck the Enabled box.</p>
<p><b>Clinic</b>: Select a Clinic from the dropdown to change Clinic Payment Settings. If the logged-on user is restricted to specific Clinics, only accessible Clinics are listed.</p>
<p>Clinic Payment Settings are the same as <i>Payment Settings</i> described above. Determine settings for the selected Clinic.</p>
</div>
</div>
</body>
</html>```
