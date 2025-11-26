# File: ./www.opendental.com/manual232/reportdailywriteoffs.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Daily Writeoff Report</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('reportdailywriteoffs','+daily','reportsstandard','reports','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/manual243/reportdailywriteoffs.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/reportdailywriteoffs.html" >v24.2</option><option value="https://www.opendental.com/manual241/reportdailywriteoffs.html" >v24.1</option><option value="https://www.opendental.com/manual233/reportdailywriteoffs.html" >v23.3</option><option value="https://www.opendental.com/manual232/reportdailywriteoffs.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/reportdailywriteoffs.html" >v23.1</option><option value="https://www.opendental.com/manual224/reportdailywriteoffs.html" >v22.4</option><option value="https://www.opendental.com/manual223/reportdailywriteoffs.html" >v22.3</option><option value="https://www.opendental.com/manual222/reportdailywriteoffs.html" >v22.2</option><option value="https://www.opendental.com/manual221/reportdailywriteoffs.html" >v22.1</option><option value="https://www.opendental.com/manual214/reportdailywriteoffs.html" >v21.4</option><option value="https://www.opendental.com/manual213/reportdailywriteoffs.html" >v21.3</option><option value="https://www.opendental.com/manual212/reportdailywriteoffs.html" >v21.2</option><option value="https://www.opendental.com/manual211/reportdailywriteoffs.html" >v21.1</option><option value="https://www.opendental.com/manual205/reportdailywriteoffs.html" >v20.5</option><option value="https://www.opendental.com/manual204/reportdailywriteoffs.html" >v20.4</option><option value="https://www.opendental.com/manual203/reportdailywriteoffs.html" >v20.3</option><option value="https://www.opendental.com/manual202/reportdailywriteoffs.html" >v20.2</option><option value="https://www.opendental.com/manual201/reportdailywriteoffs.html" >v20.1</option><option value="https://www.opendental.com/manual194/reportdailywriteoffs.html" >v19.4</option><option value="https://www.opendental.com/manual193/reportdailywriteoffs.html" >v19.3</option><option value="https://www.opendental.com/manual192/reportdailywriteoffs.html" >v19.2</option><option value="https://www.opendental.com/manual191/reportdailywriteoffs.html" >v19.1</option><option value="https://www.opendental.com/manual184/reportdailywriteoffs.html" >v18.4</option><option value="https://www.opendental.com/manual183/reportdailywriteoffs.html" >v18.3</option><option value="https://www.opendental.com/manual182/reportdailywriteoffs.html" >v18.2</option><option value="https://www.opendental.com/manual181/reportdailywriteoffs.html" >v18.1</option><option value="https://www.opendental.com/manual174/reportdailywriteoffs.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Daily Writeoff Report</p></div>
<div class="GeneralPageContent">
<p>The Daily Write-off Report lists write-offs by patient for a single date or date range. </p>
<p>In <a href="reportsstandard.html">Standard Reports</a>, in the <i>Daily</i> section, click <b>Write-offs</b>.</p>
<img src="images/reportDailyWriteoff.png" width="751" height="462"/><p> Write-offs are only tracked for insurance plans that use a <a href="planppo.html">PPO Percentage</a> or <a href="planppofixed.html">PPO Fixed Benefit</a> plan type.</p>
<p>To control user access to this report, see <a href="reportsecurity.html">Report Setup: Security Permissions</a>.</p>
<h2>Filters</h2>
<p>Set the report criteria and filters before running the report.</p>
<p><b>Calendar:</b> In the first calendar select the start date. In the second calendar select the end date. The date range defaults to today's date.</p>
<p class="MarginBottomZero"><b>Providers</b>: Select the providers to include. Ctrl + click to select multiple providers. Check <b>All</b> to include all listed providers. </p>
<ul class="MarginBottomGap">
<li> Filters by provider attached to the <a href="claimprocedure.html">Claim Procedure</a>. </li>
<li>Users without the <i>Daily - View All Providers</i> permission will only see the provider associated with their <a href="securityusers.html">User</a> in the Providers list and the All checkbox will be disabled. </li>
<li>Users must have the <i>Daily - View All Providers</i> to access the full provider list and utilize the All checkbox.</li>
</ul>
<p class="MarginBottomZero"><b>Show Insurance Write-offs:</b> Determines the date write-offs are applied. See <a href="writeoffstoproduction.html">Show Insurance Writeoffs</a> for more details. </p>
<ul class="MarginBottomGap">
<li><b>Using insurance payment date</b>: Apply write-offs on the date the insurance claim is received (<a href="claimreceive.html">Receive Claim</a>).</li>
<li><b>Using procedure date</b>: Apply write-offs on the day the procedure is completed.</li>
<li><b>Using initial claim date for write-off estimates, insurance pay date for write-off adjustments</b>: Apply write-off estimates on the claim date and changes to write-offs on the insurance payment date. Includes additional columns on the report. See below for details.</li>
</ul>
<p class="MarginBottomZero"><b>Clinics</b>: Select clinics to include in the report. Ctrl + click to choose multiple clinics or check <b>All (Includes hidden)</b> to run the report for all clinics.  </p>
<ul class="MarginBottomGap">
<li>Filters by clinic assigned to the claim procedure.</li>
<li>If user is restricted to specific clinics, only accessible clinics will list. When checking <b>All (includes hidden)</b>, results will include all clinics user has access to, including those marked hidden; results do not include clinics user is restricted from or write-offs not assigned to a clinic. </li>
</ul>
<h2>Report</h2>
<p>Click <b>OK</b> to generate a print preview of the report. The resulting report will change depending on the selected <i>Show Insurance Write-offs</i> option. Below is an example of the report and descriptions of each column on the report.</p>
<img src="images/reportDailyWriteoffPrint.gif" width="841" height="347"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Carrier</b>: Typically the insurance carrier attached to the claim of the associated write-off. <ul>
<li>If more than one insurance carrier has write-offs entered for the same provider, patient, and date, the write-off total is grouped and only one carrier name is displayed. </li>
</ul>
</li>
<li><b>Provider</b>: Provider attached to the claim procedure.</li>
<li><b>Clinic</b>: Clinic attached to the claim procedure.</li>
<li><b>Write-off</b>: Write-off amount.</li>
</ul>
<p class="MarginBottomZero">The following columns appear when <i>Using initial claim date for write-off estimates, insurance pay date for write-off adjustments</i> is selected: </p>
<ul class="MarginBottomGap">
<li><b>Write-off Estimate</b>: Write-off estimate in the <a href="claimsnapshot.html">Claim Snapshot</a>. Appears on the report on the initial claim date.</li>
<li><b>Write-off Adjustment</b>: Write-off adjustments from the insurance payment date (e.g., any change to the original write-off estimate).</li>
<li><b>Write-off</b>: Total of the <i>Write-off Estimate</i> and <i>Write-off Adjustment</i> columns. </li>
</ul>
<p><div class="Note">Note: When running using <i>Using initial claim date for write-off estimates, insurance pay date for write-off adjustments</i>: <ul>
<li>The Write-off column doesn't necessarily reflect the actual write-off if the date range of the report does not include the initial claim date and the payment date.</li>
<li>Write-offs are totaled at the bottom of the report. For the date range: <span class="codeblock">Write-off Estimate + Write-off Adjustment = Write-off</span></li>
</ul>
</div>
</p>
</div>
</div>
</body>
</html>```
