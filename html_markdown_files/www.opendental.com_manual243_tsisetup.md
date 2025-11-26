# File: ./www.opendental.com/manual243/tsisetup.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - TSI Setup</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('tsisetup','programlinks','+setup','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/tsisetup.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/tsisetup.html" >v24.2</option><option value="https://www.opendental.com/manual241/tsisetup.html" >v24.1</option><option value="https://www.opendental.com/manual233/tsisetup.html" >v23.3</option><option value="https://www.opendental.com/manual232/tsisetup.html" >v23.2</option><option value="https://www.opendental.com/manual231/tsisetup.html" >v23.1</option><option value="https://www.opendental.com/manual224/tsisetup.html" >v22.4</option><option value="https://www.opendental.com/manual223/tsisetup.html" >v22.3</option><option value="https://www.opendental.com/manual222/tsisetup.html" >v22.2</option><option value="https://www.opendental.com/manual221/tsisetup.html" >v22.1</option><option value="https://www.opendental.com/manual214/tsisetup.html" >v21.4</option><option value="https://www.opendental.com/manual213/tsisetup.html" >v21.3</option><option value="https://www.opendental.com/manual212/tsisetup.html" >v21.2</option><option value="https://www.opendental.com/manual211/tsisetup.html" >v21.1</option><option value="https://www.opendental.com/manual205/tsisetup.html" >v20.5</option><option value="https://www.opendental.com/manual204/tsisetup.html" >v20.4</option><option value="https://www.opendental.com/manual203/tsisetup.html" >v20.3</option><option value="https://www.opendental.com/manual202/tsisetup.html" >v20.2</option><option value="https://www.opendental.com/manual201/tsisetup.html" >v20.1</option><option value="https://www.opendental.com/manual194/tsisetup.html" >v19.4</option><option value="https://www.opendental.com/manual193/tsisetup.html" >v19.3</option><option value="https://www.opendental.com/manual192/tsisetup.html" >v19.2</option><option value="https://www.opendental.com/manual191/tsisetup.html" >v19.1</option><option value="https://www.opendental.com/manual184/tsisetup.html" >v18.4</option><option value="https://www.opendental.com/manual183/tsisetup.html" >v18.3</option><option value="https://www.opendental.com/manual182/tsisetup.html" >v18.2</option><option value="https://www.opendental.com/manual181/tsisetup.html" >v18.1</option><option value="https://www.opendental.com/manual174/tsisetup.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>TSI Setup</p></div>
<div class="GeneralPageContent">
<p>In <a href="programlinks.html">Program Links</a>, double-click on Transworld Systems Inc. (TSI).</p>
<img src="images/bridgeTransworld.png" width="426" height="565"/><p class="MarginBottomZero">To begin using the <a href="tsicollections.html">TSI Collections</a> Interface, there are three basic steps: </p>
<ol class="MarginBottomGap">
<li>Sign up with TSI and receive your TSI credentials.</li>
<li>Set up the TSI program link.</li>
<li>Create a <i>collections</i> billing type for TSI accounts.</li>
</ol>
<h2>Step 1: Sign Up for TSI Services</h2>
 See <a href="https://www.tsico.com/alliances-opendental/">https://www.tsico.com/alliances-opendental/</a>.<br/><br/><h2>Step 2: Set up the TSI Program Link in Open Dental</h2>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Check the <b>Enabled</b> box.</li>
