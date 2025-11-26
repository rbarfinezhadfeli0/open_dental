# File: ./www.opendental.com/manual243/familybalancertool.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Family Balancer Tool</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('familybalancertool','databasemaintenancetools','databasemaintenance','+tools','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/familybalancertool.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/familybalancertool.html" >v24.2</option><option value="https://www.opendental.com/manual241/familybalancertool.html" >v24.1</option><option value="https://www.opendental.com/manual233/familybalancertool.html" >v23.3</option><option value="https://www.opendental.com/manual232/familybalancertool.html" >v23.2</option><option value="https://www.opendental.com/manual231/familybalancertool.html" >v23.1</option><option value="https://www.opendental.com/manual224/familybalancertool.html" >v22.4</option><option value="https://www.opendental.com/manual223/familybalancertool.html" >v22.3</option><option value="https://www.opendental.com/manual222/familybalancertool.html" >v22.2</option><option value="https://www.opendental.com/manual221/familybalancertool.html" >v22.1</option><option value="https://www.opendental.com/manual214/familybalancertool.html" >v21.4</option><option value="https://www.opendental.com/manual213/familybalancertool.html" >v21.3</option><option value="https://www.opendental.com/manual212/familybalancertool.html" >v21.2</option><option value="https://www.opendental.com/manual211/familybalancertool.html" >v21.1</option><option value="https://www.opendental.com/manual205/familybalancertool.html" >v20.5</option><option value="https://www.opendental.com/manual204/familybalancertool.html" >v20.4</option><option value="https://www.opendental.com/manual203/familybalancertool.html" >v20.3</option><option value="https://www.opendental.com/manual202/familybalancertool.html" >v20.2</option><option value="https://www.opendental.com/manual201/familybalancertool.html" >v20.1</option><option value="https://www.opendental.com/manual194/familybalancertool.html" >v19.4</option><option value="https://www.opendental.com/manual193/familybalancertool.html" >v19.3</option><option value="https://www.opendental.com/manual192/familybalancertool.html" >v19.2</option><option value="https://www.opendental.com/manual191/familybalancertool.html" >v19.1</option><option value="https://www.opendental.com/manual184/familybalancertool.html" >v18.4</option><option value="https://www.opendental.com/manual183/familybalancertool.html" >v18.3</option><option value="https://www.opendental.com/manual182/familybalancertool.html" >v18.2</option><option value="https://www.opendental.com/manual181/familybalancertool.html" >v18.1</option><option value="https://www.opendental.com/manual174/familybalancertool.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Family Balancer Tool</p></div>
<div class="GeneralPageContent">
<p>See <a href="databasemaintenancetools.html">Database Maintenance Tools</a>.</p>
<p>The Family Balancer Tool is used to recreate income transfers and allocations in your database using First In First Out (FIFO) logic. This means that income is allocated towards the oldest production items on the Family account first which may result in differing individual balances, with the family balance itself remaining unchanged. See <a href="incometransfermanager.html">Income Transfer Manager</a> for more information on the logic that the Family Balancer Tool uses.</p>
<h2>Does Your Office Need the Family Balancer Tool?</h2>
<p>The Family Balancer Tool affects accounts across your entire database, and may not be necessary in all scenarios. Before resorting to the Family Balancer Tool, your staff may be able to clean up accounts manually using <a href="incometransfermanager.html">Income Transfer Manager</a>, <a href="unearnedallocate.html">Allocate Unearned Income</a>, and/or manual <a href="incometransfer.html">Income Transfer</a>.</p>
<p class="MarginBottomZero">The Family Balancer Tool may be the right tool for offices </p>
<ul class="MarginBottomGap">
<li>With a conversion date between October 1st, 2019 - June 30th, 2020 (Version 19)</li>
<li>With a high amount of unearned income</li>
<li>With income allocating to old procedures or providers.</li>
<li>Currently using manual allocation that want to switch to auto-split allocation</li>
</ul>
<h2>Preparing for your Appointment</h2>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><a href="update.html">Update</a> to the latest stable version of Open Dental</li>
<li>Audit Reports</li>
<li>Select<i> As Of </i>Dates</li>
</ul>
<h2>Auditing Reports</h2>
<p>We highly recommend auditing the following reports to ensure the Family Balancer Tool runs as intended. If the reports are not cleaned up prior to the appointment, they can be addressed after the tool has been run.</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><a href="reportprocsnotbilledins.html">Procedures Not Billed to Insurance Report</a><ul>
<li>Any procedures with unsent insurance estimates are only allocated up to the estimated patient portion by the Family Balancer Tool.</li>
</ul>
</li>
<li><a href="reportproceduresoverpaid.html">Procedures Overpaid Report</a><ul>
<li>If running the Procedures Overpaid Report, check <i>Exclude if no Insurance Payment/Write-off</i>.</li>
</ul>
</li>
<li><a href="reportpaymentplan.html">Payment Plans Report</a><ul>
<li>Any family with a payment plan that has mismatched Treatment Credits (Tx Credits) and principal is skipped by the Family Balancer Tool </li>
<li>Use the following filters when running the report: <ul>
<li>Payment Plan Types: <i>Both</i></li>
<li>Hide Completed Payment Plans: <i>Unchecked</i></li>
<li>Limit to Plans Created in Date Range: <i>Unchecked</i></li>
<li>Providers: Check <i>All</i></li>
<li>Clinics (if applicable): Check <i>All</i></li>
</ul>
</li>
<li>For <a href="paymentplanpatient.html">Old Payment Plans</a>, from the patient <a href="account.html">Account Module</a>: </li>
<ul>
<li>Verify Tx Credits match the principal amount</li>
<li>Verify Tx Credits are attached to production</li>
</ul>
</ul>
</li>
</ul>
<h2>Selecting Dates</h2>
<p>The Family Balancer Tool recreates income transfers for accounts through a specified date. We generally suggest running the Family Balancer Tool with one of the following <i>as of</i> dates:</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>Practice Purchase or Conversion Date </li>
<li>End of the most recent fiscal year </li>
<li>Date of the Family Balancer Tool appointment  <ul>
<li><i>Optional</i>: Backdate the final income transfer 3+ months to preserve the status of <a href="reportaging.html">Aging of Accounts Receivable (A/R)</a>.</li>
</ul>
</li>
</ul>
<h2>Scheduling and Completing the Family Balancer Appointment</h2>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>Call <a href="../contact.html">Open Dental Support </a>to schedule a test Family Balancer appointment. Test appointment is required. Office will still have access to Open Dental during this time.</li>
<li>Review test Family Balancer data and complete paperwork. This is required before scheduling a final Family Balancer appointment.</li>
<li>Schedule a final Family Balancer appointment. Office will not have access to Open Dental during the final appointment. This includes all Clinics sharing a database. </li>
</ul>
<h2>After the Final Family Balancer Appointment</h2>
<p>Your office may still need to manually clean up or allocate some accounts, especially those with outstanding claims or procedures not billed to insurance, procedures overpaid by insurance, or accounts with payment plans. </p>
</div>
</div>
</body>
</html>```
