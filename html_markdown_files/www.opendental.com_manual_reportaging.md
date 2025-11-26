# File: ./www.opendental.com/manual/reportaging.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Aging of Accounts Receivable (A/R) Report</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('reportaging','+monthly','reportsstandard','reports','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/reportaging.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/reportaging.html" >v24.2</option><option value="https://www.opendental.com/manual241/reportaging.html" >v24.1</option><option value="https://www.opendental.com/manual233/reportaging.html" >v23.3</option><option value="https://www.opendental.com/manual232/reportaging.html" >v23.2</option><option value="https://www.opendental.com/manual231/reportaging.html" >v23.1</option><option value="https://www.opendental.com/manual224/reportaging.html" >v22.4</option><option value="https://www.opendental.com/manual223/reportaging.html" >v22.3</option><option value="https://www.opendental.com/manual222/reportaging.html" >v22.2</option><option value="https://www.opendental.com/manual221/reportaging.html" >v22.1</option><option value="https://www.opendental.com/manual214/reportaging.html" >v21.4</option><option value="https://www.opendental.com/manual213/reportaging.html" >v21.3</option><option value="https://www.opendental.com/manual212/reportaging.html" >v21.2</option><option value="https://www.opendental.com/manual211/reportaging.html" >v21.1</option><option value="https://www.opendental.com/manual205/reportaging.html" >v20.5</option><option value="https://www.opendental.com/manual204/reportaging.html" >v20.4</option><option value="https://www.opendental.com/manual203/reportaging.html" >v20.3</option><option value="https://www.opendental.com/manual202/reportaging.html" >v20.2</option><option value="https://www.opendental.com/manual201/reportaging.html" >v20.1</option><option value="https://www.opendental.com/manual194/reportaging.html" >v19.4</option><option value="https://www.opendental.com/manual193/reportaging.html" >v19.3</option><option value="https://www.opendental.com/manual192/reportaging.html" >v19.2</option><option value="https://www.opendental.com/manual191/reportaging.html" >v19.1</option><option value="https://www.opendental.com/manual184/reportaging.html" >v18.4</option><option value="https://www.opendental.com/manual183/reportaging.html" >v18.3</option><option value="https://www.opendental.com/manual182/reportaging.html" >v18.2</option><option value="https://www.opendental.com/manual181/reportaging.html" >v18.1</option><option value="https://www.opendental.com/manual174/reportaging.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Aging of Accounts Receivable (A/R) Report</p></div>
<div class="GeneralPageContent">
<p>Run the Aging of A/R Report to see all accounts receivable.</p>
<p>In <a href="reportsstandard.html">Standard Reports</a>, in the <i>Monthly</i> section, click <b>Aging of A/R</b>.</p>
<img src="images/reportAging.png" width="915" height="362"/><p>The Aging of A/R report lists accounts with balances owed. The report can also be run to include accounts with credits. The report is based on the guarantor's billing type, primary provider, and clinic. <a href="aging.html">Aging</a> is automatically recalculated when the report is generated.</p>
<p><img src="images/youtubeLogo.png" width="16" height="16" style="margin-bottom: 0px"/> Watch the Webinar: <a href="https://youtu.be/KeMsPTn8wmI">Aging of Accounts Receivable (A/R)</a></p>
<p><div class="Note">Note: <ul>
<li>If the pay plan logic is <i>Age Credits and Debits</i> in Preferences, payment plan due amounts are included in the A/R balance.</li>
<li>To control user access to reports, see <a href="reportsecurity.html">Report Setup: Security Permissions</a>.</li>
<li>To set other report defaults, see <a href="reportmiscsettings.html">Report Setup: Misc Settings</a> (i.e., <i>Wrap columns when printing</i> and <i>Show PatNum</i>).</li>
</ul>
</div>
</p>
<h2>Filters</h2>
<p>Set the report criteria and filters before running the report.</p>
<p><b>As Of Date</b>: Enter the <i>as of</i> date for the report. Defaults to the date of the most recent aging calculation (usually today). If changed to a historical date, totals reflect all transactions up to the date entered except for estimated write-offs. Write-offs are calculated as of the current date.</p>
<p class="MarginBottomZero"><b>Age of Account</b>: Select which patients to include based on aging balance.  </p>
<ul class="MarginBottomGap">
<li><b>Any Balance</b>: Include patients with any balance due.</li>
<li><b>Over 30 Days</b>: Include all patients with balances that are over 30 days due.</li>
<li><b>Over 60 Days</b>: Include all patients with balances that are over 60 days due.</li>
<li><b>Over 90 Days</b>: Include all patients with balances that are over 90 days due.</li>
</ul>
<p class="MarginBottomZero"><b>Group By</b>: Select how to group calculation amounts.  </p>
<ul class="MarginBottomGap">
<li><b>Family</b>: Group by family, listed by guarantor name. <ul>
<li>When grouped by family, the report includes patients with negative balances and insurance estimates by default.</li>
</ul>
</li>
<li><b>Individual</b>: Group by individual patient. <ul>
<li>When grouped by individual, patients with negative balances and insurance estimates can be manually included. This is required to see an itemized family breakdown (see below).</li>
</ul>
</li>
</ul>
<p class="MarginBottomZero"><b>Exclude Patients With</b>: These options exclude selected patients in the report results. Check to enable; uncheck to disable. When grouping by <i>Family</i> this is based on the Guarantor only. </p>
<ul class="MarginBottomGap">
<li><b>Inactive status</b>: Do not include patients who are marked Inactive on the Edit Patient Information window.</li>
<li><b>Archived status</b>: Do not include patients who are marked Archived on the Edit Patient Information window.</li>
<li><b>Bad addresses (no zip code)</b>: Do not include patients who have no zip code entered on the Edit Patient Information window.</li>
</ul>
<p class="MarginBottomZero"><b>Include Patients With</b>: Include patients that meet the selected criteria. Check to enable; uncheck to disable. When grouping by <i>Family</i> this is based on the total family balance. </p>
<ul class="MarginBottomGap">
<li><b>No selection</b>: Only include patients with positive balances.</li>
<li><b>Negative balances</b>: Includes patients with negative (i.e., credit) balances. </li>
<li><b>Insurance estimates and no balance</b>: Include patients with a balance of zero, but also have an insurance estimate.</li>
</ul>
<p class="MarginBottomZero"><b>Only Patients With</b>: Include only patients who match selected criteria. Check to enable; uncheck to disable. When grouping by <i>Family</i> this is based on the total family balance.  </p>
<ul class="MarginBottomGap">
<li><b>Negative balances</b>: Only show patients who have a negative balance (i.e., credit).</li>
<li><b>Insurance estimates and no balance</b>: Only show patients with a balance of zero, but also have an insurance estimate.</li>
</ul>
<p><b>Age write-off estimates</b>: Check to subtract original write-off estimate amounts from aging category totals. Write-off estimates are aged by procedure date. See Report Logic section below for additional information. </p>
<p><b>Show last payment date (landscape)</b>: Include date of last payment for patients. This prints the report in landscape orientation.</p>
<p><b>Exclude income transfers</b>: When checked, <a href="incometransfer.html">Income Transfers</a> (existing income that has been re-allocated) are not aged by the transfer date but instead by the original payment date. Option is only available when Group By is set to <i>Family</i>. <div class="Note">Note: <ul>
<li>Aging categories on the report may not match other areas of the program when checked.</li>
<li>This option is only available for users on <a href="mysql56update.html">MySQL 5.6</a> or <a href="mariadb.html">MariaDB</a>. If using MySQL 5.5, a warning indicates the database must be upgraded. </li>
</ul>
</div>
</p>
<p><b>Billing Types</b>: Highlight the <a href="definitionsbillingtypes.html">Billing Types</a> to include or check <b>All</b> to include all billing types, including those marked hidden.</p>
<p class="MarginBottomZero"><b>Providers</b>: Highlight the providers to include. Check <b>All</b> to include all providers, including those marked <i>Hidden on Reports</i>. </p>
<ul class="MarginBottomGap">
<li>When <i>Group By</i> is set to <i>Family</i>, filters by guarantor's Primary Provider.</li>
<li>When <i>Group By</i> is set to <i>Individual</i>, filters by patient's Primary Provider.</li>
<li>To exclude hidden providers from the report, manually select visible providers from the list.</li>
</ul>
<p class="MarginBottomZero"><b>Clinics</b>: Only available when Clinics are enabled in <a href="showfeatures.html">Show Features</a>. Highlight clinics to include in the report. Check <b>All (includes hidden)</b> to include all clinics, including those marked hidden.  </p>
<ul class="MarginBottomGap">
<li>When <i>Group By</i> is set to <i>Family</i>, filters by guarantor's assigned clinic.</li>
<li>When <i>Group By</i> is set to <i>Individual</i>, filters by patient's assigned clinic.</li>
<li>If user is restricted to specific clinics, only accessible clinics are listed. When checking <b>All (includes hidden)</b>, results include all clinics user has access to, including those marked hidden; results do not include clinics user is restricted from or patients/guarantors not assigned to a clinic</li>
</ul>
<p><b>Generate Query</b>: Click to generate the raw query text of the Aging report.</p>
<p>The red text <i>Future dated transactions are allowed</i> only appears if one or more of the following <a href="preferences.html">Preferences</a> are enabled: <i>Allow future dated payments</i>, <i>Allow future payments</i>, <i>All future dated transactions</i>. Aging may look inaccurate if any of these preferences are allowed.</p>
<h2>Report Preview</h2>
<p>Click <b>OK</b> to generate a print preview of the report. The following is an example of the report and explanation of the report columns. For a description of toolbar buttons, see <a href="reportcomplex.html">Complex Report System</a>. </p>
<img src="images/reportAgingPrint.png" width="833" height="672"/><p class="MarginBottomZero">Below is a description of each column in the report. The columns vary depending on the report criteria. See Report Logic section below for additional information on how column totals are calculated.  </p>
<ul class="MarginBottomGap">
<li><b>Guarantor</b> or <b>Patient</b><ul>
<li>When grouping by <i>Family</i>, the guarantor of any families who meet filter criteria is listed. Subsequent columns are reflective of family balances.</li>
<li>When grouping by <i>Patient</i>, the name of any patient who meets filter criteria. Subsequent columns are reflective of patient balance.</li>
<li>Enable <i>Show PatNum: Aging, OutstandingIns, ProcsNotBilled</i> in <a href="reportmiscsettings.html">Report Setup: Misc Settings</a> to include Patient Number.</li>
</ul>
</li>
<li><b>0-30 Days</b>: The balance that is 30 days past due.</li>
<li><b>31-60 Days</b>: The balance that is 31-60 days past due.</li>
<li><b>61-90 Days</b>: The balance that is 61-90 days past due.</li>
<li><b>&gt; 90 Days</b>: The balance that is greater than 90 days past due.</li>
<li><b>Total</b>: The total amount owed by the individual or guarantor, before insurance.</li>
<li><b>-W/O Est</b>: The insurance write-off estimate amount based on the procedures attached to the claim. Only shows if <i>Age write-off estimates</i> is unchecked and there are still unreceived write-off estimates as of the report date.</li>
<li><b>-W/O Change</b>: The difference between the original write-off estimate and the current write-off estimate for unreceived claims. Only shows if <i>Age write-off estimates</i> is checked and if the original write-off estimate changed. <ul>
<li>If there are no changes in the original write-off estimate for any accounts on the report, this column is hidden when <i>Age write-off estimates</i> is checked.</li>
</ul>
</li>
<li><b>-Ins Est</b>: The total estimated insurance payment amount. This is the sum of all claims for the individual or family.</li>
<li><b>Patient</b>: The estimated patient portion. <ul>
<li>When <i>Age write-off estimates</i> is unchecked this is calculated by <span class="codeblock">Total - Ins Est - W/O Est</span>.</li>
<li>When <i>Age write-off estimates</i> is checked this calculated by <span class="codeblock">Total - Ins Est - W/O Change</span>.</li>
</ul>
</li>
<li><b>Last Pay Date</b>: The date of the last received patient payment. Only shows when <i>Show last payment date</i> is checked.</li>
</ul>
<p><div class="Note">Note: <ul>
<li>Negative balances (i.e., credits) are not reflected in aging categories (0-30, 31-60, etc.) These balances are reflected in the Total and Patient amounts.</li>
<li>If the preference <i>Transactions attached to a procedure offset each other before aging</i> is enabled, negative adjustments are reflected in balances as of the procedure date, even when the adjustment date is after the <i>As of</i> date.</li>
</ul>
</div>
</p>
<h2>Report Logic</h2>
<p class="MarginBottomZero">If <i>Age write-off estimates</i> is checked: </p>
<ul class="MarginBottomGap">
<li>Totals throughout the <i>0-30 Days</i>, <i>31-60 Days</i>, <i>61- 90 Days</i>, <i>&gt; 90 Days</i> and <i>Total</i> columns are reduced by the total outstanding write-off aged for that age period (e.g., <i>0-30 Days</i> = <i>Total 0-30 Balance</i> - <i>0-30 Days Estimated Write-off</i> or <i>0-30 Days</i> = <i>0-30 Days Patient Estimated Balance</i> + <i>0-30 Days Estimated Insurance Payment Pending</i>).</li>
<li>The aging and total columns do not consider changes to the original write-offs.</li>
<li>Original write-off estimates come from the <a href="claimsnapshot.html">Claim Snapshot</a>. If any change is made to the original write-off, this is reflected in the <i>W/O Change</i> and <i>Patient </i>columns.</li>
</ul>
<p>If <i>Age write-off estimates</i> is unchecked, age columns and <i>Total</i> are based on the billed fee (e.g., UCR fee) and do not subtract write-offs.</p>
<p>To match the totals of the Aging of A/R Report and Receivables Breakdown Report: See <a href="reportreceivablesbreakdown.html">Receivables Breakdown Report</a>.</p>
<h2>Examples</h2>
<p><b>After a Conversion</b>: Generate an Aging of A/R report to compare the total account balance in the old software with the beginning total account balance in Open Dental.</p>
<img src="images/agingARExample1.png" width="915" height="362"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>Run the Aging of A/R report on the date of conversion. Enter the conversion date as the <b>As of Date</b>.</li>
<li>In <i>Age of Account</i>, choose <b>Any Balance</b>.</li>
<li>In the <i>Include Patients With</i> section, check <b>Negative balances</b>.</li>
<li>Ensure all <b>Billing Types</b> and <b>Providers</b> are checked.</li>
<li>If using clinics, choose the <b>Clinics</b> to include on the report. <ul>
<li>Report can be run once for all clinics or separately for each clinic.</li>
<li>If some clinics have been hidden, checking <b>All (includes hidden)</b>, includes patients attached to hidden clinics. Running the report for each clinic separately may exclude some A/R if it is attached to patients assigned a hidden clinic.</li>
</ul>
</li>
<li>If payment plans were converted, users need to account for payment plan due balances in the A/R. If pay plan logic is Age Credits and Debits, these amounts are reflected in the A/R balance. If not, run the <a href="reportpaymentplan.html">Payment Plans Report</a> instead.</li>
</ul>
<p><b>Collections</b>: Make the list smaller for sending accounts to collections (e.g., for non-payment).</p>
<img src="images/agingARExample2.png" width="915" height="362"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>Filter the report by <i>Age of Account</i> (e.g., Over 90 Days).</li>
<li>If a Billing Type is assigned to patients who have already been sent to collections, filter the report by Billing Type  <ul>
<li>Uncheck <b>All</b> under <i>Billing Types</i> and select the desired billing type(s) (e.g., Bad Debt). </li>
</ul>
</li>
</ul>
<p><b>Families with positive balances</b>: Create a list of all families with at least one family member with a balance due.</p>
<img src="images/agingARExample3.png" width="915" height="362"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><i>Age of Account:</i> Choose <b>Any Balance</b>.</li>
<li><i>Billing Types</i>: Check <b>All</b>.</li>
<li><i>Providers</i>: Check <b>All</b>.</li>
<li><i>Group By</i>: Choose <b>Family</b>.</li>
<li>If using clinics, check <b>All (includes hidden)</b> to run for guarantors assigned to all clinics, including those that have been hidden, or choose the specific clinic to run.</li>
</ul>
<p><b>Total practice account balance</b>: Create a list of all account balances regardless if they are negative or not.</p>
<img src="images/agingARExample4.png" width="915" height="362"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><i>Age of Account</i>: Choose <b>Any Balance</b>.</li>
<li><i>Include Patients With</i>: Check <b>Negative balances</b>.</li>
<li><i>Billing Types</i>: Check <b>All</b></li>
<li><i>Providers</i>: Check <b>All</b></li>
<li><i>Group By</i>: <ul>
<li>To see balances by individual patient, choose<b> Individual</b>.</li>
<li>To see total family balances, listed by guarantor, choose <b>Family</b>.</li>
</ul>
</li>
</ul>
<p><b>Accounts with credits</b>: Create a list of all accounts with a negative balance (i.e., credit)</p>
<img src="images/agingARExample5.png" width="915" height="362"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><i>Age of Account</i>: Choose <b>Any Balance</b>.</li>
<li><i>Only Patients With</i>: Check <b>Negative Balances</b>.</li>
<li><i>Billing Types</i>: Check <b>All</b>.</li>
<li><i>Providers</i>: Check <b>All</b>.</li>
<li>If using clinics, check <b>All (includes hidden)</b> to run for guarantors assigned to all clinics, including those that are hidden, or choose the specific clinic to run.</li>
</ul>
<h2>Questions and Answers</h2>
<p><b>Question: I am comparing my Aging of A/R total from two dates. I expect the differences to be equal to the Production and Income amounts for the period, but they differ. Why?</b></p>
<p>Answer: If Line Item Payment Plans are not turned on, payment plans are not part of individual account balances and therefore not part of the practice balance, which is the A/R. Every time you create a payment plan you are making a loan and reducing your A/R. Likewise, payments attached to a payment plan do not change your A/R, but do affect production and income.</p>
<p>AR1 - AR2 =</p>
<p>(ProdT2 - ProdT1) - (IncomeT2 - IncomeT1) + (PayPlanPaymentsT2 - PayPlanPaymentsT1) - Change of TP completed amounts of all payment plans.</p>
<p><b>Question: I am using clinics. When I run reports, the Aging of A/R report shows payment assigned to one clinic, but the Production and Income (P &amp; I) report shows the same payment assigned to a different clinic. Why?</b></p>
<p>Answer: Each report determines the clinic differently. The Aging of A/R report determines clinic based on the guarantor's assigned clinic (the person technically 'owns' the debt). The P &amp; I report determines clinic based on the clinic assigned to the procedure (place of service).</p>
<p><p><b>Question: I want to know how long insurance estimates have been outstanding. How can I find this out?</b></p>
</p>
<p>Answer: Run the <a href="reportinsaging.html">Insurance Aging Report</a>.</p>
</div>
</div>
</body>
</html>```
