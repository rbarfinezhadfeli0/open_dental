# File: ./www.opendental.com/manual243/reportinsaging.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Insurance Aging Report</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('reportinsaging','+monthly','reportsstandard','reports','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/reportinsaging.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/reportinsaging.html" >v24.2</option><option value="https://www.opendental.com/manual241/reportinsaging.html" >v24.1</option><option value="https://www.opendental.com/manual233/reportinsaging.html" >v23.3</option><option value="https://www.opendental.com/manual232/reportinsaging.html" >v23.2</option><option value="https://www.opendental.com/manual231/reportinsaging.html" >v23.1</option><option value="https://www.opendental.com/manual224/reportinsaging.html" >v22.4</option><option value="https://www.opendental.com/manual223/reportinsaging.html" >v22.3</option><option value="https://www.opendental.com/manual222/reportinsaging.html" >v22.2</option><option value="https://www.opendental.com/manual221/reportinsaging.html" >v22.1</option><option value="https://www.opendental.com/manual214/reportinsaging.html" >v21.4</option><option value="https://www.opendental.com/manual213/reportinsaging.html" >v21.3</option><option value="https://www.opendental.com/manual212/reportinsaging.html" >v21.2</option><option value="https://www.opendental.com/manual211/reportinsaging.html" >v21.1</option><option value="https://www.opendental.com/manual205/reportinsaging.html" >v20.5</option><option value="https://www.opendental.com/manual204/reportinsaging.html" >v20.4</option><option value="https://www.opendental.com/manual203/reportinsaging.html" >v20.3</option><option value="https://www.opendental.com/manual202/reportinsaging.html" >v20.2</option><option value="https://www.opendental.com/manual201/reportinsaging.html" >v20.1</option><option value="https://www.opendental.com/manual194/reportinsaging.html" >v19.4</option><option value="https://www.opendental.com/manual193/reportinsaging.html" >v19.3</option><option value="https://www.opendental.com/manual192/reportinsaging.html" >v19.2</option><option value="https://www.opendental.com/manual191/reportinsaging.html" >v19.1</option><option value="https://www.opendental.com/manual184/reportinsaging.html" >v18.4</option><option value="https://www.opendental.com/manual183/reportinsaging.html" >v18.3</option><option value="https://www.opendental.com/manual182/reportinsaging.html" >v18.2</option><option value="https://www.opendental.com/manual181/reportinsaging.html" >v18.1</option><option value="https://www.opendental.com/manual174/reportinsaging.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Insurance Aging Report</p></div>
<div class="GeneralPageContent">
<p>The Insurance Aging Report is useful for viewing a breakdown of insurance and patient portion estimates by age of account.</p>
<p>In <a href="reportsstandard.html">Standard Reports</a>, in the Monthly section, click <b>Insurance Aging Report</b>.</p>
<img src="images/reportInsAging.png" width="766" height="450"/><p>Offices that want to ensure they are getting paid by insurance companies and want to follow up on older claims should use the <a href="reportoutins.html">Outstanding Insurance Claims Report</a> instead.</p>
<p>This report is based on the guarantor's billing type, primary provider, and clinic. <a href="aging.html">Aging</a> is automatically recalculated when the report is generated.</p>
<p><div class="Note">Note: <ul>
<li>To control user access to reports, see <a href="reportsecurity.html">Report Setup: Security Permissions</a>.</li>
<li>Determine default settings for the report with <i>Wrap columns when printing</i> and<i>Show PatNum</i> in <a href="reportmiscsettings.html">Report Setup: Misc Settings</a>.</li>
</ul>
</div>
</p>
<h2>Filters</h2>
<p>Set the report criteria and filters before running the report.</p>
<p><b>As Of Date</b>: Enter the <i>as of</i> date for the report. Defaults to the date of the most recent aging calculation (usually today). If changed to a historical date, totals reflect all transactions up to the date entered except for estimated write-offs.</p>
<p class="MarginBottomZero"><b>Age of Account</b>: Select which patients to include based on aging balance.  </p>
<ul class="MarginBottomGap">
<li><b>Any Balance</b>: Include patients with any balance due.</li>
<li><b>Over 30 Days</b>: Include all patients with any balances that are over 30 days due.</li>
<li><b>Over 60 Days</b>: Include all patients with any balances that are over 60 days due.</li>
<li><b>Over 90 Days</b>: Include all patients with any balances that are over 90 days due.</li>
</ul>
<p class="MarginBottomZero"><b>Group By</b>: Select how to group calculation amounts.  </p>
<ul class="MarginBottomGap">
<li><b>Family</b>: Group by family, listed by guarantor. Only shows guarantor and family totals, even if insurance plans differ.</li>
<li><b>Individual</b>: Group by individual patient.</li>
</ul>
<p class="MarginBottomZero"><b>Only show patients with outstanding claims</b>:  </p>
<ul class="MarginBottomGap">
<li>Checked: Limit report to patients with outstanding claims and enable insurance breakdown options below. Results are grouped by both carrier name and group name.</li>
<li>Unchecked: Display all patients, regardless of whether they have outstanding claims. </li>
</ul>
<p class="MarginBottomZero"><b>Filter</b>: Insurance breakdown options. Only available when <i>Only show patients with outstanding claims</i> is checked. </p>
<ul class="MarginBottomGap">
<li><b>Carrier Name like</b>: Type an insurance carrier name to limit the report results.</li>
<li><b>Group Name like</b>: Type an insurance plan group name to limit report results. </li>
</ul>
<p><b>Billing Types</b>: Highlight the billing types to include or check <b>All </b>to include all billing types.</p>
<p class="MarginBottomZero"><b>Providers</b>: Highlight the primary providers to include or check <i>All</i> to include all providers, including those marked <i>Hidden on Reports</i>. </p>
<ul class="MarginBottomGap">
<li>When Group By is set to Family, filters by guarantor's primary provider. </li>
<li>When Group By is set to individual, filters by patient's primary provider.</li>
<li>To exclude hidden providers from the report, manually select visible providers from the list.</li>
</ul>
<p class="MarginBottomZero"><b>Clinics</b>: <b>Clinics</b>: Select clinics to include in the report. Check <b>All (includes hidden)</b> to include all clinics, including those marked hidden.  </p>
<ul class="MarginBottomGap">
<li>When Group By is set to Family, filters by the guarantor's assigned clinic. When Group By is set to Individual, filters by the patient's assigned clinic.</li>
<li>If user is restricted to specific clinics, only accessible clinics are listed. When checking <b>All (includes hidden)</b>, results include all clinics user has access to, including those marked hidden; results do not include clinics user is restricted from or patients not assigned to a clinic. </li>
</ul>
<h2>Report Preview</h2>
<p>Click <b>OK</b> to generate the report. The resulting report changes depending on if <i>Only show patients with outstanding claims</i> is checked. Below are example reports and explanation of report columns.</p>
<p>Report, run by individual, with <i>Only show patients with outstanding claims</i> unchecked:</p>
<img src="images/ReportInsAgingPrintDetailed.png" width="915" height="588"/><p></p>
<p>Report, run by family, with <i>Only show patients with outstanding claims</i> checked:</p>
<img src="images/ReportInsAgingPrint.PNG" width="915" height="653"/><p></p>
<p class="MarginBottomZero">The columns vary depending on the report criteria. </p>
<ul class="MarginBottomGap">
<li><b>Guarantor or Patient</b>: <ul>
<li>When grouping by <i>Family </i>the last name and first name of the guarantor of a family. Subsequent columns for the row reflect family balances.</li>
<li>When grouping by <i>Individual</i> the last name and first name of an individual patient. Subsequent columns reflect individual patient balances.</li>
</ul>
</li>
<li>The following columns only appear on the report when <i>Only show patients with outstanding claims</i> is checked:</li>
<ul>
<li><b>Carrier</b>: Insurance carrier associated with the outstanding insurance estimate.</li>
<li><b>Group Name</b>: Group name of the insurance plan associated with the outstanding insurance estimate.</li>
</ul>
<li><b>Ins Pay 0-30 Days</b>: The estimated insurance balance that is 30 days past due.</li>
<li><b>Ins Pay 31-60 Days</b>: The estimated insurance balance that is 31-60 days past due.</li>
<li><b>Ins Pay 61-90 Days</b>: The estimated insurance balance that is 61-90 days past due.</li>
<li><b>Ins Pay &gt; 90 Days</b>: The estimated insurance balance that is greater than 90 days past due.</li>
<li><b>Ins Est Total</b>: The total of any outstanding insurance estimates. This includes <a href="claimprocedure.html">Claim Procedures ( claimprocs )</a> with a status of <i>Not Received</i> and <a href="https://www.opendental.com/manual243/claimpendingsupplemental">Pending Supplemental Insurance Overpayments/Underpayments</a>.</li>
<li>The following columns only appear when <i>Only show patients with outstanding claims</i> is unchecked:</li>
<ul>
<li><b>Pat Est 0-30 Days</b>: The patient estimated balance up to 30 days past due.</li>
<li><b>Pat Est 31-60 Days</b>: The patient estimated balance 31-60 days past due.</li>
<li><b>Pat Est 61-90 Days</b>: The patient estimated balance 61-90 days past due.</li>
<li><b>Pat Est &gt; 90 Days</b>: The patient estimated balance greater than 90 days past due.</li>
<li><b>Pat Est Bal Total</b>: The total patient estimated balance.</li>
<li><b>W/O Change</b>: The difference between the original write-off estimate and the current write-off estimate (if changed) for unreceived claims.</li>
<li><b>Pat Est Amount Due</b>: The total amount estimated to be owed by patient after insurance estimates and changes in write-offs. This is based on the total account balances and not only outstanding claims (i.e. <span class="codeblock">Pat Est Amount Due = Total Account Balance - Ins Pay Total - Write-offs</span>). </li>
</ul>
</ul>
<h2>Report Logic</h2>
<p>Insurance payment estimate (<i>Ins Pay</i>) columns are based on the <a href="claimsnapshot.html">Claim Snapshot</a> and include estimated write-offs. If any change is made that affects the estimated write-off, this is reflected in the <i>W/O Change</i> column only. </p>
<p>Patient estimated balances (<i>Pat Est</i>) columns are based on the Total Account Balance, this amount is not on the report, minus insurance payment estimates from the Claim Snapshot (e.g., <span class="codeblock">Pat Est &gt;90 = Total Account Balance - Ins Pay Est &gt;90</span>)</p>
<p>This report does not exclude accounts with negative balances.</p>
</div>
</div>
</body>
</html>```
