# File: ./www.opendental.com/manual243/reportprovpayroll.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Provider Payroll Production and Income Report</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('reportprovpayroll','reportprodinc','reportsstandard','reports','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/reportprovpayroll.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/reportprovpayroll.html" >v24.2</option><option value="https://www.opendental.com/manual241/reportprovpayroll.html" >v24.1</option><option value="https://www.opendental.com/manual233/reportprovpayroll.html" >v23.3</option><option value="https://www.opendental.com/manual232/reportprovpayroll.html" >v23.2</option><option value="https://www.opendental.com/manual231/reportprovpayroll.html" >v23.1</option><option value="https://www.opendental.com/manual224/reportprovpayroll.html" >v22.4</option><option value="https://www.opendental.com/manual223/reportprovpayroll.html" >v22.3</option><option value="https://www.opendental.com/manual222/reportprovpayroll.html" >v22.2</option><option value="https://www.opendental.com/manual221/reportprovpayroll.html" >v22.1</option><option value="https://www.opendental.com/manual214/reportprovpayroll.html" >v21.4</option><option value="https://www.opendental.com/manual213/reportprovpayroll.html" >v21.3</option><option value="https://www.opendental.com/manual212/reportprovpayroll.html" >v21.2</option><option value="https://www.opendental.com/manual211/reportprovpayroll.html" >v21.1</option><option value="https://www.opendental.com/manual205/reportprovpayroll.html" >v20.5</option><option value="https://www.opendental.com/manual204/reportprovpayroll.html" >v20.4</option><option value="https://www.opendental.com/manual203/reportprovpayroll.html" >v20.3</option><option value="https://www.opendental.com/manual202/reportprovpayroll.html" >v20.2</option><option value="https://www.opendental.com/manual201/reportprovpayroll.html" >v20.1</option><option value="https://www.opendental.com/manual194/reportprovpayroll.html" >v19.4</option><option value="https://www.opendental.com/manual193/reportprovpayroll.html" >v19.3</option><option value="https://www.opendental.com/manual192/reportprovpayroll.html" >v19.2</option><option value="https://www.opendental.com/manual191/reportprovpayroll.html" >v19.1</option><option value="https://www.opendental.com/manual184/reportprovpayroll.html" >v18.4</option><option value="https://www.opendental.com/manual183/reportprovpayroll.html" >v18.3</option><option value="https://www.opendental.com/manual182/reportprovpayroll.html" >v18.2</option><option value="https://www.opendental.com/manual181/reportprovpayroll.html" >v18.1</option><option value="https://www.opendental.com/manual174/reportprovpayroll.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Provider Payroll Production and Income Report</p></div>
<div class="GeneralPageContent">
<p>The Provider Payroll report is a Production and Income Report that can be used to determine a provider's net production and income.</p>
<p>In <a href="reportsstandard.html">Standard Reports</a>, click <b>Provider Payroll Summary</b> or <b>Provider Payroll Detail</b>.</p>
<img src="images/reportProviderPayroll.png" width="795" height="351"/><p>Some offices use this <a href="reportprodinc.html">Production and Income Report</a> to determine how much to pay their providers when the providers earn a certain percentage of net income. The calculations for determining production and income in this report were custom-created for a specific use and may not apply to all offices.</p>
<p class="MarginBottomZero">To use this report: </p>
<ul class="MarginBottomGap">
<li>Make sure the calculations that determine the values in the report are applicable to the office. See the column descriptions in the Report Preview section. </li>
<li>Allocate all income (Insurance, Patient Payments).</li>
</ul>
<p><div class="Note">Note: To control user access to this report, see <a href="reportsecurity.html">Report Setup: Security Permissions</a>.</div>
</p>
<p>The Provider Payroll report can list total production per day (Summary) or per patient (Patient Detail). The report types are hidden by default. To show these reports, see <a href="reportdisplaysettings.html">Report Setup: Display Settings</a>.</p>
<h2>Report Filters and Options</h2>
<p class="MarginBottomZero"><b>Providers:</b> Select the providers to include, or check <b>All</b> to include all providers, including hidden providers, that have activity (i.e., production or income) in the reporting period. Unearned includes pay splits with an unearned type (not associated to a provider, such as prepayments). Typically, this report is run for one provider at a time.
<ul class="MarginBottomGap">
	<li>To exclude hidden providers from the report, manually select visible providers from the list.</li>
