# File: ./www.opendental.com/manual243/reportprodinc.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Production and Income Reports</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('reportprodinc','reportsstandard','reports','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/reportprodinc.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/reportprodinc.html" >v24.2</option><option value="https://www.opendental.com/manual241/reportprodinc.html" >v24.1</option><option value="https://www.opendental.com/manual233/reportprodinc.html" >v23.3</option><option value="https://www.opendental.com/manual232/reportprodinc.html" >v23.2</option><option value="https://www.opendental.com/manual231/reportprodinc.html" >v23.1</option><option value="https://www.opendental.com/manual224/reportprodinc.html" >v22.4</option><option value="https://www.opendental.com/manual223/reportprodinc.html" >v22.3</option><option value="https://www.opendental.com/manual222/reportprodinc.html" >v22.2</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Production and Income Reports</p></div>
<div class="GeneralPageContent">
<p>The Production and Income Report allows offices to view their production and income for a date range with multiple <i>Report Type</i> options.</p>
<p>In <a href="reportsstandard.html">Standard Reports</a>, in the Production and Income section, click <b>More Options</b>.</p>
<img src="images/reportProdIncSelect.png" width="711" height="416"/><p class="MarginBottomZero">Alternatively, to run a production and income report immediately from Standard Reports, in the Production and Income section click one of the preset report options: </p>
<ul class="MarginBottomGap">
<li><b>Today</b> or <b>Yesterday</b> generates a <i>Daily</i> report using default options.</li>
<li><b>This Month</b> or <b>Last Month</b> generates a <i>Monthly</i> report using default options.</li>
<li><b>This Year</b> generates an <i>Annual</i> report for the current year (Jan. 1 - Dec. 31) using default options.</li>
</ul>
<p><div class="Note">Note: <ul>
<li>Large offices may want to set up a <a href="reportserver.html">Report Server</a> to run Production and Income Reports. This can be useful to prevent lockups and slowness in a live database. <ul>
<li>If using multiple databases, see <a href="central.html">Central Enterprise Management Tool ( CEMT )</a> for running Production and Income reports.</li>
</ul>
</li>
<li>Requires the <i>Production and Income - View All Providers</i> permission to run the report for any provider not associated with the logged-in user. Users without this permission can only run Production and Income for the provider associated with their <a href="securityusers.html">User Edit</a>.</li>
<li>Set report defaults that affect this and other reports in <a href="reportmiscsettings.html">Report Setup: Misc Settings</a>.</li>
</ul>
</div>
</p>
<h2>Report Options</h2>
<p class="MarginBottomZero"><b>Report Type:</b> Select the report type. Date range values automatically change to match. There are several Production and Income reports. Each summarizes information differently based on report type. </p>
<ul class="MarginBottomGap">
<li>Daily: Lists detailed information on transactions including payments, procedures, and adjustments, for a single date or date range.</li>
<li>Monthly: Lists production and income totals by day, for a date range. Also shows scheduled production.</li>
<li>Annual: Lists production and income totals by month, for a date range.</li>
<li>Provider: Lists production and income totals by provider, for a date range.</li>
</ul>
<p class="MarginBottomZero"><b>Providers:</b> Select the providers to include, or check <b> All (Includes hidden)</b> to include all providers, including providers marked <i>Hidden On Reports</i> that have activity (i.e., production or income) for the report period.  </p>
<ul class="MarginBottomGap">
<li>Selecting <i>No Provider</i> includes payments with an unearned type (pay splits not associated to a provider, such as prepayments).</li>
<li>Provider selection is only an option if the logged-on user has the <i>Production and Income, View All Providers</i> permission.</li>
<li>To exclude hidden providers from the report, manually select visible providers from the list.</li>
</ul>
<p><b>Include Unearned:</b> Select this box to include unearned income. An additional column is added for Unearned Income on <i>Monthly</i>, <i>Annual</i>, and <i>Provider</i> report types. The report uses a landscape orientation. This should either always be selected when running Production and Income or never selected.</p>
<p class="MarginBottomZero"><b>Clinics:</b> Select the clinics to include, or check <b>All (Includes hidden)</b> to include all clinics. Clinic is determined by the clinic of the procedure (place of service).  </p>
<ul class="MarginBottomGap">
<li><b>Show Clinic Info</b>: Only an option for the <i>Daily Report Type</i>. Set the default in <a href="reportmiscsettings.html">Report Setup: Misc Settings</a>.<br/> Checked: The clinic shows for each transaction, clinic totals show at the bottom of the report, and the report prints in landscape orientation.<br/> Unchecked: Clinic information does not show.</li>
<li><b>Show Clinic Breakdown</b>: Select how data is grouped. Set the default in Report Setup: Misc Settings. <ul>
<li>Checked: Report groups by clinic.</li>
<li>Unchecked: Report groups by date and intermingles clinics.</li>
</ul>
</li>
</ul>
<p class="MarginBottomZero"><b>Date Range:</b> Select the report date range. Today's Date is automatically populated with the current date for reference. The default date range is based on the report type. To change, manually enter the <b>From / To</b> dates, or click the arrows to quickly change values.  </p>
<ul class="MarginBottomGap">
<li><b>Today</b>/<b>This Month</b>/<b>This Year</b>: Reset dates to match the current day, month, or year.</li>
<li><b>Right</b>/<b>Left</b> arrows: Move back or forward one day/month/year at a time.</li>
</ul>
<p class="MarginBottomZero"><b>Show Insurance <b>Write-offs</b>:</b> Select when to apply insurance write-offs to production amounts. See <a href="writeoffstoproduction.html">Show Insurance Write-offs</a> for more details. Set the default in Report Setup: Misc Settings.  </p>
<ul class="MarginBottomGap">
<li><b>Using insurance payment date</b>: Apply the write-off when the insurance payment is entered.</li>
<li><b>Using procedure date</b>: Apply the write-off on the date of service.</li>
<li><b>Use initial claim date for write-off estimates, ins pay date for write-off adjustments</b>: Apply initial write-off estimate on the claim date. Apply any difference between write-off estimate and finalized write-off (i.e., write-off adjustments) on the insurance payment date. The report displays and prints in landscape orientation when this option is selected. See below for descriptions of each write-off column.</li>
</ul>
<h2>Report Preview</h2>
<p>Click <b>OK</b> to generate a print preview of the report. For a description of Toolbar buttons, see <a href="reportcomplex.html">Complex Report System</a>.</p>
<p>The following screenshot is an example of the <i>Monthly Report Type</i> and explanation of the report columns. Columns vary depending on report settings.</p>
<img src="images/reportProdIncPreview.png" width="915" height="475"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Production</b>: Procedure fees for completed procedures (i.e., the gross fee billed to the patient). Production from <a href="plancapitation.html">Capitation ( HMO / DMO ) Insurance Plan</a> is not included.</li>
<li><b>Sched</b>: Only displayed when using the <i>Monthly Report Type</i>. Sum of treatment planned procedures fees attached to appointments with a status of <i>scheduled</i>. Does not include work for Capitation insurance plans. Write-offs are only included if <i>Monthly P&amp;I scheduled production subtracts PPO write-offs</i> is enabled in Report Setup, Misc Settings.</li>
<li><b>Adjustments</b>: <a href="adjustments.html">Adjustments</a> attached to completed procedures or posted to accounts. (<i>Monthly Report Type</i> Only) Includes discounts attached to scheduled procedures.</li>
<li><b>Write-off</b>: Write-off amounts for PPO insurance plans. Capitation write-offs are not included. <ul>
<li>Column is not shown when <i>Use initial claim date for write-off estimates, ins pay date for write-off adjustments</i>. Alternate columns are used to display write-offs.</li>
</ul>
</li>
<li>The following columns display when <i>Use initial claim date for write-off estimates, ins pay date for write-off adjustments</i> is selected. <ul>
<li><b>Write-off Est</b>: The write-off estimate amount in the <a href="claimsnapshot.html">Claim Snapshot</a>.</li>
<li><b>Write-off Adj</b>: The change in write-off amounts. Write-off estimate amount (Write-off Est column) minus the actual write-off amount. Amount must be a number other than zero.</li>
</ul>
</li>
<li><b>Tot Prod</b>: Total Production. The daily sum of <span class="codeblock">Production + Sched + Adj - Write-off</span> or <span class="codeblock">Production + Sched + Adj - Write-off Est + Write-off Adj</span>.</li>
<li><b>Pt Income</b>: Patient Income. The amount received from patient payments that are allocated. </li>
<li><b>Unearned Pt Income</b>: Unearned Patient Income. The total amount of payments with an <i>Unearned</i> type (typically prepayments).</li>
<li><b>Ins Income</b>: Insurance Income. The amount received from insurance company (claim) payments.</li>
<li><b>Tot Income</b>: Total Income. The daily sum of <span class="codeblock">Pt Income + Ins Income</span>.</li>
<li><b>Total Production</b>: The sum of all <span class="codeblock">Production + Sched + Adjustments - Write-offs</span> or <span class="codeblock">Production + Sched + Adj - Write-off Est + Write-off Adj</span>.</li>
<li><b>Description</b>: (<i>Daily Report Type</i> only) Description of the production or income (e.g. check, adjustment, discount, procedure code name, etc).</li>
<li><b>Provider</b>: (<i>Daily</i> and <i>Provider</i> Report Types only): Provider associated with the production or income.</li>
<li><b>Clinic</b>: Clinic associated with the production or income.</li>
</ul>
<p><div class="Note">Note: <ul>
<li>While write-offs are displayed as a negative amount in the grid, that is only for visual emphasis. This does not result in negative amounts being subtracted in the production totals using the equations defined above.</li>
<li>Production and income amounts may not match Aging of A/R amounts.</li>
<li>Occasionally, this report may change if a patient's Treatment Plan has not been viewed. Once viewed, the report refreshes with the new discount information.</li>
</ul>
</div>
</p>
<h2>Examples</h2>
<p><b>Daily Report Type</b></p>
<img src="images/reportProdIncDaily.png" width="693" height="609"/><p>The <i>Daily</i> Report Type displays an itemized list of all production and income for the selected date range, provider(s), and clinic(s). Each item appears on its own line on the report. For example, an adjustment shows on a separate line on the report from the procedure production, even if the adjustment was attached to the procedure. </p>
<p>Columns are totaled on the last page of the report in addition to net total production and income. This report type can be run for more than a single day to show itemized history for a date range.</p>
<p><b>Monthly Report Type</b></p>
<img src="images/reportProdIncMonthly.png" width="915" height="655"/><p>The <i>Monthly</i> Report Type sums up all production and income for the selected date range, provider(s), and clinic(s) and groups the totals by day. To show itemized history for a monthly date range instead, run the Daily Report Type and enter a date range for the desired month. </p>
<p>Columns are totaled on the last page of the report in addition to net total production and income.</p>
<p><b>Annual Report Type</b></p>
<img src="images/reportProdIncAnnual.png" width="915" height="416"/><p>The <i>Annual</i> Report Type sums up all production and income for the selected date range, provider(s), and clinic(s) and groups the totals by month. </p>
<p>Columns are totaled on the last page of the report in addition to net total production and income.</p>
<p><b>Provider Report Type</b></p>
<img src="images/reportProdIncProv.png" width="915" height="402"/><p>The <i>Provider</i> Report Type sums up all production and income for the selected date range, provider(s), and clinic(s) and groups the totals by provider.</p>
<p>Columns are totaled at the end of the report.</p>
</div>
</div>
</body>
</html>```
