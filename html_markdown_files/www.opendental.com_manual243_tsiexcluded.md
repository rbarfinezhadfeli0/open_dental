# File: ./www.opendental.com/manual243/tsiexcluded.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - TSI Excluded Accounts</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('tsiexcluded','tsicollections','manage','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/tsiexcluded.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/tsiexcluded.html" >v24.2</option><option value="https://www.opendental.com/manual241/tsiexcluded.html" >v24.1</option><option value="https://www.opendental.com/manual233/tsiexcluded.html" >v23.3</option><option value="https://www.opendental.com/manual232/tsiexcluded.html" >v23.2</option><option value="https://www.opendental.com/manual231/tsiexcluded.html" >v23.1</option><option value="https://www.opendental.com/manual224/tsiexcluded.html" >v22.4</option><option value="https://www.opendental.com/manual223/tsiexcluded.html" >v22.3</option><option value="https://www.opendental.com/manual222/tsiexcluded.html" >v22.2</option><option value="https://www.opendental.com/manual221/tsiexcluded.html" >v22.1</option><option value="https://www.opendental.com/manual214/tsiexcluded.html" >v21.4</option><option value="https://www.opendental.com/manual213/tsiexcluded.html" >v21.3</option><option value="https://www.opendental.com/manual212/tsiexcluded.html" >v21.2</option><option value="https://www.opendental.com/manual211/tsiexcluded.html" >v21.1</option><option value="https://www.opendental.com/manual205/tsiexcluded.html" >v20.5</option><option value="https://www.opendental.com/manual204/tsiexcluded.html" >v20.4</option><option value="https://www.opendental.com/manual203/tsiexcluded.html" >v20.3</option><option value="https://www.opendental.com/manual202/tsiexcluded.html" >v20.2</option><option value="https://www.opendental.com/manual201/tsiexcluded.html" >v20.1</option><option value="https://www.opendental.com/manual194/tsiexcluded.html" >v19.4</option><option value="https://www.opendental.com/manual193/tsiexcluded.html" >v19.3</option><option value="https://www.opendental.com/manual192/tsiexcluded.html" >v19.2</option><option value="https://www.opendental.com/manual191/tsiexcluded.html" >v19.1</option><option value="https://www.opendental.com/manual184/tsiexcluded.html" >v18.4</option><option value="https://www.opendental.com/manual183/tsiexcluded.html" >v18.3</option><option value="https://www.opendental.com/manual182/tsiexcluded.html" >v18.2</option><option value="https://www.opendental.com/manual181/tsiexcluded.html" >v18.1</option><option value="https://www.opendental.com/manual174/tsiexcluded.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>TSI Excluded Accounts</p></div>
<div class="GeneralPageContent">
<p>Accounts that have specifically been excluded from TSI Collections will list in the Excluded Accounts tab.</p>
<p>In <a href="tsicollections.html">TSI Collections</a>, click the <b>Excluded Accounts</b> tab.</p>
<img src="images/tsiARmgrExcluded.png" width="915" height="399"/><p>The Excluded Accounts tab lists accounts that have been marked as excluded from collections by right-clicking on a guarantor. This will give the account a <i>CE</i> billing type from <a href="definitionsbillingtypes.html">Definitions: Billing Types</a>.  <div class="Note">Note: If multiple CE billing types have been created, only guarantors assigned the first in the list will be included in the Excluded Accounts tab.</div>
</p>
<p><b>Clinics</b>: Only available when clinics is turned on. Defaults to the clinic selected in the main menu. Click to change clinics.</p>
<p class="MarginBottomZero"><b>Account Filters</b>: Change the filter criteria as needed. To save criteria as the default for the next time you run the report, click <b>Save as Default</b>. </p>
<ul class="MarginBottomGap">
<li><b>Providers</b>: Filter by guarantor's primary provider. Click the dropdown to change.</li>
<li><b>Account Age</b>: Filter by account age.</li>
<li><b>Minimum Balance</b>: Only show guarantors who have a balance over a specific amount (e.g. only show accounts with a balance over $25).</li>
<li><b>Days Since Last Payment</b>: Only include guarantors who have not made a payment in a specific amount of days (e.g. only show guarantors who have not made a payment in the last 90 days).</li>
<li><b>Exclude if insurance pending</b>: Check to hide guarantors with outstanding insurance claims.</li>
<li><b>Exclude if unsent procedures</b>: Check to hide guarantors with unsent procedures posted within the last six months.</li>
<li><b>Exclude bad addresses (no zipcode)</b>: Check this box to hide guarantors with no zip code.</li>
<li><b>Show PatNums</b>: Show patient numbers next to guarantor name. Defaults to the setting in <a href="reportmiscsettings.html">Report Setup: Misc Settings</a> for <i>Show PatNum</i>.</li>
</ul>
<p>Excluded accounts can be sent back to the Unsent list by right-clicking and selecting <b>Mark Unsent</b>.</p>
<p class="MarginBottomZero"><b>Guarantors (Excluded) - Not Sent to TSI</b>: Add or remove columns in <a href="displayfields.html">Display Fields</a>, <i>A/R Manager Excluded Grid</i>. </p>
<ul class="MarginBottomGap">
<li><b>Guarantor</b>: The account guarantor.</li>
<li><b>Prov</b>: The guarantor's primary provider.</li>
<li><b>Billing Type</b>: The guarantor's current billing type.</li>
<li><b>0-30</b>: The balance that is 0 - 30 days overdue.</li>
<li><b>31-6- Days</b>: The balance that is 31 - 60 days overdue.</li>
<li><b>61-90 Days</b>: The balance that is 61 - 90 days overdue.</li>
<li><b>&gt;90 Days</b>: The balance that is more than 90 days overdue.</li>
<li><b>Total</b>: The total balance due.</li>
<li><b>-Ins Est</b>: Any pending insurance payment estimates.</li>
<li><b>=Patient</b>: The estimated patient portion due.</li>
<li><b>PayPlayDue</b>: Payment plan due amounts.</li>
<li><b>Date Last Pay</b>: The date of the last payment of any family member on the account.</li>
<li><b>Date Time Suspended</b>: If the account is currently <i>suspended</i> with Transworld, the date and time when it was suspended.</li>
</ul>
<p><b>Count</b>: Total number of guarantor accounts in list.</p>
<p><b>Total</b>: Total sum of accounts for each column.</p>
<p><b>tsi OCP</b>: Click to launch the TSI Online Client Portal.</p>
<p>Right-click on a guarantor, then select Go To to jump to their Open Dental account. </p>
<p><b>Export</b>: Click to export the grid to excel. </p>
<p><b>Print:</b> Click to print the grid. </p>
<p>Click <b>Run Aging</b> to manually run and update aging.</p>
</div>
</div>
</body>
</html>```
