# File: ./www.opendental.com/manual/tsicollections.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - TSI Collections</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('tsicollections','manage','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/tsicollections.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/tsicollections.html" >v24.2</option><option value="https://www.opendental.com/manual241/tsicollections.html" >v24.1</option><option value="https://www.opendental.com/manual233/tsicollections.html" >v23.3</option><option value="https://www.opendental.com/manual232/tsicollections.html" >v23.2</option><option value="https://www.opendental.com/manual231/tsicollections.html" >v23.1</option><option value="https://www.opendental.com/manual224/tsicollections.html" >v22.4</option><option value="https://www.opendental.com/manual223/tsicollections.html" >v22.3</option><option value="https://www.opendental.com/manual222/tsicollections.html" >v22.2</option><option value="https://www.opendental.com/manual221/tsicollections.html" >v22.1</option><option value="https://www.opendental.com/manual214/tsicollections.html" >v21.4</option><option value="https://www.opendental.com/manual213/tsicollections.html" >v21.3</option><option value="https://www.opendental.com/manual212/tsicollections.html" >v21.2</option><option value="https://www.opendental.com/manual211/tsicollections.html" >v21.1</option><option value="https://www.opendental.com/manual205/tsicollections.html" >v20.5</option><option value="https://www.opendental.com/manual204/tsicollections.html" >v20.4</option><option value="https://www.opendental.com/manual203/tsicollections.html" >v20.3</option><option value="https://www.opendental.com/manual202/tsicollections.html" >v20.2</option><option value="https://www.opendental.com/manual201/tsicollections.html" >v20.1</option><option value="https://www.opendental.com/manual194/tsicollections.html" >v19.4</option><option value="https://www.opendental.com/manual193/tsicollections.html" >v19.3</option><option value="https://www.opendental.com/manual192/tsicollections.html" >v19.2</option><option value="https://www.opendental.com/manual191/tsicollections.html" >v19.1</option><option value="https://www.opendental.com/manual184/tsicollections.html" >v18.4</option><option value="https://www.opendental.com/manual183/tsicollections.html" >v18.3</option><option value="https://www.opendental.com/manual182/tsicollections.html" >v18.2</option><option value="https://www.opendental.com/manual181/tsicollections.html" >v18.1</option><option value="https://www.opendental.com/manual174/tsicollections.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>TSI Collections</p></div>
<div class="GeneralPageContent">
<p>Transworld Systems Inc. (TSI) offers billing and collection services to dental practices. </p>
<p>In the <a href="manage.html">Manage Module</a>, click <b>tsi Collections</b>.</p>
<img src="images/tsiARmgrUnsent.png" width="915" height="480"/><p class="MarginBottomZero">A TSI interface is integrated with Open Dental so you can manage past due accounts from Open Dental. </p>
<ul class="MarginBottomGap">
<li>Send past due accounts to TSI.</li>
<li>Manage accounts, suspend, or cancel collections.</li>
<li>Accept payments directly through Transworld.</li>
</ul>
<p><img src="images/youtubeLogo.png" width="16" height="16" style="margin-bottom: 0px"/> See our Webinar: <a href="https://youtu.be/ILgVnKywwHg">TSI: Transworld Systems Inc.</a>.</p>
<p class="MarginBottomZero">Related Links:<br/></p>
<ul class="MarginBottomGap">
<li><a href="tsisetup.html">TSI Setup</a></li>
<li><a href="tsisent.html">TSI Sent Accounts</a></li>
<li><a href="tsiexcluded.html">TSI Excluded Accounts</a></li>
<li><a href="tsipayment.html">TSI Payments</a></li>
<li><a href="tsihistory.html">TSI History</a></li>
<li>Webinar: <a href="https://youtu.be/ILgVnKywwHg">TSI</a></li>
<li>Website: <a href="https://www.tsico.com/">www.tsico.com</a></li>
</ul>
<p class="MarginBottomZero">Basic Workflow: </p>
<ol class="MarginBottomGap">
<li>Set up TSI integration in Open Dental.</li>
<li>Use Open Dental's Accounts Receivable Manager to identify overdue accounts and send them to TSI.</li>
<li>Once sent, TSI manages all billing and collection activity for the account. Any transactions entered in Open Dental (e.g., payments, charges) are sent to TSI on a regular basis using the OpenDentalService.</li>
</ol>
<h2>Send Past Due Accounts to TSI</h2>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>Highlight the guarantors to send to TSI. Click <b>All</b> to select all guarantors. Click <b>None</b> to deselect all guarantors.</li>
<li>Under <b>Account Placement</b>, select the type of TSI account to send to.  <ul>
<li>Accelerator: Use for accounts less than 180 days old.</li>
<li>Profit Recovery: Use for accounts less than 365 days old.</li>
<li>Professional Collections: Use for accounts older than 6 months. </li>
</ul>
</li>
<li>Click <b>Send to TSI</b>. <ul>
<li>The <i>C</i> billing type is automatically assigned to the sent accounts.</li>
<li>TSI will begin managing billing and collection activity.</li>
</ul>
</li>
<li>Optional: Adjust off the account balance sent to TSI. This affects the balance on reports, like <a href="reportaging.html">Aging of Accounts Receivable (A/R)</a>, <a href="reportreceivablesbreakdown.html">Receivable Breakdown</a>, etc.  <ol>
<li>In the patient's account, click <b>Adjustment</b>.</li>
<li>There is a prompt to confirm if the adjustment is being applied by the office. Click <b>Yes</b>. </li>
<li>Enter an amount for the balance sent to TSI.</li>
<li>Select the<i> Exclude Negative Adj Type</i> set in TSI Setup from the Subtraction adjustments list. </li>
</ol>
</li>
</ol>
<p><div class="Note">Note: <ul>
<li>If a user selects the wrong Service Type for an account, a warning appears asking to select the correct type.</li>
<li>A warning displays if the guarantor has outstanding claims on their family's account. Users can continue and send the account, or cancel. </li>
</ul>
</div>
</p>
<h2>Unsent Accounts Tab</h2>
<p>Open Dental aging is run and all guarantors who have a balance based on the account filter criteria, and have not yet been sent to TSI, are listed on the Unsent Accounts tab. Accounts highlighted in red indicate the guarantor is missing information required by TSI. Hover over an account to see what information is missing.</p>
<p><b>Clinics</b>: Only available when clinics is turned on. Filter by guarantor's clinic. Defaults to the clinic selected in the main menu. Click the dropdown to change.</p>
<p class="MarginBottomZero"><b>Account Filters</b>: Change the filter criteria as needed. To save criteria as the default for the next time you run the report, click <b>Save as Default</b>. </p>
<ul class="MarginBottomGap">
<li><b>Providers</b>: Filter by guarantor's primary provider. Click the dropdown to change.</li>
<li><b>Billing Types</b>: Filter by guarantor's billing type. Click the dropdown to change.</li>
<li><b>Account Age</b>: Filter by account age.</li>
<li><b>Minimum Balance</b>: Only show guarantors who have a balance over a specific amount (e.g. only show accounts with a balance over $25).</li>
<li><b>Days Since Last Payment</b>: Only include guarantors who have not made a payment in a specific amount of days (e.g. only show guarantors who have not made a payment in the last 90 days).</li>
<li><b>Exclude if insurance pending</b>: Check to hide guarantors with outstanding insurance claims.</li>
<li><b>Exclude if unsent procedures</b>: Check to hide guarantors with unsent procedures posted within the last six months.</li>
<li><b>Exclude bad addresses (no zipcode)</b>: Check this box to hide guarantors with no zip code.</li>
<li><b>Show PatNums</b>: Show patient numbers next to guarantor name. Defaults to the setting in <a href="reportmiscsettings.html">Report Setup: Misc Settings</a> for <i>Show PatNum</i>.</li>
</ul>
<p class="MarginBottomZero">TSI <i>C</i> Billing Type: </p>
<ul class="MarginBottomGap">
<li>All family members associated with accounts sent to TSI are assigned the <i>C</i> billing type as an identifier.</li>
<li>There should only be one <i>C</i> billing type. If there are multiple, the <i>C</i> billing type listed first is assigned.</li>
<li>TSI sends statements on the office's behalf for patients with the <i>C</i> billing type. Exclude this billing type when running billing so the patient does not receive duplicate statements.</li>
<li>Do not manually assign the <i>C</i> billing type to any patient. Manual assignment does not initiate TSI account management. Thus, the account could fall through the cracks.</li>
<li>Do not manually change a patient's billing type from the <i>C</i> billing type to another. Manual changes do not stop TSI account management, but they do stop account syncing that could result in double, yet different statements.</li>
</ul>
<p class="MarginBottomZero"><b>Guarantors - Not Sent to TSI</b>: Add or remove columns in <a href="displayfields.html">Display Fields</a>, <i>A/R Manager Unsent Grid</i>. </p>
<ul class="MarginBottomGap">
<li><b>Guarantor</b>: The account guarantor.</li>
<li><b>Clinic</b>: The guarantor's clinic.</li>
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
<li><b>LastPaid</b>: The date of the last payment of any family member on the account.</li>
<li><b>Date Time Suspended</b>: If the account is currently <i>suspended</i> with Transworld, the date and time when it was suspended.</li>
<li><b>Last Proc</b>: Date of last completed procedure for the family.</li>
<li><b>Date Bal Began</b>: Date the patient balance began.</li>
<li><b>Days Bal Began</b>: Number of days ago the patient balance began.</li>
</ul>
<p><b>Guarantor Count</b>: Total number of guarantor accounts in list.</p>
<p><b>Total</b>: Total sum of accounts for each column.</p>
<p><b>Export</b>: Click to export the grid to Excel. </p>
<p><b>Print:</b> Click to print the grid. </p>
<p><b>tsi OCP</b>: Click to launch the TSI Online Client Portal.</p>
<p>Right-click on a guarantor, then select Go To to jump to their Open Dental account. Click <b>Run Aging</b> to manually run and update aging.</p>
</div>
</div>
</body>
</html>```
