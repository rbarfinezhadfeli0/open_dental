# File: ./www.opendental.com/manual/reportproductiongoal.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Monthly Production Goal Report</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('reportproductiongoal','+monthly','reportsstandard','reports','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/reportproductiongoal.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/reportproductiongoal.html" >v24.2</option><option value="https://www.opendental.com/manual241/reportproductiongoal.html" >v24.1</option><option value="https://www.opendental.com/manual233/reportproductiongoal.html" >v23.3</option><option value="https://www.opendental.com/manual232/reportproductiongoal.html" >v23.2</option><option value="https://www.opendental.com/manual231/reportproductiongoal.html" >v23.1</option><option value="https://www.opendental.com/manual224/reportproductiongoal.html" >v22.4</option><option value="https://www.opendental.com/manual223/reportproductiongoal.html" >v22.3</option><option value="https://www.opendental.com/manual222/reportproductiongoal.html" >v22.2</option><option value="https://www.opendental.com/manual221/reportproductiongoal.html" >v22.1</option><option value="https://www.opendental.com/manual214/reportproductiongoal.html" >v21.4</option><option value="https://www.opendental.com/manual213/reportproductiongoal.html" >v21.3</option><option value="https://www.opendental.com/manual212/reportproductiongoal.html" >v21.2</option><option value="https://www.opendental.com/manual211/reportproductiongoal.html" >v21.1</option><option value="https://www.opendental.com/manual205/reportproductiongoal.html" >v20.5</option><option value="https://www.opendental.com/manual204/reportproductiongoal.html" >v20.4</option><option value="https://www.opendental.com/manual203/reportproductiongoal.html" >v20.3</option><option value="https://www.opendental.com/manual202/reportproductiongoal.html" >v20.2</option><option value="https://www.opendental.com/manual201/reportproductiongoal.html" >v20.1</option><option value="https://www.opendental.com/manual194/reportproductiongoal.html" >v19.4</option><option value="https://www.opendental.com/manual193/reportproductiongoal.html" >v19.3</option><option value="https://www.opendental.com/manual192/reportproductiongoal.html" >v19.2</option><option value="https://www.opendental.com/manual191/reportproductiongoal.html" >v19.1</option><option value="https://www.opendental.com/manual184/reportproductiongoal.html" >v18.4</option><option value="https://www.opendental.com/manual183/reportproductiongoal.html" >v18.3</option><option value="https://www.opendental.com/manual182/reportproductiongoal.html" >v18.2</option><option value="https://www.opendental.com/manual181/reportproductiongoal.html" >v18.1</option><option value="https://www.opendental.com/manual174/reportproductiongoal.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Monthly Production Goal Report</p></div>
<div class="GeneralPageContent">
<p>The Monthly Production Goal report compares production goals with actual production.</p>
<p>In <a href="reportsstandard.html">Standard Reports</a>, in the Production and Income section, click <b>Monthly Production Goal</b>.</p>
<img src="images/reportProductionGoal.png" width="811" height="390"/><p>Production goals can be set from the <a href="providerseditwindow.html">Edit Provider</a> window.</p>
<h2>Report Filters</h2>
<p>Set the report filters and criteria before running the report.</p>
<p class="MarginBottomZero"><b>Providers</b>: Select the providers to include on the report, or check <b>All</b> to include all providers, including those marked <i>Hidden on Reports</i>.  </p>
<ul class="MarginBottomGap">
<li>Users without the <i>Daily - View All Providers</i> permission will only see the provider associated with their <a href="securityusers.html">User</a> in the Providers list and the All checkbox will be disabled. Users must have the <i>Daily - View All Providers</i> to access the full provider list and utilize the All checkbox.</li>
<li>To exclude hidden providers from the report, manually select visible providers from the list.</li>
</ul>
<p class="MarginBottomZero"><b>Clinics</b>: Select clinics to include in the report. Ctrl + click to select multiple clinics or check <b>All (includes hidden)</b> to include all clinics, including those marked hidden.  </p>
<ul class="MarginBottomGap">
<li>Filters by clinic assigned to production.</li>
<li>If user is restricted to specific clinics, only accessible clinics will list. When checking <b>All (includes hidden)</b>, results will include all clinics user has access to, including those marked hidden; results do not include clinics user is restricted from or production not assigned to a clinic. </li>
</ul>
<p class="MarginBottomZero"><b>Date Range</b>: Select the date range criteria. </p>
<ul class="MarginBottomGap">
<li><b>Arrows</b>: Click to move forward or back one month from the currently entered date range.</li>
<li><b>This Month</b>: Click to enter the current calendar month into the From / To date range boxes.</li>
<li><b>From / To</b>: Type a specific date range to run the report.</li>
</ul>
<p class="MarginBottomZero"><b>Show Insurance Write-offs:</b></p>
<ul class="MarginBottomGap">
<li><b>Using insurance payment date</b>: Write-offs are calculated based on date of insurance payment.</li>
<li><b>Using procedure date</b>: Write-offs are calculated based on date of procedure.</li>
<li><b>Using initial claim date for write-off estimates, ins pay date for write-off adjustments: </b> Apply write-off estimates on the day of the insurance claim and changes to write-offs estimates on the insurance payment date. See below for descriptions of each write-off column.</li>
</ul>
<h2>Report</h2>
<p>After setting report criteria, click <b>OK</b> to generate the report. Below is an example of the report and explanation of the report columns. </p>
<p>For a description of toolbar buttons, see <a href="reportcomplex.html">Complex Report System</a>.</p>
<img src="images/reportProductionGoalPrint.gif" width="636" height="603"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Production</b>: Total amount of completed procedures, before write-offs or adjustments.</li>
<li><b>Prod Goal</b>: The total goal of the selected providers. Providers must be on the <a href="schedule.html">Schedule</a> for goal to calculate and have an <i>Hourly Production Goal</i> entered in <a href="providerseditwindow.html">Edit Provider</a>.  <ul>
<li>If using Clinics, the provider must be the default provider for an <a href="operatories.html">Operatory</a> assigned to the Clinic. If the provider is not the default, they must be set as a provider override for an Operatory assigned to the Clinic in <a href="scheduleeditdaywindow.html">Schedule Edit</a></li>
</ul>
</li>
<li><b>Scheduled</b>: Production in scheduled appointments. Procedures must be attached to appointments to calculate.</li>
<li><b>Adjust</b>: Completed adjustments and discounts attached to scheduled treatment planned procedures.</li>
<li><b>Write-offs</b>: Amount of total insurance write-offs. Appears when <i>Using insurance payment date</i> or <i>Using procedure date</i> is selected.</li>
<li>The following columns display when <i>Use initial claim date for write-off estimates, ins pay date for write-off adjustments</i> is selected: <ul>
<li><b>Write-off Est</b>: The write-off estimate amount in the <a href="claimsnapshot.html">Claim Snapshot</a>.</li>
<li><b>Write-off Adj</b>: The change in write-off amounts. Write-off estimate amount (Write-off Est column) minus the actual write-off amount.</li>
</ul>
</li>
<li><b>Total Prod</b>: Total production. <span class="codeblock">Production + Sched + Adjustments - Write-offs</span> or <span class="codeblock">Production + Sched + Adj - Write-off Est + Write-off Adj</span>. </li>
</ul>
<p><div class="Note">Note: <ul>
<li>While write-offs are displayed as a negative amount in the grid, that is only for visual emphasis. This does not result in negative amounts being subtracted in the production totals using the equations defined above.</li>
<li>Occasionally, this report may change if a patients Treatment Plan has not been viewed. Once viewed, the report will refresh with the new discount information.</li>
</ul>
</div>
</p>
</div>
</div>
</body>
</html>```
