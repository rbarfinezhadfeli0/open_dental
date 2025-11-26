# File: ./www.opendental.com/manual232/xchargeclinic.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - XCharge Setup for Clinics</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('xchargeclinic','xcharge','paymentpatientcreditcard','payment','account','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/xchargeclinic.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/xchargeclinic.html" >v24.2</option><option value="https://www.opendental.com/manual241/xchargeclinic.html" >v24.1</option><option value="https://www.opendental.com/manual233/xchargeclinic.html" >v23.3</option><option value="https://www.opendental.com/manual232/xchargeclinic.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/xchargeclinic.html" >v23.1</option><option value="https://www.opendental.com/manual224/xchargeclinic.html" >v22.4</option><option value="https://www.opendental.com/manual223/xchargeclinic.html" >v22.3</option><option value="https://www.opendental.com/manual222/xchargeclinic.html" >v22.2</option><option value="https://www.opendental.com/manual221/xchargeclinic.html" >v22.1</option><option value="https://www.opendental.com/manual214/xchargeclinic.html" >v21.4</option><option value="https://www.opendental.com/manual213/xchargeclinic.html" >v21.3</option><option value="https://www.opendental.com/manual212/xchargeclinic.html" >v21.2</option><option value="https://www.opendental.com/manual211/xchargeclinic.html" >v21.1</option><option value="https://www.opendental.com/manual205/xchargeclinic.html" >v20.5</option><option value="https://www.opendental.com/manual204/xchargeclinic.html" >v20.4</option><option value="https://www.opendental.com/manual203/xchargeclinic.html" >v20.3</option><option value="https://www.opendental.com/manual202/xchargeclinic.html" >v20.2</option><option value="https://www.opendental.com/manual201/xchargeclinic.html" >v20.1</option><option value="https://www.opendental.com/manual194/xchargeclinic.html" >v19.4</option><option value="https://www.opendental.com/manual193/xchargeclinic.html" >v19.3</option><option value="https://www.opendental.com/manual192/xchargeclinic.html" >v19.2</option><option value="https://www.opendental.com/manual191/xchargeclinic.html" >v19.1</option><option value="https://www.opendental.com/manual184/xchargeclinic.html" >v18.4</option><option value="https://www.opendental.com/manual183/xchargeclinic.html" >v18.3</option><option value="https://www.opendental.com/manual182/xchargeclinic.html" >v18.2</option><option value="https://www.opendental.com/manual181/xchargeclinic.html" >v18.1</option><option value="https://www.opendental.com/manual174/xchargeclinic.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>XCharge Setup for Clinics</p></div>
<div class="GeneralPageContent">
<p>Locations using clinics can store <a href="xcharge.html">XCharge (OpenEdge)</a> login credentials for each clinic in a single database, then associate the credentials with different merchant accounts in XCharge.</p>
<p>The XCharge accounts that can be used in Open Dental will depend on the Open Dental security settings for the logged-on user. Users restricted to a clinic can only access the associated merchant account. Users not restricted to clinics (Headquarters) can access all merchant accounts.</p>
<p class="MarginBottomZero">There are four steps: </p>
<ol class="MarginBottomGap">
<li>Create the clinics in Open Dental. Click Lists, <a href="clinics.html">Clinics</a>.</li>
<li>Add Clinic Merchant Accounts to X-Charge.</li>
<li>Create clinic users in XCharge.</li>
<li>Set up clinic-level XCharge credentials in Open Dental.</li>
</ol>
<h2>Add Clinic Merchant Accounts to X-Charge</h2>
<p class="MarginBottomZero">Once X-Charge is installed, add merchant accounts for each clinic. </p>
<ol class="MarginBottomGap">
<li>In XCharge, go to File, XCharge Server.</li>
<li>In the server window, click <i>Setup...</i> and enter the administrator's credentials.</li>
<li>Click Credit Cards, Connection tab. <br/><img src="images/xchargeServer.gif" width="613" height="622" class="ImageInParagraph"/></li>
<li>Add Processor Accounts Information for each clinic in Open Dental that will be using XCharge. For clarity, we recommend using the Open Dental clinic descriptions for the Processing Account Names.</li>
</ol>
<p><b>Set a Default Processing Account for the Headquarters Clinic:</b> If no clinic is selected for a payment (none), the default merchant account for the Headquarters clinic will be used, as long as the user is not restricted to a specific clinic. To set the default merchant account for headquarters, set the Headquarters processing account as the Default <i>(Make this Account the Default for this Processor)</i>.</p>
<img src="images/xchargeProcessor.gif" width="547" height="609"/><h2>Create Clinic Users in X-Charge</h2>
<p class="MarginBottomZero">Create clinic users in XCharge for each Open Dental clinic that will process payments with XCharge. </p>
<ol class="MarginBottomGap">
<li>Click General Options, Security tab. <br/><img src="images/xchargeGeneral.gif" width="613" height="622" class="ImageInParagraph"/></li>
<li>For each clinic, create an XCharge user with user name and password and select the Processing Account (merchant account) to use with the clinic.  <ul>
<li>We recommend assigning the Open Dental clinic description as the XCharge Processing Account Name and the XCharge User Name.</li>
<li>One clinic user must be the XCharge Administrator. This user can process payments using any merchant account. We recommend assigning the Administrator user to the Headquarters clinic in Open Dental (see below).</li>
</ul>
</li>
</ol>
<p>Administrator example: In this example, when the administrator credentials are entered in X-Charge, the user can process payment using any merchant account.</p>
<img src="images/xchargeSecurity.gif" width="600" height="613"/><p>Clinic example: In this setup, when user Clinic2's credentials are entered into XCharge, the Clinic2 processing account will be used thus ensuring all payments for the clinic use the correct merchant account.</p>
<img src="images/xchargeClinic2.gif" width="600" height="613"/><h2>Enter Clinic Level XCharge Credentials in Open Dental</h2>
<p><a href="clinics.html">Clinics</a> can use different XCharge login credentials for each clinic in a single database.</p>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, <a href="programlinks.html">Program Links</a>, and double-click <b>XCharge from xcharge.com</b></p>
<img src="images/xchargeClinic.png" width="494" height="564"/><p>Check <b>Enabled (affects all clinics)</b> to enable XCharge for all clinics. Unchecking disables XCharge for all clinics. Clinic restricted users only have access to their restricted clinic in the Clinic dropdown and not allowed to uncheck the Enabled box.</p>
<p>Enter the <b>Program Path</b> to the XCharge.exe.</p>
<p class="MarginBottomZero">Set the <i>Clinic Payment Settings</i> for the Headquarters first. </p>
<ul class="MarginBottomGap">
<li>Select Headquarters as the clinic.</li>
<li>Enter the username and password created during installation.</li>
<li>Select the default Payment Type for XCharge transactions. <ul>
<li>Customize options in <a href="definitionspaymenttypes.html">Definitions: Payment Types</a>.</li>
<li>To select a different type for <a href="recurringcharges.html">CC Recurring Charges</a> transactions, see <a href="preferences.html">Preferences</a>, <i>Payment type for recurring charges</i>.</li>
<li>If <i>Payments prompt for Payment Type</i> is enabled in <a href="preferences.html">Preferences</a>, users must manually select a Payment Type.</li>
</ul>
</li>
<li><b>Prompt for signature on CC trans by default</b>: Check to prompt patients for a signature on the credit card terminal before completing transactions. The terminal must support electronic signatures.</li>
<li><b>Print receipts by default</b>: Check to automatically print an XCharge receipt to the default receipt <a href="printersetup.html">Printer</a> when a transaction is completed.</li>
<li><b>Recurring charges force duplicates by default</b>: By default, transactions for the same amount charged to the same card on the same day are declined. This is to prevent accidentally charging a card twice. Check to allow duplicate charges. Useful if family members have recurring charges set up on the same card for the same day. </li>
<li><b>Prevent saving new cards</b>: Uncheck to allow users to process new transactions or save new payment information to a patient's account. Check to prevent users from processing new transactions or saving new payment information. <ul>
<li>To set whether or not new cards are saved to a patient's account after each transaction, see Preferences, Automatically store credit card tokens.</li>
</ul>
</li>
</ul>
<p class="MarginBottomZero">(optional) Enter <i>XWeb</i> settings to enable <a href="portalonlinepayments.html">Online Patient Portal Payments</a> and/or <a href="recurringcharges.html">Automatic Recurring Charges</a>. </p>
<ul class="MarginBottomGap">
<li>Enter the XWebID (12 digits).</li>
<li>Enter the Auth Key (32 digits).</li>
<li>Enter the Terminal ID (8 digits).</li>
<li><b>Enable X-Web for patient portal payments</b>: Check to allow patients to make a payment online (not required if only using Automatic Recurring Charges).</li>
</ul>
<p>Repeat steps for each additional clinic in the dropdown. Headquarter settings will be used if clinic-specific changes are not made. For clinics not using XCharge, select the clinic, then clear the username and password. When the clinic is attached to a payment, the XCharge button will not be visible. <div class="Note">Note: Editing the Headquarters username and/or password when it is the same as one or more clinics, changes the other clinics as well. To unlink them, change the username and password for each clinic. Subsequent changes made to Headquarters credentials will no longer affect the clinic.</div>
</p>
<p>Click <b>OK </b>to save settings.</p>
</div>
</div>
</body>
</html>```