</ul></p>
<p class="MarginBottomZero"><b>Clinics</b>: Select clinics to include in the report. Ctrl + click to select multiple clinics or check <b>All (includes hidden)</b> to include all clinics, including those marked hidden.  </p>
<ul class="MarginBottomGap">
<li>Filters by clinic assigned to the procedure (i.e., place of service).</li>
<li>If a user is restricted to specific clinics, only accessible clinics are listed. When checking <b>All (includes hidden)</b>, results include all clinics the user has access to, including those marked hidden, and anything unassigned to a clinic; results do not include clinics a user is restricted from.</li>
</ul>
<p><b>Today's Date</b>: Automatically populated with the current date for reference.</p>
<p class="MarginBottomZero"><b>Pay Period Date Range:</b> Select the date range of the report. The default is based on the current Pay Period (see: <a href="timecardsetup.html">Time Card Setup</a>), if one is set up. Otherwise, it defaults to one week prior to today's date.  </p>
<ul class="MarginBottomGap">
<li><b>This Period</b>: Reset dates to match current pay period.</li>
<li><b>Right</b>/<b>Left</b> arrows: Move back or forward one pay period at a time.</li>
<li>Click the calendar icons to manually select a date range outside of preset pay periods or type dates manually. Offices without pay periods must use these options to change date ranges. <b>This Period</b> and <b>Arrow</b> buttons are only functional with pay periods. </li>
</ul>
<p class="MarginBottomZero"><b>Report Type</b>: Select the report type. This affects the report detail and columns presented. </p>
<ul class="MarginBottomGap">
<li><b>Summary</b>: Lists the total production per day in the date range for all selected providers.</li>
<li><b>Patient Detail</b>: Lists production for each individual patient in the date range for all selected providers.</li>
</ul>
<br/><h2>Report Preview</h2>
<p>After setting report criteria, click <b>OK</b> to generate a print preview of the report. The following screenshot is an example of the <i>Summary</i> Report Type. Columns vary depending on the selected report type. Descriptions of report columns are below. See the Examples section for additional information on the different report types.</p>
<p>For a description of Toolbar buttons, see <a href="reportcomplex.html">Complex Report System</a>.</p>
<p></p>
<img src="images/reportProvPayroll.png" width="915" height="277"/><ul>
<li><b>Date</b>: The date that corresponds to the numbers calculated in each column.</li>
<li><b>Day</b>: The day of the week that corresponds to the date in the same row. Only shows on <i>Summary</i> report type.</li>
<li><b>Patient</b>: The name of the patient associated to all procedures, adjustments, and claim procedures. This is the actual patient on the paysplit. Only shows on <i>Patient Detail</i> report type. Patients appear once for each day they have activity in the reporting period.</li>
<li><b>UCR Production</b>: Gross production based on completed procedures that were set complete within the date range. Does not include capitation write-offs. Calculated by <span class="codeblock">ProcFee x (UnitQty+BaseUnits)</span>.  <ul>
<li>Production appears on the report based on the date the procedure was originally set complete. If the procedure date was changed, this may cause production to show on a different day than other reports. See <a href="procedureedit.html">Procedure Edit</a> (Date section) for more information.</li>
</ul>
</li>
<li><b>Est Write-off</b>: The total amount estimated write-off based on the <a href="claimsnapshot.html">Claim Snapshot</a>.</li>
<li><b>Prod Adj</b>: The sum of all adjustments that were created or edited within the date range. Excludes Bad Debt type adjustments.</li>
<li><b>Change in Write-off</b>: The difference between the estimated write-off amount and the actual write-off (estimated minus actual).</li>
<li><b>Net Prod(NPR)</b>: The sum of gross production, estimated write-off, adjustments, and change in write-off columns.</li>
<li><b>Pat Inc Alloc</b>: The sum of payments entered within the date range that are attached to a particular procedure.</li>
<li><b>Pat Inc Unalloc</b>: The sum of payments entered within the date range that are not attached to a particular procedure.</li>
<li><b>Ins Income</b>: The sum of all received claim payments that were marked received or supplemental within the date range.</li>
<li><b>Ins Not Final</b>: The sum of all received insurance payments not yet attached to a finalized claim payment, that were marked received or supplemental within the date range.</li>
<li><b>Net Income</b>: The sum of the allocated patient income (<i>Pat Inc Alloc</i>) and the insurance income (<i>Ins Income</i>) columns.</li>
</ul>
<p>Each column is totaled at the end of the report.</p>
<h2>Examples</h2>
<p><b>Summary Report Type</b></p>
<img src="images/providerPayrollSummary.png" width="915" height="200"/><p>The <i>Summary</i> Report Type includes the <i>Day</i> column and excludes the <i>Patient</i> column. Information is summed by date. Column totals are listed at the end of the report.</p>
<p><b>Patient Detail Report Type</b></p>
<img src="images/providerPayrollPatDetail.png" width="915" height="245"/><p>The <i>Patient Detail</i> Report Type includes the <i>Patient</i> column and excludes the <i>Day</i> column. Information is summed by patient and date. Patients show up on the report multiple times if they have production or income across multiple days of the reporting period. Column totals are listed at the end of the report.</p>
</div>
</div>
</body>
</html>```