<li><b>Clinic</b>: Only visible if clinics is turned on. Use to enter different credentials for each clinic. Click the dropdown to select the clinic, then proceed to steps 4 - 8. <br/><div class="Note">Note: By default, credentials entered for Headquarters will be copied for each clinic. Once an individual clinic credentials is modified to differ from Headquarters, changes to Headquarter settings will no longer affect the clinic's settings.</div>
</li>
<li><i>Services Enabled</i>: Select the TSI services to enable.  <ul>
<li><b>Accelerator</b>: Gentle payment reminder letters sent to patients on your behalf.</li>
<li><b>Profit Recovery</b>: TSI contacts patients on your behalf in a more urgent, yet friendly approach.</li>
<li><b>Professional Collections</b>: Urges patients to make payments before they are charged off as bad debt.</li>
</ul>
</li>
<li><i>SFTP Server Details</i>: Enter the TSI SFTP server details and login credentials (provided by TSI).  <ul>
<li><b>Address</b></li>
<li><b>Port</b></li>
<li><b>Username</b></li>
<li><b>Password</b><br/><div class="Note">Note: User must have the <i>Manage High Security Properties</i> permission to edit or add a password.</div>
</li>
</ul>
</li>
<li><i>Client IDs</i>: Enter your client ID for each enabled service.  <ul>
<li><b>Accelerator</b>: The ID provided to you by TSI for the Accelerator service.</li>
<li><b>Profit Recovery/Collection</b>: The ID provided to you by Transworld for Profit Recovery and/or Collection service.</li>
</ul>
</li>
<li><b>"Paid in Full" thank you letter</b>: Check this box to have TSI send a thank you letter to patients once the balance is paid.</li>
<li><b>Exclude Positive Adj Type</b>: Select a positive <a href="adjustments.html">Adjustment</a> type that will be excluded from updates to TSI.</li>
<li><b>Exclude Negative Adj Type</b>: Select a negative adjustment type that will be excluded from updates to TSI.</li>
<li>To enter different credentials for another clinic, select the clinic, then repeat steps 4 - 7.</li>
<li><b>OpenDentalService Send Time</b>: Select when data will be sent and synced with Transworld. We recommend setting a time after business hours. If left blank, transaction data is not synced.</li>
<li><b>Repeat Every</b>: Select how often the OpenDentalService will send and sync accounts. The recommended setting is one time per day.  <ul>
<li>Click the up/down arrows to increase/decrease the value.</li>
<li>Click the down arrow to select Days, Hours, or Minutes.</li>
</ul>
</li>
<li><b>Paid in Full Billing Type</b>: Select a non-collection (C) billing type to auto-assign to accounts once the balance has been paid in full.</li>
<li>Click <b>OK</b> to save all settings.</li>
</ol>
<p><div class="Note">Note: <ul>
<li>The OpenDentalService Send Time and 'Repeat Every' settings are not clinic specific. They affect every clinic.</li>
<li>TSI may take up to 72 hours to process transactions after being sent by the OpenDentalService.</li>
</ul>
</div>
</p>
<h2>Step 3: Create a TSI <i>Collections</i> Billing Type</h2>
<p>Open Dental will automatically assign this billing type to all accounts that are sent to TSI.</p>
<ol>
<li>In the Main Menu, click Setup, Definitions.</li>
<li>Select Billing Types.</li>
<li>Click Add.</li>
<li>Enter a name to use for the billing type that will be auto-assigned to guarantors that have been sent to TSI (e.g. Transworld).</li>
<li>In the second box, enter C to mark this billing type as the <i>collections</i> billing type. <div class="Note">Note: <ul>
<li>There should only be one <i>C</i> billing type. If there are multiple, TSI will always assign the <i>C</i> billing type listed first.</li>
<li>Once a patient is sent to TSI, TSI will be responsible for billing the patient, so it is good practice to remove that billing type from the <a href="billing.html">Billing List</a> so they are not billed by the office as well. </li>
</ul>
</div>
</li>
</ol>
<br/><p class="MarginBottomZero">Warnings:  </p>
<ul class="MarginBottomGap">
<li>Do not manually assign the TSI <i>C</i> billing type to any patient. Manual assignment will not initiate TSI account management. Thus the account could fall through the cracks.</li>
<li>Do not manually change a patient's billing type from the TSI <i>C</i> billing type to another. Manual changes will not stop TSI account management. However, they will stop account syncing that could result in double, yet different, statements.</li>
</ul>
<h2>Disable the TSI Service in Open Dental / Hide the TSI button</h2>
<ol>
<li>In the Main Menu, click Setup, Program Links. Double-click on Transworld.</li>
<li>Uncheck the <i>Enabled</i> box.</li>
<li>Check the <i>Hide Unused Button</i> box to hide the button in the Manage Module.</li>
<li>Click OK to save.</li>
</ol>
</div>
</div>
</body>
</html>```
